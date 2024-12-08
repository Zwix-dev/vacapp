import { signIn } from "next-auth/react";

export async function doCredentialLogin(formData: FormData) {

  try {
    const response = await signIn("credentials", {
      redirectTo: "/",
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
    if (!response) {
      throw new Error('User not found.');
    }

    return response;
  } catch (err) {
    throw err;
  }
}
