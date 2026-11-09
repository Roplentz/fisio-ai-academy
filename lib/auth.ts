import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
export async function requireRole(role:"student"|"teacher"){
 const supabase=createClient();
 const {data:{user},error}=await supabase.auth.getUser();
 if(error||!user) redirect("/login");
 const {data:profile, error:profileError}=await supabase.from("profiles").select("role").eq("id",user.id).single();
 if(profileError||!profile||profile.role!==role) redirect("/acesso-negado");
 return user;
}
