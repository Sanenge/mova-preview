/* R31: adaptive action groups, semantic financial indicators, disclosure. */
function actionGroupR31(items){
 if(!items.length)return '';
 const action=x=>btn(x.label,x.icon,x.action,'ghost');
 return '<div class="adaptive-actions-r31">'+action(items[0])+(items.length>1?'<details class="operation-overflow-r31" open><summary aria-label="Outras operações">'+ic('more')+'<span>Operações</span>'+ic('down')+'</summary><div class="overflow-actions-r31">'+items.slice(1).map(action).join('')+'</div></details>':'')+'</div>'
}
function initAdaptiveR31(){const compact=matchMedia('(max-width: 800px)').matches;document.querySelectorAll('.operation-overflow-r31,.budget-centers-r31').forEach(d=>d.open=!compact)}
matchMedia('(max-width: 800px)').addEventListener('change',initAdaptiveR31);
document.addEventListener('click',e=>{document.querySelectorAll('.operation-overflow-r31[open]').forEach(d=>{if(matchMedia('(max-width: 800px)').matches&&!d.contains(e.target))d.open=false})});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&matchMedia('(max-width: 800px)').matches){const d=document.querySelector('.operation-overflow-r31[open]');if(d){d.open=false;d.querySelector('summary').focus()}}});
const financeOverviewSpecR31={
 'finance-banks':{label:'Saldo registrado',secondary:'Contas ativas',filter:x=>x.status==='Ativo',count:true},
 'finance-reconciliation':{label:'Valor dos movimentos',secondary:'Conciliado',filter:x=>x.status==='Conciliado'},
 'finance-payment-plans':{label:'Valor programado',secondary:'Programações pendentes',filter:x=>x.status==='Pendente',count:true},
 'finance-entries':{label:'Movimentação registrada',secondary:'Lançamentos',filter:()=>true,count:true}
};
function financeOverviewR31(r,a){
 const s=financeOverviewSpecR31[r],sum=a.reduce((n,x)=>n+Number(x.amount||0),0),selected=a.filter(s.filter),v=s.count?selected.length:money(selected.reduce((n,x)=>n+Number(x.amount||0),0));
 return '<section class="semantic-summary-r31" aria-label="Resumo de '+esc(routes[r].title)+'"><div><span>'+esc(s.label)+'</span><strong class="metric">'+money(sum)+'</strong></div><div><span>'+esc(s.secondary)+'</span><strong>'+esc(v)+'</strong></div></section>'
}
