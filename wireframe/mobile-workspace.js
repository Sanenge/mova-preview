/* R32 — one-pane mobile workspace. Original desktop nodes are moved, never cloned. */
const supportDialogR32=document.createElement('dialog');
supportDialogR32.className='dialog support-sheet-r32';supportDialogR32.id='support-r32';supportDialogR32.setAttribute('aria-labelledby','support-title-r32');document.body.append(supportDialogR32);
let supportMovesR32=[],supportInvokerR32=null,supportCurrentR32='';
const supportSpecsR32={summary:['Indicadores','chart'],filters:['Filtros e visualização','filter'],operations:['Operações','more'],dashboard:['Receitas e despesas','wallet']};
const isCompactR32=()=>matchMedia('(max-width: 800px)').matches;
function supportButtonR32(key,label,icon){return '<button type="button" class="support-trigger-r32" data-action="support-r32:'+key+'" aria-label="'+esc(supportSpecsR32[key][0])+'" aria-haspopup="dialog">'+ic(icon)+'<span>'+esc(label)+'</span></button>'}
function initSupportR32(){
 const c=document.querySelector('.content'),workspace=c?.querySelector('.collection-workspace-r29');
 if(workspace){
  const tag=(el,k)=>{if(el)el.dataset.mobileSupport=k};
  Array.from(c.children).filter(el=>el.matches('.finance-overview,.purchase-stats,.budget-overview-r21,.workspace-overview-r21,.semantic-summary-r31,.kpis')).forEach(el=>tag(el,'summary'));
  workspace.querySelectorAll(':scope>.operation-toolbar-r26,:scope>.wh-toolbar').forEach(el=>tag(el,'operations'));
  workspace.querySelectorAll(':scope>.collectionhead>.view-switch,:scope>.toolbar>#status-filter,:scope>.toolbar>[data-action=advanced-filter],:scope>.toolbar>[data-action=sort],:scope>.toolbar>[data-action=density]').forEach(el=>tag(el,'filters'));
  const strip=document.createElement('div');strip.className='support-strip-r32';strip.setAttribute('aria-label','Controles da lista');
  const has=k=>!!c.querySelector('[data-mobile-support="'+k+'"]');
  strip.innerHTML=(has('summary')?supportButtonR32('summary','Resumo','chart'):'')+supportButtonR32('filters','Filtros','filter')+(has('operations')?supportButtonR32('operations','Ações','more'):'');
  workspace.querySelector(':scope>.toolbar')?.append(strip);updateSupportLabelR32();
  workspace.dataset.mobileWorkspace='true';
 }
 const dashboard=c?.querySelector('.overview-r29');
 if(dashboard){
  dashboard.querySelectorAll(':scope>.dashboard-metric').forEach(el=>el.dataset.mobileSupport='dashboard');
  const b=document.createElement('div');b.className='dashboard-support-r32';b.innerHTML=supportButtonR32('dashboard','Receitas e despesas','wallet');dashboard.append(b);
 }
}
function updateSupportLabelR32(){const b=document.querySelector('[data-action="support-r32:filters"]');if(!b)return;const n=(status?1:0)+Object.values(filtersR22()).filter(Boolean).length;b.querySelector('span').textContent=n?'Filtros ('+n+')':'Filtros';b.setAttribute('aria-label',n?'Filtros e visualização, '+n+' ativos':'Filtros e visualização')}
function openSupportR32(k){
 if(!isCompactR32()||!supportSpecsR32[k])return;
 closeSupportR32(false);
 const nodes=[...document.querySelectorAll('.content [data-mobile-support="'+k+'"]')];
 if(!nodes.length)return;
 supportCurrentR32=k;supportInvokerR32=document.activeElement;
 supportDialogR32.dataset.kind=k;
 supportDialogR32.innerHTML='<div class="support-grip-r32" aria-hidden="true"></div><header class="support-head-r32"><h2 id="support-title-r32">'+esc(supportSpecsR32[k][0])+'</h2>'+iconbtn('Fechar painel','close','support-close-r32')+'</header><div class="support-body-r32"></div>'+(k==='filters'?'<footer class="support-footer-r32">'+btn('Concluir','check','support-close-r32','primary')+'</footer>':'');
 const body=supportDialogR32.querySelector('.support-body-r32');
 nodes.forEach(node=>{
   const marker=document.createComment('support-r32:'+k);node.before(marker);
   supportMovesR32.push({node,marker,details:[...node.querySelectorAll('details')].map(d=>[d,d.open])});
   if(k==='filters'){
    const wrap=document.createElement('div');wrap.className='support-control-r32';
    if(node.id==='status-filter'){const label=document.createElement('label');label.htmlFor=node.id;label.textContent='Situação';wrap.append(label)}
    else if(node.classList.contains('view-switch')){const label=document.createElement('span');label.className='support-label-r32';label.textContent='Visualização';wrap.append(label)}
    wrap.append(node);body.append(wrap);
   }else body.append(node);
   if(k==='operations')node.querySelectorAll('details').forEach(d=>d.open=true);
 });
 supportDialogR32.showModal();supportDialogR32.querySelector('.support-head-r32 button')?.focus({preventScroll:true});
}
function closeSupportR32(focus=true){
 if(!supportDialogR32.open&&!supportMovesR32.length)return;
 for(const {node,marker,details} of supportMovesR32){if(marker.isConnected)marker.replaceWith(node);for(const [d,open] of details)d.open=open}
 supportMovesR32=[];supportCurrentR32='';if(supportDialogR32.open)supportDialogR32.close();supportDialogR32.replaceChildren();
 if(focus&&supportInvokerR32?.isConnected)supportInvokerR32.focus({preventScroll:true});supportInvokerR32=null;
}
supportDialogR32.addEventListener('cancel',e=>{e.preventDefault();closeSupportR32()});
supportDialogR32.addEventListener('click',e=>{if(e.target===supportDialogR32){const b=supportDialogR32.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)closeSupportR32()}});
matchMedia('(max-width: 800px)').addEventListener('change',()=>closeSupportR32(false));
