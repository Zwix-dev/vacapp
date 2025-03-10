import { RHSidebar } from '@/components/sidebar'
import Nav from '@/components/nav'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { ThemeProvider } from 'next-themes'
import { checkSubscribe } from '@/actions/checkSubscribe'
import { checkLogin } from '@/actions/checkLogin'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default async function RootLayout({ children, }: { children: React.ReactNode }) {
  const sessionData = await checkLogin()
  let userEmail = sessionData?.user?.email || null
  let haveSubscribed = null

  if (userEmail) {
    haveSubscribed = await checkSubscribe(userEmail)
  }


  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SidebarProvider>

        <RHSidebar isSub={haveSubscribed} />

        <SidebarInset>
          {haveSubscribed ?
            <div className='flex justify-center'>

              {children}
            </div>
            :
            <div className="flex h-screen w-full items-center justify-center">
              <div className="mx-auto flex w-full max-w-2xl flex-col items-center space-y-6 p-4">
                <h1 className="text-center text-3xl font-bold">Vous n&apos;avez pas d&apos;abonnement</h1>
                <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                  <Input id="redeem-key" placeholder="Entrez votre clé d'activation" className="flex-1" />
                  <Button type="submit" className="w-full md:w-auto">
                    Activer
                  </Button>
                </div>
              </div>
            </div>
          }

        </SidebarInset>


      </SidebarProvider>
    </ThemeProvider>



  )
}