export type Role = 'professor' | 'tutor' | 'avaliador';
export type Criterion = 'objective' | 'structure' | 'tests' | 'safety' | 'reproducibility';
export const criteria: Criterion[] = ['objective','structure','tests','safety','reproducibility'];
export type Evidence = { criterion: Criterion; score: 0|1|2; reference: string; rationale: string };
export type Request = { request_id: string; module_id: string; role: Role; objective: string; synthetic_context: true; evidence?: Evidence[] };
export type Assessment = { scores: Record<Criterion, number|null>; total: number|null; decision: 'pending'|'pass'|'revise'; provisional: true };
export type Response = { request_id: string; status: 'ok'|'needs_input'|'blocked'|'error'; content: string; limitations: string[]; next_step: string; evidence_refs: string[]; assessment?: Assessment };
