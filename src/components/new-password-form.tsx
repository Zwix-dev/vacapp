"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { newPaswword } from "@/actions/new-password";
import { useToast } from "@/hooks/use-toast";



export function NewPassForm() {
    const router = useRouter();
    const [error, setError] = useState("");
    const [succes, setSucces] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const { toast } = useToast()
    async function onSubmit(event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined }) {
        event.preventDefault();
        setIsLoading(true);
        if (token) {
            try {
                const formData = new FormData(event.currentTarget);
                const response = await newPaswword(token, formData);
                if (!!response.error) {
                    toast({
                        description: `${response.error}`,
                        variant:'destructive',
                      })
                    setError(response.error);
                    setIsLoading(false);
                } else {
                    if (response.success) {
                        toast({
                            description:`${response.success}` ,
                            variant:'succes',
                        })
                        setSucces(response.success)
                    }
                    await new Promise(resolve => setTimeout(resolve, 1000))
                    router.push("/auth/login");
                }
            } catch (e) {
                setError(error);
                setIsLoading(false);
            }
        }
    }
    return (
        <Card className="mx-auto max-w-sm w-full">
            <form onSubmit={onSubmit}>
                <CardHeader>
                    <CardTitle className="text-3xl">Mot de passe</CardTitle>
                    <CardDescription>Rénitialisez votre mot de passe</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input id="password" name="password" type="password" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirm-password" >Confirmez votre mot de passe</Label>
                        <Input id="confirm-password" name='confirm-password' type="password" required />
                    </div>
                    <Button className="w-full bg-teal-500" type="submit" disabled={isLoading}>
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <Loader2 className="animate-spin"></Loader2>
                            </span>
                        ) : (
                            "Valider"
                        )}
                    </Button>
                </CardContent>
            </form>
        </Card>
    )
}