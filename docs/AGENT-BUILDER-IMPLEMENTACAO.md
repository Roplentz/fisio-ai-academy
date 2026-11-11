# Agent Builder — implantação segura (piloto)
## Auditoria 2026-11-11
- Repositório: Roplentz/fisio-ai-academy, branch principal main.
- Stack: Next.js 14, React 18, Tailwind, Supabase SSR.
- Telas existentes: home, login, aluno, professor; não foram alteradas.
- Projeto Supabase FISIOIA Academy (wrwqbeqjqcnkofcybohi): INACTIVE.
- Inventário de tabelas falhou: banco indisponível. Security Advisor sem alertas, resultado não conclusivo.
- Nenhuma tabela, usuário, política, migração ou configuração do Supabase foi alterada.
## Entrega
- Catálogo estático de 8 semanas em /trilhas/agent-builder.
- Semana 1 completa em /trilhas/agent-builder/semana-1.
- Código Python educacional em /public/labs/fisioresearch_agent_01.py.
- Sem login obrigatório no conteúdo piloto; nenhuma informação pessoal é coletada.
- Sem gravação de progresso até validação do banco.
## Próximas verificações
1. Reativar o projeto Supabase no painel, após verificar custo e plano.
2. Auditar profiles, RLS, policies, triggers e acesso entre usuários.
3. Adicionar learning_paths/modules/lessons/enrollments/progress por migração aditiva, após comparar com o esquema existente.
4. Testar build Next.js, links, execução real do Python e permissões antes de publicar.
5. Revisar proteção de rotas e política de acesso à trilha antes de lançar turma.
