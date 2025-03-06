"use server"
import { getUserByEmail } from "@/data/user"
export async function checkSubscribe(email:string) {

    try {
        const subscribeDatas = await getUserByEmail(email);
        return subscribeDatas?.codeEtablissement
    } catch (err) {
        throw err
    }

}