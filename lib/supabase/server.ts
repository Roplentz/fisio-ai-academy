import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
export function createClient() {
 const store = cookies();
 const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
 const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
 if (!url || !key) throw new Error("Configure as variáveis públicas do Supabase");
 return createServerClient(url,key,{cookies:{getAll(){return store.getAll()},setAll(items){try{items.forEach(({name,value,options})=>store.set(name,value,options))}catch{ /* Server Components cannot write cookies */ }}}});
}
