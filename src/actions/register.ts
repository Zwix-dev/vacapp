'use server';
import * as z from 'zod';
import { getUserByEmail } from "@/data/user";
import bcrypt from 'bcryptjs';
import { db } from "@/lib/db";

const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(1),
});

export async function register(formData: FormData) {
    try {

        const email = formData.get("email") as string;
        const passwordData = formData.get("password") as string;
        const passwordData2 = formData.get("confirm-password") as string;
        const name = formData.get("full-name") as string;

        try {
            registerSchema.parse({ email, password: passwordData, name });
        } catch (err) {
            if (err instanceof z.ZodError) {
                const errors = err.errors.map(e => `${e.path.join(".")}: ${e.message}`).join(", ");
                return { error: `Erreur de validation: ${errors}` };
            }
            throw err;
        }
        const hashedPassword = await bcrypt.hash(passwordData, 10);
        const existingUser = await getUserByEmail(email);
        if (passwordData != passwordData2) {
            return { error: "Les mots de passe ne correspondent pas." };
        }
        if (existingUser) {
            return { error: "Un compte existe déjà avec cet e-mail." };
        }

        await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        return { success: "Compte créer avec succès" };
    } catch (err) {
        throw err;
    }
}