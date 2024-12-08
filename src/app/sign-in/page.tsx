import Footer from "@/components/footer"
import { LoginForm } from "@/components/login-form"
import Nav from "@/components/nav"
export default function Page() {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <div className="flex-grow flex items-center justify-center px-4">
        <LoginForm />
      </div>
      <Footer />
    </div>
  )
}
