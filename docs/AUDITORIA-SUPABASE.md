# Auditoria Supabase — FISIOIA Academy
Atualização: 2026-11-12
Projeto: wrwqbeqjqcnkofcybohi (sa-east-1)
Estado: ACTIVE_HEALTHY.

## Inventário confirmado
- public.a5_leads: 0 linhas, RLS habilitado.
- Colunas: id, created_at, nome, whatsapp, a1_atender_melhor, a2_aprender_mais_rapido, a3_gerar_valor, a4_construir_autoridade, a5_avancar_carreira, eixo_prioritario, origem.
- Política: 'Permitir insercao publica de leads' — INSERT para anon, WITH CHECK true. A política permite envio anônimo; avaliar proteção contra spam e coleta de dados pessoais antes do uso público.
- auth.users: 0 usuários.
- Nenhuma tabela profiles, learning_paths, enrollments ou progresso encontrada no schema public.
- Security Advisor: 0 avisos retornados. Isso não substitui testes de RLS e autenticação.

## Decisão
Preservar a tabela a5_leads. Criar modelo LMS em migração separada, com RLS restritivo e papéis atribuídos apenas por administrador. Não há dados de alunos a migrar no auth.users.

## Pendente
1. Definir e aplicar migração LMS com testes de isolamento.
2. Configurar chaves publicáveis no ambiente (nunca service_role).
3. Testar login e autorização aluno/professor.
4. Executar build e testes automatizados.
5. Publicar apenas após validação.
