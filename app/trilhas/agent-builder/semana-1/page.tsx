import Link from "next/link";
import { agentBuilder } from "@/lib/agent-builder";

export const metadata = { title: "Semana 1 | Agent Builder" };
export default function SemanaUm() {
 const lesson = agentBuilder.firstLesson;
 return <main className="min-h-screen bg-slate-50 text-slate-900">
  <header className="bg-slate-950 px-6 py-5 text-white"><div className="mx-auto flex max-w-5xl items-center justify-between"><strong>✦ Fisio AI Academy</strong><Link href="/trilhas/agent-builder" className="text-sm text-teal-300">Voltar à trilha</Link></div></header>
  <article className="mx-auto max-w-4xl px-6 py-12">
   <p className="font-semibold uppercase tracking-wider text-teal-700">Laboratório 01 · {lesson.durationMinutes} minutos</p>
   <h1 className="mt-3 text-4xl font-bold">{lesson.title}</h1>
   <p className="mt-4 text-lg text-slate-600">Construa uma automação científica reproduzível, antes de adicionar um modelo de linguagem e múltiplos agentes.</p>
   <section className="mt-10 rounded-2xl border bg-white p-6"><h2 className="text-2xl font-bold">Objetivos de aprendizagem</h2><ul className="mt-4 list-disc space-y-2 pl-6">{lesson.objectives.map(item=><li key={item}>{item}</li>)}</ul></section>
   <section className="mt-8 rounded-2xl border bg-white p-6"><h2 className="text-2xl font-bold">1. Entenda o fluxo</h2><p className="mt-3">Pergunta científica → consulta PubMed → recuperação de metadados → verificação de PMIDs → CSV.</p><p className="mt-3 text-sm text-slate-600">Nesta primeira versão, o processo é uma automação determinística, não um agente autônomo com LLM.</p></section>
   <section className="mt-8 rounded-2xl border bg-white p-6"><h2 className="text-2xl font-bold">2. Prepare sua busca</h2><p className="mt-3">Pergunta: quais são as evidências sobre TENS e pressão arterial em humanos?</p><pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl bg-slate-950 p-4 text-sm text-white">{lesson.query}</pre><p className="mt-3 text-sm text-slate-600">Busca exploratória: requer refinamento e validação antes de uma revisão sistemática.</p></section>
   <section className="mt-8 rounded-2xl border bg-white p-6"><h2 className="text-2xl font-bold">3. Execute o laboratório</h2><ol className="mt-4 list-decimal space-y-3 pl-6"><li>Abra o <a className="text-teal-700 underline" href={lesson.colabUrl} target="_blank" rel="noopener noreferrer">Google Colab</a> e crie um notebook.</li><li>Copie o código Python disponibilizado abaixo.</li><li>Execute a célula e aguarde a resposta da API PubMed.</li><li>Baixe o arquivo CSV gerado.</li><li>Confira três PMIDs diretamente no <a className="text-teal-700 underline" href={lesson.pubmedUrl} target="_blank" rel="noopener noreferrer">PubMed</a>.</li></ol><a className="mt-6 inline-block rounded-xl bg-teal-700 px-5 py-3 font-semibold text-white" href="/labs/fisioresearch_agent_01.py" download>Baixar código Python</a></section>
   <section className="mt-8 rounded-2xl border bg-white p-6"><h2 className="text-2xl font-bold">4. Atividade avaliativa</h2><p className="mt-3">{lesson.assignment}</p><p className="mt-3 text-sm text-slate-600">Critérios: execução (40%), rastreabilidade (30%) e reflexão crítica (30%). A entrega online será habilitada após a integração segura com o banco.</p></section>
   <section className="mt-8 rounded-2xl border bg-white p-6"><h2 className="text-2xl font-bold">5. Autoavaliação</h2><details className="mt-4"><summary className="cursor-pointer font-semibold">O programa é um agente de IA autônomo?</summary><p className="mt-2">Não. É uma automação com objetivo e ferramentas definidos. Ainda não há planejamento por LLM nem decisões autônomas.</p></details><details className="mt-4"><summary className="cursor-pointer font-semibold">Os resultados provam a eficácia clínica da TENS?</summary><p className="mt-2">Não. Os metadados servem para descoberta; conclusões exigem leitura crítica e avaliação da evidência.</p></details></section>
  </article>
 </main>;
}
