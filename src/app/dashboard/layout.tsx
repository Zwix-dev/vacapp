import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function LayoutDashborad({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}