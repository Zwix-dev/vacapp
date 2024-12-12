'use client'
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { Label } from './ui/label'
import { reset } from '@/actions/reset'
export default function ResetPasswordForm() {
    const [verificationStatus, setVerificationStatus] = useState<'idle' | 'envoi' | 'success' | 'error'>('idle')
    const handleVerification = async (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined }) => {
        event.preventDefault();
        setVerificationStatus('envoi')
        const formData = new FormData(event.currentTarget);

        const email = formData.get("email");
        if (typeof email !== 'string') {
            console.error("L'email est manquant ou invalide.");
            setVerificationStatus('error');
            return;
        }
        try {
            const emailResponse = await reset(email);
            console.log("Réponse de l'envoi :", emailResponse);
            await new Promise(resolve => setTimeout(resolve, 2000));
            setVerificationStatus('success');
        } catch (error) {
            console.error("Erreur lors de l'envoi du lien :", error);
            setVerificationStatus('error'); 
        }

    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Password reset</CardTitle>
                <CardDescription>Entrez votre e-mail ci-dessous. Un lien de rénitialisation vous sera envoyé par mail.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleVerification}>
                    <div className="grid gap-2 mb-5">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        disabled={verificationStatus === 'envoi' || verificationStatus === 'success'}
                        className="w-full bg-teal-500 "
                    >
                        {verificationStatus === 'envoi' ? 'Chargement...' : 'Vérifier'}
                    </Button>
                    {verificationStatus === 'success' && (
                        <p className="flex items-center text-green-500 text-sm mt-3">

                            Un lien a été envoyé !
                        </p>
                    )}
                    {verificationStatus === 'error' && (
                        <p className="flex items-center text-red-500 text-sm mt-3">
                            Vérification échouée. Veuillez réessayer.
                        </p>
                    )}
                </form>
            </CardContent>

        </Card>
    )

}

