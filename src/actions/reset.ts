"use server";

import { getUserByEmail } from "@/data/user";
import { sendResetPassLink } from "@/lib/resend";
import { generatePasswordResetToken } from "@/lib/tokens";

export async function reset(email:string) {
    const successMessage = "If the email address is correct, an email has been sent!"

    const existingUser = await getUserByEmail(email);
    if (!existingUser || !existingUser.email || !existingUser.password) {
        return { success: successMessage }
    }
    const passwordResetToken = await generatePasswordResetToken(email);
    await sendResetPassLink(email, passwordResetToken.token);
    
    return { success: 'Email sent!' };
}