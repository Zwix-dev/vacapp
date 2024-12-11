import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { error } from "console";
import { signIn } from "next-auth/react";

export async function doCredentialLogin(formData: FormData) {

  try {
    const response = await signIn("credentials", {
      redirectTo: DEFAULT_LOGIN_REDIRECT,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect:false
    });
    if (!response) {
      throw new Error('User not found.');
    }
    return response;
  } catch (err) {
   
    throw err;
  }
}
