"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/browser";
export default function LoginForm(){
 const [email,setEmail]=useState("");const [password,setPassword]=useState("");
 const [message,setMessage]=useState("");const [busy,setBusy]=useState(false);
 async function submit(e:React.FormEvent){e.preventDefault();setBusy(true);setMessage("");
 try{const {error}=await createClient().auth.signInWithPassword({email,password});if(error)throw error;window.location.assign("/aluno");}
 catch(e){setMessage(e instanceof Error?e.message:"Falha ao entrar");}finally{setBusy(false)}}
 return <form onSubmit={submit} className="mt-8 space-y-4"><label className="block text-sm font-medium">E-mail<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-2 w-full rounded-xl border p-3"/></label><label className="block text-sm font-medium">Senha<input required type="password" value={password} onChange={e=>setPassword(e.target.value)} className="mt-2 w-full rounded-xl border p-3"/></label>{message&&<p role="alert" className="text-sm text-red-700">{message}</p>}<button disabled={busy} className="w-full rounded-xl bg-navy p-4 text-white disabled:opacity-50">{busy?"Entrando...":"Entrar"}</button></form>
}
