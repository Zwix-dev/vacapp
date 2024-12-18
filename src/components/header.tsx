import { Bell } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">
          <Bell className="h-6 w-6" />
        </button>
        <div className="relative">
          <img
            className="h-10 w-10 rounded-full"
            src="/placeholder.svg?height=40&width=40"
            alt="Avatar de l'utilisateur"
          />
        </div>
      </div>
    </header>
  )
}

