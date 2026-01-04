"use client"
import { usePathname } from "next/navigation";
import { BreadcrumbPage } from "../ui/breadcrumb";

export default function BreadcrumbPageClient() {
  const path = usePathname()
  const getBreadcrumbPage = (path: string) => {
    switch (path) {
      case "/dashboard":
        return "首页"
      case "/dashboard/create":
        return "图片生成"
      case "/dashboard/projects":
        return "图片管理"
      case "/dashboard/settings":
        return "用户设置"
      default:
        return "Unknown"
    }
  }
  return (
    <BreadcrumbPage className="text-foreground text-sm font-medium">
      {getBreadcrumbPage(path)}
    </BreadcrumbPage>
  )
}
