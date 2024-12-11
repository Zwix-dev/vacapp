import { getVerificationTokenByEmail } from "@/data/tokens";
import { db } from "@/lib/db";
import { v4 as uuidv4 } from "uuid";

export async function generateVerificationToken(email: string) {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 3600 * 1000);

    const existingToken = await getVerificationTokenByEmail(email);
    if (existingToken) {
        await db.verificationToken.delete({
            where: {
                identifier_token: {
                    identifier: email,
                    token: existingToken.token,
                },
            },
        });
    }

    const verificationToken = await db.verificationToken.create({
        data: {
            token,
            identifier:email,
            expires,
        },
    });

    return verificationToken;
}
