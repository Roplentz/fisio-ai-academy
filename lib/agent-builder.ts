export const agentBuilder = {
  slug: "agent-builder",
  title: "Agent Builder — Agentes de IA para Fisioterapia",
  description: "Da automação científica aos sistemas multiagentes, com práticas auditáveis.",
  weeks: [
    "Fundamentos dos agentes",
    "Primeiro agente funcional",
    "Ferramentas e APIs científicas",
    "Memória, documentos e RAG",
    "Arquitetura multiagente",
    "Orquestração e supervisão",
    "Segurança, avaliação e custos",
    "Projeto final aplicado"
  ],
  firstLesson: {
    title: "Semana 1 — FisioResearch Agent 1.0",
    durationMinutes: 40,
    objectives: [
      "Distinguir chatbot, automação e agente com modelo de linguagem.",
      "Identificar objetivo, ferramentas, estado e supervisão em um fluxo.",
      "Executar uma busca reproduzível no PubMed e exportar um CSV.",
      "Conferir PMIDs e reconhecer limitações da busca exploratória."
    ],
    query: '("transcutaneous electrical nerve stimulation" OR TENS) AND ("blood pressure" OR hypertension)',
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/",
    colabUrl: "https://colab.research.google.com/",
    assignment: "Entregue um CSV com até 20 resultados, três PMIDs conferidos e um parágrafo sobre as limitações da busca."
  }
} as const;
