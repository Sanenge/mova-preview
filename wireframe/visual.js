/* R09 — shared presentation patterns. Data is illustrative and local. */
const VisualR09=Object.freeze({
 purchaseStages:[['purchase-requests','Solicitações','cart'],['purchase-quotes','Cotações','task'],['purchase-orders','Ordens de compra','file'],['purchase-invoices','Notas fiscais','check']],
 viewSpec:{'task-center':['board','box','Quadro'],'clients':['grid','box','Cards'],'suppliers':['grid','box','Cards'],'professionals':['grid','box','Cards'],'budgets':['plan','budget','Estrutura'],'warehouse-stock':['stock','box','Materiais']},
 sectionLabels:{'purchase-requests':'Solicitações registradas','purchase-quotes':'Cotações recebidas','purchase-orders':'Ordens registradas','purchase-invoices':'Documentos fiscais','budgets':'Orçamentos por centro de custo','warehouse-stock':'Materiais em estoque'}
});
function visualPurchaseNav(){
 return '<nav class="purchase-flow" aria-label="Etapas de compras">'+VisualR09.purchaseStages.map(([id,label,icon],i)=>{
 const data=records[id]||[],active=id===route,open=data.filter(x=>['Pendente','Aberto','Em revisão'].includes(x.status)).length;
 return '<button class="purchase-step '+(active?'active':'')+'" data-action="go:'+id+'" '+(active?'aria-current="page"':'')+'><span class="flow-icon">'+ic(icon)+'</span><span class="flow-copy"><strong>'+esc(label)+'</strong></span><span class="flow-count">'+(i+1)+'</span></button>'
 }).join('')+'</nav>'
}
function purchaseOverview(data){
 const approved=data.filter(x=>['Aprovado','Confirmado','Conferido'].includes(x.status)),pending=data.filter(x=>['Pendente','Aberto','Em revisão'].includes(x.status));
 return '<section class="purchase-stats" aria-label="Resumo de compras">'+[['Valor dos registros',money(data.reduce((n,x)=>n+x.amount,0)),'wallet',''],['Aguardando análise',String(pending.length),'calendar','amber'],['Aprovados ou conferidos',String(approved.length),'check','green']].map(([label,value,icon,tone])=>'<div class="purchase-stat"><span class="metric-icon '+tone+'">'+ic(icon)+'</span><div><span class="muted">'+label+'</span><strong class="metric">'+value+'</strong></div></div>').join('')+'</section>'
}
function stockOverviewR09(){
 const stock=records['warehouse-stock'],low=stock.filter(x=>x.status==='Estoque mínimo'),deliveries=records['warehouse-deliveries'].filter(x=>x.status==='Pendente');
 const locations=[...new Set(stock.map(x=>x.center))];
 return header('Estoque','Materiais, movimentações e distribuição')+tabs()+
 '<div class="stock-hero"><section class="panel stock-feature"><div class="sectionhead"><h2>Disponibilidade por material</h2><span class="metric-icon">'+ic('box')+'</span></div><strong class="stock-big">'+stock.length+' <span>materiais</span></strong><div class="stock-track" role="img" aria-label="'+(stock.length-low.length)+' sem alerta e '+low.length+' em estoque mínimo"><span style="flex:'+Math.max(0,stock.length-low.length)+'"></span><span style="flex:'+low.length+'"></span></div><div class="stock-legend"><span><i></i>'+(stock.length-low.length)+' sem alerta</span><span><i></i>'+low.length+' em estoque mínimo</span></div></section>'+
 '<div class="stock-small">'+kpi('Locais de estoque',String(locations.length),'box','Distribuição por local')+kpi('Entregas pendentes',String(deliveries.length),'task','Aguardando entrega')+'</div></div>'+
 '<div class="stock-workspace"><section class="panel stack"><div class="sectionhead"><h2>Locais de estoque</h2></div><div class="location-grid">'+locations.map((loc,i)=>'<article class="location-card"><span class="metric-icon">'+ic('box')+'</span><strong>'+esc(loc)+'</strong><span class="muted">'+stock.filter(x=>x.center===loc).length+' materiais</span></article>').join('')+'</div></section>'+
 '<section class="panel stack"><h2>Reposição necessária</h2>'+ (low.length?low.map(x=>'<button class="workitem stock-alert" data-action="go:warehouse-stock"><span class="workicon amber">'+ic('box')+'</span><span class="workcopy"><strong>'+esc(x.party)+'</strong><span class="muted">'+esc(x.center)+'</span></span><strong>'+esc(x.amount)+' '+esc(x.description)+'</strong>'+ic('chevron')+'</button>').join(''):'<div class="board-empty">Nenhum material em estoque mínimo.</div>')+'</section></div>'+
 '<section class="panel stack stock-resources"><h2>Recursos complementares</h2>'+tiles(['warehouse-reservations','warehouse-items','warehouse-custody','warehouse-epi','warehouse-forms','warehouse-reports','warehouse-settings'])+'</section>'
}
function stockCardsR09(items){
 return items.length?'<div class="material-grid">'+items.map(x=>'<article class="material-card"><div class="material-head"><span class="material-icon">'+ic('box')+'</span>'+badge(x.status)+'</div><h3>'+esc(x.party)+'</h3><p class="muted">'+esc(x.center)+'</p><div class="material-quantity"><span>Saldo registrado</span><strong class="metric">'+Number(x.amount||0).toLocaleString('pt-BR')+' <small>'+esc(x.description)+'</small></strong></div><div class="material-actions">'+btn('Ver','eye','view:'+x.id)+btn('Acompanhar','arrow','wh-page:'+x.id,'tonal')+iconbtn('Editar','edit','edit:'+x.id)+'</div></article>').join('')+'</div>':'<div class="empty"><h2>Nenhum material encontrado</h2>'+btn('Limpar filtros','filter','clear')+'</div>'
}
function budgetTreeR09(items){
 const groups=new Map();for(const x of items){const name=x.stage||'Sem etapa';if(!groups.has(name))groups.set(name,new Map());const sub=x.substage||'Itens';if(!groups.get(name).has(sub))groups.get(name).set(sub,[]);groups.get(name).get(sub).push(x)}
 const sum=rows=>rows.reduce((n,x)=>n+x.qty*x.unit,0);
 return '<div class="budget-tree">'+[...groups].map(([name,subs])=>'<details class="budget-stage"><summary><span>'+ic('box')+esc(name)+'</span><strong>'+money(sum([...subs.values()].flat()))+'</strong>'+ic('chevron')+'</summary><div class="budget-stage-body">'+[...subs].map(([sub,rows])=>'<div class="budget-substage"><div><strong>'+esc(sub)+'</strong><span>'+money(sum(rows))+'</span></div>'+rows.map(x=>'<div class="budget-leaf"><span>'+esc(x.description)+'</span><strong>'+money(x.qty*x.unit)+'</strong></div>').join('')+'</div>').join('')+'</div></details>').join('')+'</div>'
}
function budgetCardsR09(items){
 return items.length?'<div class="budget-grid">'+items.map(x=>'<article class="budget-card"><div class="budget-head"><span class="metric-icon">'+ic('budget')+'</span><div><strong>'+esc(x.id)+'</strong><span class="muted">'+esc(x.center)+'</span></div>'+badge(x.status)+'</div><h3>'+esc(x.party)+'</h3><p class="muted">'+esc(x.description)+'</p><div class="budget-total"><span>Valor total</span><strong class="metric">'+money(x.amount)+'</strong></div><details class="budget-details"><summary><span>'+ic('box')+' Estrutura de itens</span><span class="muted">'+(x.items||[]).length+' itens</span>'+ic('chevron')+'</summary>'+((x.items||[]).length?budgetTreeR09(x.items):'<p class="muted">Nenhum item detalhado nesta demonstração.</p>')+'</details><div class="budget-actions">'+btn('Ver','eye','view:'+x.id)+btn('Acompanhar','arrow','budget-page:'+x.id,'primary')+iconbtn('Editar orçamento','edit','edit:'+x.id)+'</div></article>').join('')+'</div>':'<div class="empty"><h2>Nenhum orçamento encontrado</h2>'+btn('Limpar filtros','filter','clear')+'</div>'
}
function recordDetailsR09(r,x){
 const purchase=r.startsWith('purchase-');
 const items=x.items||[];
 let html='';
 if(purchase){
 const current=VisualR09.purchaseStages.findIndex(([id])=>id===r);
 html+='<section class="summary-context"><h3>Etapa do processo</h3><div class="summary-flow">'+VisualR09.purchaseStages.map(([id,label,icon],i)=>'<div class="'+(i===current?'current':'')+'"><span>'+ic(icon)+'</span><small>'+esc(label)+'</small></div>').join('')+'</div><p class="muted">A etapa indicada corresponde ao tipo deste registro.</p></section>';
 }
 if((purchase||r==='budgets')&&items.length)html+='<section class="summary-context"><h3>Itens do registro</h3><div class="summary-item-list">'+items.map(it=>'<div><span><strong>'+esc(it.description)+'</strong><span class="muted">'+esc(it.qty)+' × '+money(it.unit)+'</span></span><strong>'+money(it.qty*it.unit)+'</strong></div>').join('')+'</div></section>';
 return html;
}
