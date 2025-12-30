import { Providers } from "~/components/providers"

import { SidebarInset, SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar"
import AppSidebar from "~/components/sidebar/app-sidebar"
import BreadcrumbPageClient from "~/components/sidebar/breadcrumb-page-client"
import { Separator } from "~/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from "~/components/ui/breadcrumb"


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <SidebarProvider >
        <AppSidebar />

        {/* SidebarInset 用于在侧边栏展开时自动为内容区域添加左侧内边距，避免内容被遮挡 */}
        <SidebarInset>
          <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur border-border/40 sticky top-0 z-10 border-b px-6 py-3 shadow-sm">
            <div className="flex shrink-0 grow items-center gap-3">
              {/* 触发侧边栏展开/收起的按钮 */}
              <SidebarTrigger className="hover:bg-muted transition-colors -ml-1 h-8 w-8" />
              <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-6" />

              <Breadcrumb >
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPageClient />
                  </BreadcrumbItem>
                </ BreadcrumbList >
              </Breadcrumb>
            </div>
          </header>
          <main>
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </Providers>
  )
}