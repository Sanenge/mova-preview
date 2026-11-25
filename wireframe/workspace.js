/* R21 — Domain-specific presentation. No external services or new ERP logic. */
const WorkspaceR21=Object.freeze({
 'settings-approvals':['rules','task','Regras'],
 'settings-workflows':['flow','chart','Fluxos'],
 'settings-automations':['automations','settings','Automações'],
 'document-center':['files','file','Arquivos'],
 'contracts':['contracts','file','Contratos']
});
function workspaceSpecR21(r){return WorkspaceR21[r]||VisualR09.viewSpec[r]}
function workspaceActionsR21(x){
 return '<div class="workspace-actions">'+btn('Ver','eye','view:'+x.id)+btn('Editar','edit','edit:'+x.id)+(domainAction(route,x)?btn('Decisão','check','transition:'+x.id,'tonal'):iconbtn('Mais ações','more','record-more:'+x.id))+'</div>'
}
function workspaceDetailR21(label,value){return '<div class="workspace-detail"><span>'+esc(label)+'</span><strong>'+esc(value||'Não definido')+'</strong></div>'}
function workspaceOverviewR21(r,items){
 if(r==='budgets'){
 const sum=items.reduce((n,x)=>n+x.amount,0),approved=items.filter(x=>x.status==='Aprovado').reduce((n,x)=>n+x.amount,0),groups=new Map();items.forEach(x=>groups.set(x.center,(groups.get(x.center)||0)+x.amount));
 return '<section class="budget-overview-r21"><div class="budget-overview-main"><span class="muted">Orçamento consolidado</span><strong class="metric">'+money(sum)+'</strong><span class="muted">'+items.length+' orçamentos · '+groups.size+' centros de custo</span></div><div class="budget-overview-detail"><div class="budget-progress-label"><span>Valor aprovado</span><strong>'+money(approved)+'</strong></div><div class="budget-progress" role="progressbar" aria-label="Valor aprovado" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+Math.round(sum?approved/sum*100:0)+'"><span style="width:'+(sum?approved/sum*100:0)+'%"></span></div><div class="budget-centers">'+[...groups].map(([label,value])=>'<div><span>'+esc(label)+'</span><strong>'+money(value)+'</strong></div>').join('')+'</div></div></section>'
 }
 const labels={'settings-approvals':'Regras de aprovação','settings-workflows':'Fluxos cadastrados','settings-automations':'Automações cadastradas','document-center':'Documentos','contracts':'Contratos'};
 const counts=[...new Set(items.map(x=>x.status))].map(status=>[status,items.filter(x=>x.status===status).length]);
 return '<section class="workspace-overview-r21"><div class="workspace-count"><span class="metric-icon">'+ic(WorkspaceR21[r][1])+'</span><div><span class="muted">'+labels[r]+'</span><strong class="metric">'+items.length+'</strong></div></div><div class="workspace-statuses">'+counts.map(([label,n])=>'<div><span>'+badge(label)+'</span><strong>'+n+'</strong></div>').join('')+'</div></section>'
}
function workspaceCardsR21(items){
 if(!items.length)return emptyStateR20('Nenhum registro encontrado','Altere os filtros para consultar os registros.',btn('Limpar filtros','filter','clear'));
 return '<div class="workspace-grid-r21 '+WorkspaceR21[route][0]+'">'+items.map(x=>{
 let detail='';
 if(route==='settings-approvals'){
 detail='<div class="rule-band"><span class="muted">Faixa de valor</span><strong>'+money(Number(x.minAmount||0))+' <span>até</span> '+money(x.amount)+'</strong><div class="rule-track"><span></span></div></div><div class="workspace-details">'+workspaceDetailR21('Abrangência',x.description)+workspaceDetailR21('Aprovador',x.approver)+workspaceDetailR21('Etapa',x.step)+'</div>';
 }else if(route==='settings-workflows'){
 const steps=x.description.split(',').map(v=>v.trim()).filter(Boolean);
 detail='<div class="workflow-map" aria-label="Etapas descritas no fluxo">'+steps.map((step,i)=>'<div class="workflow-step"><span class="workflow-node">'+(i+1)+'</span><strong>'+esc(step)+'</strong></div>').join('')+'</div><div class="workspace-details">'+workspaceDetailR21('Evento inicial',x.trigger)+workspaceDetailR21('Responsável',x.owner)+workspaceDetailR21('Etapa seguinte',x.nextStep)+'</div>';
 }else if(route==='settings-automations'){
 detail='<div class="automation-flow"><div><span class="metric-icon">'+ic('calendar')+'</span>'+workspaceDetailR21('Gatilho',x.description)+'</div><span class="automation-arrow">'+ic('arrow')+'</span><div><span class="metric-icon">'+ic('settings')+'</span>'+workspaceDetailR21('Ação',x.effect)+'</div></div>'+workspaceDetailR21('Condição',x.condition);
 }else if(route==='document-center'){
 detail='<div class="document-preview-r21" aria-label="Representação gráfica do documento, não é uma prévia do arquivo"><svg viewBox="0 0 116 100" aria-hidden="true"><rect x="28" y="8" width="60" height="84" rx="6" fill="var(--surface)"/><path d="M41 24h34M41 36h34M41 48h26M41 60h34M41 72h20" stroke="var(--muted)" stroke-width="2" stroke-linecap="round" opacity=".38"/><path d="M41 24h16" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/></svg></div><div class="workspace-details">'+workspaceDetailR21('Tipo / referência',x.description)+workspaceDetailR21('Responsável',x.center)+workspaceDetailR21('Versão',x.version)+workspaceDetailR21('Validade',x.expiresAt?date(x.expiresAt):'Não informada')+'</div>';
 }else if(route==='contracts'){
 detail='<div class="contract-value-r21"><span class="muted">Valor contratual</span><strong class="metric">'+money(x.amount)+'</strong></div><p class="muted">'+esc(x.description)+'</p><div class="contract-dates-r21">'+workspaceDetailR21('Início',x.startAt?date(x.startAt):'Não informado')+workspaceDetailR21('Término',x.endAt?date(x.endAt):'Não informado')+'</div><div class="workspace-details">'+workspaceDetailR21('Gestor',x.manager)+workspaceDetailR21('Centro de custo',x.center)+'</div>';
 }
 return '<article class="workspace-card-r21"><div class="workspace-card-head"><span class="metric-icon">'+ic(WorkspaceR21[route][1])+'</span><div><span class="muted">'+esc(x.id)+' · '+esc(x.center)+'</span><h3>'+esc(x.party)+'</h3></div>'+badge(x.status)+'</div>'+detail+workspaceActionsR21(x)+'</article>'
 }).join('')+'</div>'
}
function stageTotalsR21(items){const stages=new Map();for(const x of items){const key=x.stage||'Sem etapa';stages.set(key,(stages.get(key)||0)+x.qty*x.unit)}const total=[...stages.values()].reduce((a,b)=>a+b,0);return stages.size?'<div class="stage-total-list">'+[...stages].map(([name,value])=>'<div><span>'+esc(name)+'</span><strong>'+money(value)+'</strong><div class="stage-share"><span style="width:'+(total?value/total*100:0)+'%"></span></div></div>').join('')+'</div>':'<p class="muted">Adicione itens para compor o orçamento por etapa.</p>'}
