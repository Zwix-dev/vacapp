import Footer from "@/components/footer"
import Nav from "@/components/nav"
import { RegisterForm } from "@/components/register-form"
export default function Page() {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <div className="flex-grow flex items-center justify-center px-4">
        <RegisterForm />
      </div>
      <Footer />
    </div>
  )
}
