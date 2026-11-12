# Plano Mestre de Desenvolvimento — Fisio AI Academy
Versão: 1.0 | 12/11/2026 | Status: planejamento operacional

## Visão
Plataforma LMS de IA para fisioterapeutas, com formação aplicada à assistência, pesquisa, ensino, gestão e inovação. Público inicial: fisioterapeutas, docentes e estudantes. Proposta: aprender, praticar, construir e comprovar competências em IA.

## Princípios
- MVP com custo inicial R$ 0 dentro das cotas gratuitas, sem contratação automática de serviços pagos.
- Privacidade e LGPD: não usar dados clínicos identificáveis em exercícios; minimizar dados de alunos.
- Segurança por padrão: Supabase Auth + RLS, papéis administrados no servidor, nenhuma chave secreta no cliente.
- Conteúdo científico revisado por docente; IA não substitui julgamento clínico.
- Mobile-first, acessibilidade, arquitetura incremental e repositório versionado.

## Escopo do MVP (v1)
1. Landing institucional, catálogo de trilhas e páginas públicas.
2. Login/logout, recuperação de senha, cadastro controlado e perfis aluno, professor e admin.
3. Painel do aluno: cursos, módulos, aulas, materiais, quizzes, progresso e tarefas.
4. Painel do professor: publicar conteúdo, gerenciar turmas, avaliar atividades e acompanhar progresso.
5. Trilha piloto IA do Zero à Prática (12 semanas, 48h) com exercícios e quatro protótipos.
6. Certificado básico apenas após critérios verificáveis; painel de emissão pode ser etapa posterior do MVP.
7. Telemetria pedagógica mínima, sem rastreamento invasivo.

## Trilhas planejadas
- IA do Zero à Prática para Fisioterapeutas — 12 semanas / 48h (piloto).
- Pesquisa Científica com IA — 8 semanas (planejada).
- Tecnologias em Fisioterapia — 8 semanas (planejada).
- Gestão e Inovação em Saúde — 6 semanas (planejada).
- Agent Builder para Fisioterapeutas — trilha futura.

## Estado confirmado em 12/11/2026
- GitHub Roplentz/fisio-ai-academy com landing, páginas demonstrativas e código inicial Supabase.
- Supabase FISIOIA Academy (wrwqbeqjqcnkofcybohi) ACTIVE_HEALTHY.
- public.a5_leads (0 linhas), RLS habilitado e inserção anônima permitida; preservar.
- auth.users (0 usuários); nenhuma tabela LMS no public.
- Nenhum teste de compilação, login real, isolamento entre usuários ou publicação concluído.

## Roadmap e aceite

### Fase 0 — Base técnica e segurança (P0)
- [x] Repositório GitHub
- [x] Supabase reativado e auditoria inicial
- [x] Esqueleto Next.js e telas demonstrativas
- [ ] Verificar versões e dependências, gerar lockfile, CI com build e typecheck
- [ ] Aplicar migração LMS preservando a5_leads
- [ ] RLS por proprietário/turma; testar isolamento e escalonamento de privilégios
- [ ] Login, logout, reset, cookies SSR e redirecionamento por papel
**Aceite:** build passa, credenciais não vazam, aluno não acessa painel docente, dados de um aluno não são acessíveis por outro.

### Fase 1 — LMS funcional (P0)
- [ ] CRUD de trilhas, módulos, aulas e materiais por professor autorizado
- [ ] Matrícula e progresso individual
- [ ] Quiz, entrega de atividades e notas
- [ ] Interface responsiva e estados vazios/erro/carregamento
**Aceite:** professor publica uma aula e aluno matriculado conclui e registra progresso persistente.

### Fase 2 — Trilha piloto (P1)
- [ ] 12 módulos com objetivos, leituras, práticas e rubricas
- [ ] Quatro projetos: triagem baseada em regras (educacional), estimativa de movimento, busca semântica científica, otimização de escalas
- [ ] Testes com turma piloto, revisão científica e acessibilidade
**Aceite:** jornada completa de 12 semanas navegável e avaliável.

### Fase 3 — Personalização sem API paga (P1)
- [ ] Avaliação diagnóstica
- [ ] Recomendações por regras transparentes e desempenho
- [ ] Painel de acompanhamento docente
**Aceite:** sugestões coerentes com diagnóstico e progresso, explicáveis e corrigíveis.

### Fase 4 — Publicação e expansão (P1/P2)
- [ ] Hospedagem gratuita compatível, domínio temporário e variáveis de ambiente
- [ ] Testes de segurança, performance, LGPD e backup
- [ ] Certificados verificáveis
- [ ] Tutor IA e agentes somente após análise de custo e governança
**Aceite:** piloto acessível por HTTPS e com controles básicos de operação.

## Modelo de dados alvo (sujeito à migração)
profiles (id, role, display_name); learning_paths; modules; lessons; cohorts; teaching_assignments; enrollments; lesson_progress; quizzes; questions; attempts; submissions; grades; certificates.
Nunca confiar em role enviada pelo próprio usuário. Professor só gerencia cursos/turmas atribuídos. Aluno só lê e altera dados próprios conforme política.

## Indicadores de sucesso
- Taxa de ativação: cadastro -> primeira aula
- Conclusão por módulo e trilha
- Entrega e desempenho em exercícios
- Retenção semanal
- Satisfação e qualidade pedagógica
- Custo mensal efetivo e consumo de cotas gratuitas

## Sequência imediata
1. Migração segura e testes RLS.
2. Autenticação real e rotas protegidas.
3. Publicação da primeira aula e fluxo de matrícula.
4. CI/build, QA e deploy de testes.

## Riscos
- Banco pausado novamente no plano gratuito; prever exportações/backup.
- Inserção anônima em a5_leads; avaliar anti-spam e consentimento.
- Dependências sem lockfile e ausência de testes.
- Aulas com conteúdo clínico exigem revisão humana e referências.
- Planos gratuitos possuem limites e podem mudar.
