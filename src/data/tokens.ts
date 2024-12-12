import { db } from "@/lib/db";

export const getVerificationTokenByEmail = async (email: string) => {
    try {
        const verificationToken = await db.verificationToken.findFirst({ where: { identifier: email } });
        return verificationToken;
    } catch {
        return null
    }
}
export const getVerificationTokenByToken = async (token: string) => {
    try {
        const verificationToken = await db.verificationToken.findFirst({
            where: {
                token: token,
            },
        });
        return verificationToken;
    } catch (error) {
        console.error("Error fetching verification token:", error);
        return null;
    }
};

export const getPasswordTokenByEmail = async (email: string) => {
    try {
        const verificationToken = await db.passwordResetToken.findFirst({ where: { email: email } });
        return verificationToken;
    } catch {
        return null
    }
}
export const getPasswordResetTokenByToken = async (token: string) => {
    try {
        const verificationToken = await db.passwordResetToken.findFirst({
            where: {
                token: token,
            },
        });
        return verificationToken;
    } catch (error) {
        console.error("Error fetching verification token:", error);
        return null;
    }
};