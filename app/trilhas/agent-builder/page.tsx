import Link from "next/link";
import { agentBuilder } from "@/lib/agent-builder";

export const metadata = { title: "Agent Builder | Fisio AI Academy" };
export default function AgentBuilderPage() {
  return <main className="min-h-screen bg-slate-50 text-slate-900">
    <header className="bg-slate-950 px-6 py-5 text-white"><div className="mx-auto flex max-w-5xl items-center justify-between"><strong>✦ Fisio AI Academy</strong><Link href="/" className="text-sm text-teal-300">Início</Link></div></header>
    <section className="mx-auto max-w-5xl px-6 py-12">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">Trilha prática · 8 semanas</p>
      <h1 className="mt-3 text-4xl font-bold">{agentBuilder.title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">{agentBuilder.description}</p>
      <Link href="/trilhas/agent-builder/semana-1" className="mt-7 inline-block rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white">Começar a Semana 1</Link>
      <h2 className="mt-12 text-2xl font-bold">Sua jornada</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{agentBuilder.weeks.map((week, index) => <div key={week} className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-sm font-semibold text-teal-700">Semana {index + 1}</p><h3 className="mt-2 text-lg font-semibold">{week}</h3><p className="mt-2 text-sm text-slate-500">{index === 0 ? "Aula e laboratório disponíveis" : "Conteúdo em preparação"}</p>{index === 0 && <Link className="mt-3 inline-block font-semibold text-teal-700 underline" href="/trilhas/agent-builder/semana-1">Abrir laboratório</Link>}</div>)}</div>
      <p className="mt-8 text-sm text-slate-500">Versão piloto: o progresso ainda não é salvo. A integração com o Supabase depende da auditoria de segurança.</p>
    </section>
  </main>;
}
