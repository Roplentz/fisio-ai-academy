import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
export async function GET(request:NextRequest){
 const code=new URL(request.url).searchParams.get("code");
 if(!code)return NextResponse.redirect(new URL("/login?error=missing_code",request.url));
 const {error}=await createClient().auth.exchangeCodeForSession(code);
 return NextResponse.redirect(new URL(error?"/login?error=callback":"/aluno",request.url));
}
