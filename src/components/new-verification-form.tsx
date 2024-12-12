'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useSearchParams } from 'next/navigation'
import { newVerification } from '@/actions/new-verification'
import { useRouter } from "next/navigation";

export default function VerificationForm() {
    const [verificationStatus, setVerificationStatus] = useState<'idle' | 'verifying' | 'success' | 'error'>('idle')
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const router = useRouter()
    const handleVerification = async () => {
        setVerificationStatus('verifying')
        if (token) {
            try {
                const verificationResponse = await newVerification(token)
                await new Promise(resolve => setTimeout(resolve, 2000))
                if (verificationResponse.success) {
                    setVerificationStatus('success')
                    router.push('/')
                }

            } catch (error) {
                setVerificationStatus('error')
            }
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Account Verification</CardTitle>
                <CardDescription>Cliquez sur le bouton ci-dessous pour vérifier votre compte</CardDescription>
            </CardHeader>
            <CardContent>
                <Button
                    onClick={handleVerification}
                    disabled={verificationStatus === 'verifying' || verificationStatus === 'success'}
                    className="w-full bg-teal-500"
                >
                    {verificationStatus === 'verifying' ? 'Chargement...' : 'Vérifier'}
                </Button>
                {verificationStatus === 'success' && (
                    <p className="flex items-center text-green-500 text-sm mt-3">

                        Votre compte a bien été vérifié !
                    </p>
                )}
                {verificationStatus === 'error' && (
                    <p className="flex items-center text-red-500 text-sm mt-3">
                        Vérification échouée. Veuillez réessayer.
                    </p>
                )}
            </CardContent>

        </Card>
    )
}