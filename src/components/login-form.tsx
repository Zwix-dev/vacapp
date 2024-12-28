"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { doCredentialLogin } from "@/actions/login"
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
export function LoginForm() {
  const [error, setError] = useState("");
  const { toast } = useToast()
  const router = useRouter();
  async function onSubmit(event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined }) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await doCredentialLogin(formData);
      if (!!response?.error) {
        toast({
          description: `${response.error}`,
          variant: "destructive",
          duration: 2200,
          
        })
        setError(response.error);
      } else {
        toast({
          description: "Connexion réussie",
          duration: 2200,
        })
        router.push("/dashboard")
      }
    } catch (e) {

      setError("E-mail ou mot de passe incorrect");
    }

  }
  return (
    <Card className="mx-auto max-w-sm">
      <form onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle className="text-2xl text-indigo-900 dark:text-white">Login</CardTitle>
          <CardDescription>
            Entrez votre email ci-dessous pour vous connecter.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Mot-de-passe</Label>
                <Link href="/auth/pass-reset" className="ml-auto inline-block text-sm underline">
                  Mot-de-passe oublié ?
                </Link>
              </div>
              <Input id="password" name="password" type="password" required />
              <div className="flex flex-row gap-4">
                <Button variant="outline" className="w-full" onClick={() => signIn('google')}>
                  <FaGoogle />
                </Button>
                <Button variant="outline" className="w-full" onClick={() => signIn('github')}>
                  <FaGithub />
                </Button>
              </div>
            </div>
            <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-700">
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </form>
    </Card>
  )
}
