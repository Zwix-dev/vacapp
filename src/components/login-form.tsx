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
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
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
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" name="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <div className="flex flex-row gap-4">
              <Button variant="outline" className="w-full" onClick={() => signIn('google')}>
                Login with Google
              </Button>
              <Button variant="outline" className="w-full" onClick={() => signIn('github')}>
                Login with GitHub
              </Button>
            </div>

          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="" className="underline">
              Sign up
            </Link>
          </div>
          <div className="text-sm mx-auto text-red-500">{error}</div>
        </CardContent>
      </form>
    </Card>
  )
}
