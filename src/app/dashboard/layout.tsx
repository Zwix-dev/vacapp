import { RHSidebar } from '@/components/sidebar'
import Nav from '@/components/nav'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { ThemeProvider } from 'next-themes'
import { checkSubscribe } from '@/actions/checkSubscribe'
import { checkLogin } from '@/actions/checkLogin'

export default async function RootLayout({children,}: {children: React.ReactNode}) {
  const sessionData = await checkLogin()
  let userEmail = sessionData?.user?.email || null
  let haveSubscribed = null

  if (userEmail) {
    haveSubscribed = await checkSubscribe(userEmail)
  }
  
  
 
  return (



    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SidebarProvider>
    
        <RHSidebar isSub={haveSubscribed}/>
        
        <SidebarInset>
          <div className='flex justify-center'>
            
            {children}
          </div>
        </SidebarInset> 


      </SidebarProvider>
    </ThemeProvider>



  )
}