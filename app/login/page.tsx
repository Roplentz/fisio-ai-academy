import Link from "next/link";
import LoginForm from "@/components/login-form";
export default function Login(){return <main className="min-h-screen flex items-center justify-center p-6"><section className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl"><Link href="/" className="text-teal">← Início</Link><h1 className="mt-8 text-3xl font-bold">Entre na Academy</h1><p className="mt-3 text-slate-500">Acesso para alunos e professores cadastrados.</p><LoginForm/></section></main>}
