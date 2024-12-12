"use server";
import * as z from 'zod';
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { getPasswordResetTokenByToken } from "@/data/tokens";
import bcrypt from 'bcryptjs';
// const schema = z
//   .object({
//     password: z.string().min(8),
//   })
//   .superRefine(({ password }, checkPassComplexity) => {
//     const containsUppercase = (ch: string) => /[A-Z]/.test(ch);
//     const containsLowercase = (ch: string) => /[a-z]/.test(ch);
//     const containsSpecialChar = (ch: string) =>
//       /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch);
//     let countOfUpperCase = 0,
//       countOfLowerCase = 0,
//       countOfNumbers = 0,
//       countOfSpecialChar = 0;
//     for (let i = 0; i < password.length; i++) {
//       let ch = password.charAt(i);
//       if (!isNaN(+ch)) countOfNumbers++;
//       else if (containsUppercase(ch)) countOfUpperCase++;
//       else if (containsLowercase(ch)) countOfLowerCase++;
//       else if (containsSpecialChar(ch)) countOfSpecialChar++;
//     }
//     if (
//       countOfLowerCase < 1 ||
//       countOfUpperCase < 1 ||
//       countOfSpecialChar < 1 ||
//       countOfNumbers < 1
//     ) {
//       checkPassComplexity.addIssue({
//         code: "custom",
//         message: "Le mot de passe n'est pas assez complexe?",
//       });
//     }
//   });



export async function newPaswword(token: string, formData: FormData) {

    const existingToken = await getPasswordResetTokenByToken(token);
    const passwordData = formData.get("password") as string;
    const passwordData2 = formData.get("confirm-password") as string;
    if (!existingToken) {
        return { error: 'Le token de vérification n\'existe pas.' };
    }
    const hasExpired = new Date(existingToken.expires) < new Date();
    if (hasExpired) {
        return { error: 'Le token de vérification a expiré.' };
    }

    const existingUser = await getUserByEmail(existingToken.email);
    if (!existingUser) {
        return { error: 'Aucun compte enregistré avec cet email.' };
    }

    if (passwordData != passwordData2) { return { error: 'Les mots de passe ne correspondent pas' } };
    const hashedPassword = await bcrypt.hash(passwordData, 10);
    await db.user.update({
        where: { id: existingUser.id },
        data: {
            password: hashedPassword
        }
    });

    await db.passwordResetToken.delete({
        where: { token: existingToken.token }
    });

    return { success: 'Mot de passe modifié avec succès.' };
}