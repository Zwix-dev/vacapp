import { Resend } from 'resend';
import * as React from 'react';
import { EmailTemplate } from '@/components/email-template';

export const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

    await resend.emails.send({
        from:"noreply@arthur-duval.dev", 
        to: email,
        subject: "E-mail verification email",
        react: EmailTemplate({ firstName: confirmLink}),

    })
}
