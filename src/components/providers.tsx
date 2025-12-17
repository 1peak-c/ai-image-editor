"use client"

import { AuthUIProvider } from "@daveyplate/better-auth-ui"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { ReactNode } from "react"

import { authClient } from "~/lib/auth-client"

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter()

  return (
    <AuthUIProvider
      authClient={authClient}
      navigate={(to) => router.push(to)}
      replace={(to) => router.replace(to)}
      onSessionChange={async () => {
        // 清除路由器缓存并重新加载
        router.refresh()
        // 获取是否登录成功，成功后跳转dashboard页面
        try {
          const session = await authClient.getSession()
          // console.log("session:", session)
          if (session.data?.user && typeof window !== "undefined") {
            router.push("/dashboard")
          }
        } catch (error) {
          console.error("获取登录状态失败:", error)
        }
      }}
      Link={Link}
    >
      {children}
    </AuthUIProvider>
  )
}