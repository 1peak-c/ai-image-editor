"use client"
import { FolderOpen, LayoutDashboard, Settings, Wand2 } from "lucide-react"
import { SidebarMenuButton, SidebarMenuItem, useSidebar } from "../ui/sidebar"
import { cn } from "~/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SidebarMenuItems() {
  const path = usePathname();
  const { setOpenMobile, isMobile } = useSidebar();

  let items = [
    {
      label: "看板",
      href: "/dashboard",
      icon: LayoutDashboard,
      active: true
    },
    {
      label: "图片生成",
      href: "/dashboard/generate",
      icon: Wand2,
      active: false
    },
    {
      label: "图片管理",
      href: "/dashboard/projects",
      icon: FolderOpen,
      active: false
    },
    {
      label: "用户设置",
      href: "/dashboard/settings",
      icon: Settings,
      active: false
    },
  ]
  items = items.map((item) => ({
    ...item,
    active: path === item.href,
  }));

  const handleMenuClick = () => {
    // 移动端时点击菜单时关闭菜单弹窗
    if (isMobile) {
      setOpenMobile(false);
    }
  }
  return (
    <>
      {items.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton asChild
            className={cn(
              "group hover:bg-primary/10 hover:text-primary relative h-10 w-full justify-start rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
              item.active && "bg-sidebar-accent text-primary shadow-sm",
            )}>
            <Link
              href={item.href}
              className="flex items-center gap-3"
              onClick={handleMenuClick}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 transition-colors duration-200",
                  item.active
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-primary",
                )}
              />
              <span className="truncate">{item.label}</span>
              {item.active && (
                <div className="bg-primary absolute top-1/2 left-0 h-6 w-1 -translate-y-1/2 rounded-r-full" />
              )}
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  )
}
