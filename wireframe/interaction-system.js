/* R28: independent child dialogs and item collections; wizard steps replace only their own screen. */
const dialogStackR28=[];
const childActionsR28=new Set(['edit','detail-edit','record-more','record-code','duplicate','settle','transition','detail-decision','finance-record','finance-operation','finance-plan','finance-batch','finance-aging','finance-import','finance-plan-detail','finance-reconcile','purchase-map','purchase-approval','purchase-receipt','purchase-return','purchase-invoice','purchase-wizard','purchase-quote-start','purchase-xml','wh-start']);
let dialogIntentR28=null;
function captureContextR28(){
 return {formRoute,editing,draft,editorBaseline,detailR22,purchaseFlowR24,financeFlowR23,warehouseDraftR27}
}
function prepareDialogActionR28(a){const k=a.split(':')[0];dialogIntentR28=dialog.open&&childActionsR28.has(k)?{ctx:captureContextR28(),focus:document.activeElement}:null}
function pushDialogR28(){
 const intent=dialogIntentR28;dialogIntentR28=null;if(!dialog.open||!intent)return;
 dialogStackR28.push({nodes:[...dialog.childNodes],mode:dialog.dataset.mode,scroll:dialog.querySelector('.dialogbody')?.scrollTop||0,ctx:intent.ctx,focus:intent.focus,summaryId:dialog.dataset.mode==='summary'?dialog.querySelector('[data-action^="edit:"]')?.dataset.action.slice(5):null});
}
function restoreDialogR28(refresh=false){
 const s=dialogStackR28.pop();if(!s)return false;
 dialogIntentR28=null;editorSectionObserver?.disconnect();editorSectionObserver=null;
 ({formRoute,editing,draft,editorBaseline,detailR22,purchaseFlowR24,financeFlowR23,warehouseDraftR27}=s.ctx);
 dialog.dataset.mode=s.mode;dialog.replaceChildren(...s.nodes);
 if(refresh&&s.summaryId&&records[route]?.some(x=>x.id===s.summaryId))summary(s.summaryId);
 else if(refresh&&s.mode==='record-detail'&&detailR22){const pane=dialog.querySelector('#detail-pane-r22');if(pane)pane.innerHTML=detailPaneR22()}
 const body=dialog.querySelector('.dialogbody');if(body)body.scrollTop=s.scroll;
 if(s.mode==='editor'){const sections=[...dialog.querySelectorAll('.editor-section')],nav=dialog.querySelector('.editor-nav');if(body&&nav&&sections.length){editorSectionObserver=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){nav.querySelectorAll('button').forEach(b=>b.removeAttribute('aria-current'));nav.querySelector('[data-action="form-section:'+sections.indexOf(e.target)+'"]')?.setAttribute('aria-current','true')}},{root:body,rootMargin:'0px 0px -65% 0px',threshold:0});sections.forEach(el=>editorSectionObserver.observe(el))}}
 dialog.dataset.depth=String(dialogStackR28.length);const action=s.focus?.dataset?.action;const replacement=action?[...dialog.querySelectorAll('button[data-action]')].find(b=>b.dataset.action===action):null;(s.focus?.isConnected?s.focus:replacement||dialog.querySelector('.dialoghead button'))?.focus({preventScroll:true});
 document.body.style.overflow='hidden';return true
}
const itemDialogR28=document.createElement('dialog');itemDialogR28.className='dialog item-modal-r28';itemDialogR28.setAttribute('aria-labelledby','item-title-r28');document.body.appendChild(itemDialogR28);
let itemEditR28=null;
function itemLineR28(x={},i=0){
 const hidden=(k,v)=>'<input type="hidden" data-item="'+k+'" value="'+esc(v)+'">';
 return '<div class="itemline item-row-r28" data-original="'+esc(JSON.stringify(x))+'">'+hidden('description',x.description||'')+hidden('qty',x.qty??1)+hidden('unit',x.unit??0)+(formRoute==='budgets'?hidden('stage',x.stage||'')+hidden('substage',x.substage||''):'')+'<div class="item-info-r28"><strong>'+esc(x.description||'Item sem descrição')+'</strong>'+(formRoute==='budgets'&&x.substage?'<span class="muted">'+esc(x.substage)+'</span>':'')+'<span class="muted">'+esc(Number(x.qty??1).toLocaleString('pt-BR'))+' × '+money(x.unit??0)+'</span></div><strong class="itemtotal">'+money((x.qty??1)*(x.unit??0))+'</strong><div class="item-actions-r28">'+iconbtn('Editar item '+(i+1),'edit','item-edit:'+i)+iconbtn('Remover item '+(i+1),'close','item-remove:'+i)+'</div></div>'
}
function renderItemRowsR28(items,r=formRoute){
 if(!items.length)return '<p class="item-empty-r28">Nenhum item adicionado.</p>';
 if(r!=='budgets')return items.map(itemLineR28).join('');
 const groups=new Map();items.forEach(x=>{const k=x.stage?.trim()||'Sem etapa';if(!groups.has(k))groups.set(k,[]);groups.get(k).push(x)});
 let i=0;return [...groups].map(([k,a])=>'<section class="item-stage-r28"><header><h4>'+esc(k)+'</h4><strong>'+money(a.reduce((n,x)=>n+x.qty*x.unit,0))+'</strong></header>'+a.map(x=>itemLineR28(x,i++)).join('')+'</section>').join('')
}
function readItemRowsR28(){return [...document.querySelectorAll('#item-lines .itemline')].map(el=>{const o=JSON.parse(el.dataset.original||'{}'),v=k=>el.querySelector('[data-item="'+k+'"]')?.value||'';return {...o,description:v('description').trim(),qty:Number(v('qty')),unit:Number(v('unit')),...(formRoute==='budgets'?{stage:v('stage').trim(),substage:v('substage').trim()}:{})}})}
function refreshItemRowsR28(items){const root=$('#item-lines');if(!root)return;root.innerHTML=renderItemRowsR28(items);updateItems()}
function itemOpenR28(index=null){
 const items=readItems(),x=index===null?{description:'',qty:1,unit:0,stage:'',substage:''}:items[index];if(!x)return;
 itemEditR28={index,original:x,invoker:document.activeElement};
 itemDialogR28.innerHTML='<div class="dialoghead"><h2 id="item-title-r28">'+(index===null?'Adicionar item':'Editar item')+'</h2><button class="iconbtn" type="button" data-item-action="cancel" aria-label="Fechar item">'+ic('close')+'</button></div><div class="dialogbody"><form id="item-form-r28" class="formgrid">'+field('Descrição','itemDescription',x.description,'text','required')+(formRoute==='budgets'?field('Etapa','itemStage',x.stage||'')+field('Subetapa (opcional)','itemSubstage',x.substage||''):'')+field('Quantidade','itemQty',x.qty,'number','required min="0.001" step="any"')+field('Valor unitário (R$)','itemUnit',x.unit,'number','required min="0" step="0.01"')+'<div class="item-preview-r28 full"><span>Total do item</span><strong id="item-preview-r28">'+money(x.qty*x.unit)+'</strong></div></form></div><div class="dialogfooter"><button type="button" class="btn secondary" data-item-action="cancel">Cancelar</button><button type="button" class="btn primary" data-item-action="save">'+ic('check')+'Salvar item</button></div>';
 itemDialogR28.showModal();itemDialogR28.querySelector('[name=itemDescription]').focus({preventScroll:true})
}
function itemCloseR28(){const focus=itemEditR28?.invoker;itemEditR28=null;itemDialogR28.close();if(focus?.isConnected)focus.focus({preventScroll:true})}
function itemSaveR28(){const f=itemDialogR28.querySelector('form'),d=itemEditR28;if(!f||!d||!f.reportValidity())return;const v=Object.fromEntries(new FormData(f)),desc=v.itemDescription.trim();if(!desc){f.elements.itemDescription.setCustomValidity('Informe a descrição');f.elements.itemDescription.reportValidity();return}const item={...d.original,description:desc,qty:Number(v.itemQty),unit:Number(v.itemUnit),...(formRoute==='budgets'?{stage:v.itemStage.trim(),substage:v.itemSubstage.trim()}:{})};const a=readItems();if(d.index===null)a.push(item);else a[d.index]=item;itemCloseR28();refreshItemRowsR28(a);dialog.querySelector('[data-action="add-item"]')?.focus({preventScroll:true})}
function itemRemoveR28(i){const a=readItems();if(!a[i])return;itemEditR28={index:i,invoker:document.activeElement};itemDialogR28.innerHTML='<div class="dialoghead"><h2 id="item-title-r28">Remover item?</h2><button class="iconbtn" data-item-action="cancel" aria-label="Fechar">'+ic('close')+'</button></div><div class="dialogbody"><p>'+esc(a[i].description)+'</p><p class="muted">O item será removido do rascunho. O registro só muda quando for salvo.</p></div><div class="dialogfooter"><button class="btn secondary" data-item-action="cancel">Cancelar</button><button class="btn primary" data-item-action="remove">Remover</button></div>';itemDialogR28.showModal()}
itemDialogR28.addEventListener('click',e=>{const a=e.target.closest('[data-item-action]')?.dataset.itemAction;if(!a)return;e.preventDefault();if(a==='cancel')itemCloseR28();if(a==='save')itemSaveR28();if(a==='remove'){const items=readItems();items.splice(itemEditR28.index,1);itemCloseR28();refreshItemRowsR28(items);dialog.querySelector('[data-action="add-item"]')?.focus({preventScroll:true})}});
itemDialogR28.addEventListener('cancel',e=>{e.preventDefault();itemCloseR28()});
itemDialogR28.addEventListener('input',e=>{e.target.setCustomValidity?.('');const f=itemDialogR28.querySelector('form');if(f)$('#item-preview-r28').textContent=money(Number(f.elements.itemQty.value)*Number(f.elements.itemUnit.value))});
itemDialogR28.addEventListener('submit',e=>{e.preventDefault();itemSaveR28()});
