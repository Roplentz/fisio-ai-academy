# Agent Builder — Sprint 01
Público: fisioterapeutas, docentes e estudantes. Pré-requisito: informática básica. Formação híbrida de 12 semanas, 60–90 min por semana, encontros quinzenais propostos. Piloto de 10–15 alunos, preço hipotético R$497–697, validar disposição a pagar antes de lançamento.
## Metodologia
Explicar, demonstrar, construir, testar, refletir. Cada módulo entrega um agente ou componente com evidência de teste. Rubrica: objetivo, saída, testes, segurança, reprodutibilidade (0–2 cada). Aprovação >=8/10 e segurança=2. Certificado de conclusão condicionado à revisão humana; sem promessa de habilitação profissional.
## Trilha
1. Fundamentos e triagem simulada
2. JSON e avaliação funcional
3. Ferramentas e indicadores
4. PubMed e PICO
5. RAG e protocolos
6. Memória e seguimento simulado
7. APIs e relatórios
8. Tutor educacional
9. Orquestração científica
10. Segurança e testes
11. Interface e implantação
12. MVP integrador
## Piloto
Medir ativação (primeira entrega/inscritos), conclusão (aprovados/inscritos), satisfação, custo por aluno e incidentes. Metas propostas: 80% ativação, 70% conclusão, zero incidentes graves. Entrevistar desistentes. Não coletar dados clínicos identificáveis.
## Arquitetura proposta
Reutilizar Next.js e Supabase após auditoria. Entidades: cursos, módulos, matrículas, entregas, avaliações, evidências, eventos. RLS por aluno e turma; professor autorizado; segredos no servidor; logs minimizados. Orquestrador seleciona tutor, professor, avaliador, cientista ou programador; revisão humana para notas finais. Sem execução clínica autônoma. Sprint 02 implementará contratos e testes; Sprint 03 interface; Sprint 04 avaliações; Sprint 05 biblioteca; Sprint 06 pagamentos; Sprint 07 piloto; Sprint 08 lançamento.

## Compatibilidade verificada e limites
README e package.json da main confirmam Next.js 14.2.33, React 18, TypeScript 5.6, Tailwind 3.4 e SDK Supabase. O README descreve painéis demonstrativos e persistência/autenticação planejadas; dependências não comprovam integração operacional. Agent Builder será uma trilha adicional, preservando IA do Zero à Prática. Não alterar rotas ou schema existentes antes de inventário. Sprint 02: contratos TypeScript independentes de UI e provedor, testes determinísticos e adaptador simulado; integração real somente após validação de autenticação/RLS e orçamento. Nenhum dado real de aluno antes desses controles. Metodologia proposta FisioBUILD: Base, Uso, Implementação, Laboratório, Desenvolvimento (nome não registrado). A trilha pessoal de 20–30 min é laboratório; versão comercial de 60–90 min inclui prática ampliada. Certificação exige todas as 12 entregas aprovadas e revisão humana.
