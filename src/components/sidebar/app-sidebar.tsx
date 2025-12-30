import { UserButton } from "@daveyplate/better-auth-ui"
import { Settings, Sparkles, User } from "lucide-react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu
} from "~/components/ui/sidebar"
import Credits from "./credits"
import Upgrade from "./upgrade"
import MobileSidebarClose from "./mobile-sidebar-close"
import SidebarMenuItems from "./sidebar-menu-items"
export default function AppSidebar() {
  return (
    <Sidebar className="from-background to-muted/20 border-r-0 bg-linear-to-b">
      <SidebarContent className="px-3">
        {/* 移动端关闭按钮 */}
        <MobileSidebarClose />
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary mt-6 mb-8 flex flex-col items-start justify-start px-2">
            <Link href="/" className="mb-1 flex items-center gap-2">
              <Sparkles className="text-primary h-6 w-6" />
              <p className="from-primary to-primary/70 bg-linear-to-r bg-clip-text text-2xl font-bold tracking-tight text-transparent">
                AI 图片编辑
              </p>
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              <SidebarMenuItems />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>

      <SidebarFooter className="bg-muted/30 border-t p-3">
        <div className="mb-3 w-full flex items-center justify-center gap-2 text-xs">
          <Credits />
          <Upgrade />
        </div>
        <UserButton
          variant="outline"
          className="border-muted-foreground/20 hover:border-primary/50 w-full transition-colors"
          disableDefaultLinks={true}
          size="default"
          additionalLinks={[
            {
              label: "个人信息",
              href: "/dashboard/customer-portal",
              icon: <User className="h-4 w-4" />,
            },
            {
              label: "设置",
              href: "/dashboard/settings",
              icon: <Settings className="h-4 w-4" />,
            },
          ]}
        />
      </SidebarFooter>

    </Sidebar>
  )
}
