# Auditoria inicial — FISIOIA Academy
Data: 2026-11-09
Projeto: wrwqbeqjqcnkofcybohi (sa-east-1)
Estado reportado: INACTIVE.
Consultas a tabelas e pg_policies falharam: banco inacessível.
Security Advisor retornou zero alertas, **não conclusivo**.
Nenhuma alteração foi feita no banco.
## Antes de ativar o acesso de alunos
1. Reativar projeto no painel Supabase e confirmar que o plano continua gratuito.
2. Inventariar tabelas, chaves, usuários (apenas contagens) e policies.
3. Verificar privilégios de perfis, RLS e gatilhos existentes.
4. Adaptar o modelo de dados sem sobrescrever objetos existentes.
5. Testar acesso entre alunos distintos e tentativa de elevação de privilégio.
6. Configurar URL e chave publicável somente no ambiente de hospedagem.
7. Nunca publicar chave secreta/service_role.
