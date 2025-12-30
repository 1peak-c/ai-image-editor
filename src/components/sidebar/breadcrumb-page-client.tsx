"use client"
import { usePathname } from "next/navigation";
import { BreadcrumbPage } from "../ui/breadcrumb";

export default function BreadcrumbPageClient() {
  const path = usePathname()
  const getBreadcrumbPage = (path: string) => {
    switch (path) {
      case "/dashboard":
        return "首页"
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
