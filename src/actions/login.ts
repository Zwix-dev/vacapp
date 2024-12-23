
import { error } from "console";
import { signIn } from "next-auth/react";
import { checkLogin } from "./checkLogin";

export async function doCredentialLogin(formData: FormData) {

  try {
    const session = await checkLogin();
    if (session) {
      return { error: 'Vous êtes déjà connecté.' };
    }
    const response = await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      // callbackUrl:"/dashboard"
      redirect:false,
    });
    if (!response) {
      throw new Error('User not found.');
    }
    return response;
  } catch (err) {
    throw err;
  }
}
