import { Users, DollarSign, BarChart, ReceiptText, Clock3, Newspaper } from 'lucide-react'

export default function Component() {
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <div className="flex-1 p-6 space-y-4 m-4">
        <div className='flex justify-between'>
          <h1 className="text-2xl font-bold">Tableau de bord</h1>
          <p>Code d'établissement : <span className='dark:bg-gray-700 bg-gray-100 border p-2 rounded-lg '>657-456</span></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black dark:text-white">
          <div className="bg-white rounded-lg shadow p-8 dark:bg-background bg-sidebar dark:border">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl font-bold">2350</span>
                </div>
                <h3 className="text-base font-medium text-muted-foreground">Utilisateurs enregistrés</h3>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-full">
                <Users size={32} />
              </div>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow p-8 dark:bg-background dark:border">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl font-bold">20</span>
                </div>
                <h3 className="text-sm font-medium text-muted-foreground">Nouvelles candidatures</h3>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-full">
                <Newspaper size={32} />
              </div>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow p-8 dark:bg-background dark:border">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl font-bold">200</span>
                </div>
                <h3 className="text-sm font-medium text-muted-foreground">Heures d'absences ce mois-ci</h3>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-full">
                <Clock3 size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

