"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { register } from "@/actions/register";
import { Loader2 } from "lucide-react"
export function RegisterForm() {
    const router = useRouter();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const handleRegisterClick = () => {
        router.push("/register");
    }
    async function onSubmit(event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) {
        event.preventDefault();
        setIsLoading(true);
        try {
            const formData = new FormData(event.currentTarget);
            const response = await register(formData);

            if (!!response.error) {
                setError(response.error);
                setIsLoading(false);
            } else {
                router.push("/login");
            }
        } catch (e) {
            setError(error);
            setIsLoading(false);
        }
    }
    return (
        <Card className="mx-auto max-w-sm w-full">
            <form onSubmit={onSubmit}>
                <CardHeader>
                    <CardTitle className="text-3xl">Register</CardTitle>
                    <CardDescription>Enter your information to create an account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="full-name">Full name</Label>
                        <Input id="full-name" name="full-name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="me@example.com" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" name="password" type="password" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirm-password" >Confirm Password</Label>
                        <Input id="confirm-password" name='confirm-password' type="password" required />
                    </div>
                    <Button className="w-full" type="submit" disabled={isLoading}>
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <Loader2 className="animate-spin"></Loader2>
                            </span>
                        ) : (
                            "Register"
                        )}
                    </Button>
                    <div className="text-sm mx-auto text-red-500">{error}</div>
                </CardContent>
            </form>
        </Card>
    )
}