'use client'
import { AppSidebar } from "@/components/dashboard/dashboard-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen bg-background">
                <AppSidebar />
                <main className="flex-1 p-6">
                    <div className="container mx-auto">
                        <SidebarTrigger />
                        {children}
                    </div>
                </main>
            </div>
        </SidebarProvider>

    )
}