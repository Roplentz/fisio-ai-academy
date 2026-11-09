# Modelo de dados proposto — NÃO aplicado
- profiles: id (FK auth.users), role (student/teacher), display_name
- learning_paths: id, title, description, published
- modules: id, path_id, position, title
- lessons: id, module_id, position, content
- enrollments: user_id, path_id, enrolled_at
- lesson_progress: user_id, lesson_id, completed_at
- submissions: id, user_id, lesson_id, content, grade
Regras: aluno lê apenas suas matrículas, progresso e submissões; professor acessa apenas turmas atribuídas; elevação de papéis é exclusiva do administrador. Implementar políticas RLS após auditoria.
