import { RHSidebar } from '@/components/sidebar'
import Nav from '@/components/nav'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { ThemeProvider } from 'next-themes'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (



    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SidebarProvider>
        <RHSidebar />
        <SidebarInset>
          <div className='flex justify-center'>
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>



  )
}