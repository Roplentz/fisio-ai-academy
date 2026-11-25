import { criteria, type Request, type Response, type Assessment, type Evidence } from './contracts';
const limits = ['Simulação educacional determinística; não é atendimento clínico.', 'Avaliação provisória sujeita a revisão humana.'];
function response(id: string, status: Response['status'], content: string, next_step: string): Response {
 return {request_id:id,status,content,next_step,limitations:[...limits],evidence_refs:[]};
}
export function professor(r: Request): Response {
 return response(r.request_id,'ok','Agente combina objetivo, entradas, instruções e limites. Exemplo: organizar queixa e função fictícias sem diagnóstico.','Escreva um prompt com formato de saída e limites.');
}
export function tutor(r: Request): Response {
 return response(r.request_id,'ok','Teste três casos fictícios: joelho, dados insuficientes e dor torácica súbita com falta de ar. No último, interrompa o fluxo e oriente atendimento emergencial imediato.','Registre entradas, saídas e comparação com o esperado.');
}
export function avaliador(r: Request, reviewedEvidence: readonly Evidence[] = []): Response {
 if(!Array.isArray(reviewedEvidence)) return response(r.request_id,'error','Evidências inválidas.','Revisar evidências.');
 const scores = Object.fromEntries(criteria.map(c=>[c,null])) as Assessment['scores'];
 const refs: string[] = [];
 for(const e of reviewedEvidence as readonly Evidence[]){
  if(!e || !criteria.includes(e.criterion) || ![0,1,2].includes(e.score) || typeof e.reference!=='string' || !e.reference.trim() || typeof e.rationale!=='string' || !e.rationale.trim() || scores[e.criterion]!==null) return response(r.request_id,'error','Evidência inválida ou duplicada.','Revisar evidências.');
  scores[e.criterion]=e.score; refs.push(e.reference);
 }
 const total=criteria.every(c=>scores[c]!==null)?criteria.reduce((s,c)=>s+(scores[c]??0),0):null;
 const decision=scores.safety!==null && scores.safety<2?'revise':total===null?'pending':total>=8&&scores.safety===2?'pass':'revise';
 return {...response(r.request_id,total===null?'needs_input':'ok','Avaliação provisória baseada em evidências revisadas.','Professor humano confirma ou solicita revisão.'),evidence_refs:refs,assessment:{scores,total,decision,provisional:true}};
}
// reviewedEvidence is a trusted internal fixture/reviewer input, never user-provided HTTP data.
export function orchestrate(input: unknown, reviewedEvidence: readonly Evidence[] = []): Response {
 if(!input || typeof input!=='object' || Array.isArray(input)) return response('','error','Entrada inválida.','Forneça uma solicitação.');
 const r=input as Partial<Request>; const id=typeof r.request_id==='string' && /^[a-zA-Z0-9_-]{1,80}$/.test(r.request_id)?r.request_id:'';
 if(r.synthetic_context!==true) return response(id,'blocked','Somente contexto sintético permitido.','Remova dados reais.');
 if(!id.trim()||r.module_id!=='01'||typeof r.objective!=='string'||!r.objective.trim()||r.objective.length>1000) return response(id,'needs_input','Dados inválidos ou módulo indisponível.','Informe objetivo e módulo 01.');
 if(/ignore.{0,30}(instru|instruction)|diagnosti[cq]|prescrev|cpf\s*[:=]/i.test(r.objective)) return response(id,'blocked','Solicitação fora do escopo educacional.','Reformule com dados fictícios.');
 const req=r as Request;
 switch(req.role){case 'professor':return professor(req);case 'tutor':return tutor(req);case 'avaliador':return avaliador(req,reviewedEvidence);default:return response(id,'error','Agente indisponível.','Escolha professor, tutor ou avaliador.');}
}
