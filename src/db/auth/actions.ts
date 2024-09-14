"use server"

import { TLoginFormSchema } from "@/lib/schema/form-schema";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

/**
 * SignIN
 * @param user 
 * @returns 
 */
export const signIn = async (user:TLoginFormSchema) => {

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email:user.email,
      password:user.password,
    });

    if (error) {
      return {
        code: error.code ?? 404,
        message: error.message ?? "Could not authenticate user"
      };
    }

    return redirect("/dashboard");
};


/**
 * Signout
 * @returns 
 */
export const signOut = async () => {
   
    const supabase = createClient();
    await supabase.auth.signOut();
    
    return redirect("/");
};