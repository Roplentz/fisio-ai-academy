import Link from "next/link";
export default function Denied(){return <main className="min-h-screen flex flex-col items-center justify-center gap-5 p-8"><h1 className="text-3xl font-bold">Acesso não autorizado</h1><p>Seu perfil não tem permissão para acessar esta área.</p><Link href="/login" className="text-teal underline">Voltar ao login</Link></main>}
