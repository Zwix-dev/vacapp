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
import { FaGoogle, FaGithub  } from "react-icons/fa";
export function LoginForm() {
  const [error, setError] = useState("");

  async function onSubmit(event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined }) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await doCredentialLogin(formData);
      if (!!response.error) {
        setError(response.error);
      }

    } catch (e) {

      setError("E-mail ou mot de passe incorrect");
    }

  }
  return (
    <Card className="mx-auto max-w-sm">
      <form onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle className="text-2xl text-indigo-900">Login</CardTitle>
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
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Mot-de-passe oublié ?
                </Link>
              </div>
              {error == "Invalid password" && <div className="">
                <Input id="password" name="password" type="password" className="border-red-500" required />
                <div className="text-sm mx-auto text-red-500">Mot de passe invalide</div>
              </div>}
              <Input id="password" name="password" type="password" required />
              <div className="text-sm text-red-500">{error}</div>
            </div>
            <Button type="submit" className="w-full bg-teal-500">
              Login
            </Button>
            <div className="flex flex-row gap-4">
              <Button variant="outline" className="w-full" onClick={() => signIn('google')}>
                <FaGoogle />
              </Button>
              <Button variant="outline" className="w-full" onClick={() => signIn('github')}>
                <FaGithub />
              </Button>
            </div>
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
