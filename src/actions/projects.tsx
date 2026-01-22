"use server"

import { auth } from "~/lib/auth"
import { headers } from "next/headers"
import { db } from "~/server/db"

interface CreateProjectData {
  imageUrl: string
  imageKitId: string
  filePath: string
  name?: string
}

// 创建项目资源
export async function createProject(params: CreateProjectData) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    })
    if (!session?.user?.id) {
      throw new Error("用户未登录")
    }
    const project = await db.project.create({
      data: {
        userId: session.user.id,
        imageUrl: params.imageUrl,
        imageKitId: params.imageKitId,
        filePath: params.filePath,
        name: params.name ?? "未命名文件",
      },
    })
    return { success: true, project }
  } catch (error) {
    console.error(error, '创建项目资源失败')
    return { success: false, error: '创建项目资源失败' }
  }
}

// 获取用户项目列表
export async function getProjects() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    })
    if (!session?.user?.id) {
      throw new Error("用户未登录")
    }
    const projects = await db.project.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    })
    return { success: true, projects }
  } catch (error) {
    console.error(error, '获取项目资源失败')
    return { success: false, error: '获取项目资源失败' }
  }
}

/**
 * 扣除用户积分
 * @param creditsToDeduct 扣除的积分数量
 */
export async function deductCredits(creditsToDeduct: number, operation?: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    })
    if (!session?.user?.id) {
      throw new Error("用户未登录")
    }
    const user = await db.user.findUnique({
      where: { id: session.user.id },
      select: { credits: true }
    })
    if (!user) {
      throw new Error("用户不存在")
    }
    if (user.credits < creditsToDeduct) {
      return { success: false, error: '积分不足' }
    }
    const updatedUser = await db.user.update({
      where: { id: session.user.id },
      data: { credits: user.credits - creditsToDeduct }
    })
    return { success: true, remainingCredits: updatedUser.credits }
  } catch (error) {
    console.error(error, '积分扣除失败')
    return { success: false, error: '积分扣除失败' }
  }
}
