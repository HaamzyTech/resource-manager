"use server"
import { TProfileFormSchema } from "@/lib/schema/form-schema";
import { createClient } from "@/lib/supabase/server";
import { User } from "@supabase/supabase-js";


export async function getUser():Promise<User|null>{
    const supabase = createClient()
  
  const {
      data: {user},
      error
  } = await supabase.auth.getUser();

  if (error){
    console.log(error)
    return null
  }

  return user
}

/**
 * Get Logged in User Profile
 * 
 * @returns  
 */
export async function getMyProfile():Promise<TProfileFormSchema|null>{
    const supabase = createClient();

    const {
        data: {user}
    } = await supabase.auth.getUser();

    if (user){
        const {data,error} = await supabase.from('profile')
            .select()
            .eq("user_id",user!.id)
            .single<TProfileFormSchema>()

        if ( error ){
            console.log("Error", error)
            return null;
        } 
        
        return data;
    }

    return null
}