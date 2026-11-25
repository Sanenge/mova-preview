/* R11 — visualização analítica compartilhada. Série ilustrativa, sem conexão externa. */
const ChartR11=Object.freeze({months:['Jun','Jul','Ago','Set','Out','Nov'],revenue:[68000,102000,87000,144000,116000,172000],expense:[42000,76000,57000,102000,81000,123000]});
function curveR11(points){
 return points.reduce((d,p,i)=>{if(!i)return 'M'+p[0]+' '+p[1];const q=points[i-1],m=(p[0]+q[0])/2;return d+' C'+m+' '+q[1]+' '+m+' '+p[1]+' '+p[0]+' '+p[1]},'');
}
function chartPlotR11(n=6,mode='area'){
 const months=ChartR11.months.slice(-n),a=ChartR11.revenue.slice(-n),b=ChartR11.expense.slice(-n),w=600,h=220,max=180000,x=i=>26+i*(w-52)/(n-1),y=v=>h-14-v/max*(h-28);
 const points=values=>values.map((v,i)=>[x(i),y(v)]),pa=points(a),pb=points(b);
 const path=(p,t)=>'<path class="analysis-area '+t+'" d="'+curveR11(p)+' L'+p.at(-1)[0]+' '+(h-14)+' L'+p[0][0]+' '+(h-14)+' Z"/><path class="analysis-line '+t+'" d="'+curveR11(p)+'"/>';
 const bars=()=>a.map((v,i)=>'<rect class="analysis-bar revenue" x="'+(x(i)-16)+'" y="'+y(v)+'" width="14" height="'+(h-14-y(v))+'" rx="5"/><rect class="analysis-bar expense" x="'+(x(i)+2)+'" y="'+y(b[i])+'" width="14" height="'+(h-14-y(b[i]))+'" rx="5"/>').join('');
 return '<div class="analysis-axis" aria-hidden="true">'+[180,135,90,45,0].map(v=>'<span>'+v+' mil</span>').join('')+'</div><div class="analysis-plot"><div class="analysis-svg-wrap"><svg class="analysis-svg" viewBox="0 0 600 220" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="revenue-fill-r11" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="var(--plot-violet)" stop-opacity=".19"/><stop offset="100%" stop-color="var(--plot-violet)" stop-opacity=".015"/></linearGradient><linearGradient id="expense-fill-r11" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="var(--plot-green)" stop-opacity=".12"/><stop offset="100%" stop-color="var(--plot-green)" stop-opacity=".01"/></linearGradient></defs>'+[180000,135000,90000,45000,0].map(v=>'<line class="analysis-gridline" x1="0" x2="600" y1="'+y(v)+'" y2="'+y(v)+'"/>').join('')+(mode==='area'?path(pa,'revenue')+path(pb,'expense'):bars())+'<g class="analysis-cursor" data-chart-cursor hidden><line x1="0" y1="14" x2="0" y2="206"/><circle class="revenue" r="5" cy="0"/><circle class="expense" r="5" cy="0"/></g></svg><div class="analysis-targets">'+months.map((m,i)=>'<button type="button" class="analysis-target" data-action="chart-point:'+i+'" data-index="'+i+'" data-month="'+m+'" data-revenue="'+a[i]+'" data-expense="'+b[i]+'" data-x="'+x(i)+'" data-y1="'+y(a[i])+'" data-y2="'+y(b[i])+'" aria-label="'+m+': receitas '+money(a[i])+', despesas '+money(b[i])+'"></button>').join('')+'</div></div><div class="analysis-months">'+months.map(m=>'<span>'+m+'</span>').join('')+'</div></div>';
}
let chartModeR11='area';
function chartPanelR11(){
 return '<section class="panel chartpanel analysis-panel"><div class="sectionhead"><div><h2>Movimentação financeira</h2><p class="muted">Receitas e despesas · série ilustrativa</p></div><div class="analysis-controls"><div class="analysis-switch" role="group" aria-label="Tipo de gráfico"><button type="button" aria-label="Gráfico de linhas" data-action="chart-mode:area" aria-pressed="'+(chartModeR11==='area')+'">'+ic('chart')+'<span>Linhas</span></button><button type="button" aria-label="Gráfico de colunas" data-action="chart-mode:bars" aria-pressed="'+(chartModeR11==='bars')+'">'+ic('menu')+'<span>Colunas</span></button></div><select class="filter" aria-label="Período do gráfico" id="chart-period"><option value="6">6 meses</option><option value="3">3 meses</option></select></div></div><div class="analysis-readout" aria-live="polite"><div><span class="analysis-key revenue"></span><span>Receitas</span><strong id="analysis-revenue">'+money(172000)+'</strong></div><div><span class="analysis-key expense"></span><span>Despesas</span><strong id="analysis-expense">'+money(123000)+'</strong></div><span id="analysis-month" class="muted">Novembro</span></div><div class="analysis-chart" id="chart-bars">'+chartPlotR11(6,chartModeR11)+'</div></section>';
}
function chartSelectR11(button){
 if(!button)return;const root=button.closest('.analysis-panel');if(!root)return;
 root.querySelector('#analysis-revenue').textContent=money(+button.dataset.revenue);root.querySelector('#analysis-expense').textContent=money(+button.dataset.expense);root.querySelector('#analysis-month').textContent=button.dataset.month;
 const c=root.querySelector('[data-chart-cursor]');c.removeAttribute('hidden');c.style.display='';c.setAttribute('transform','translate('+button.dataset.x+' 0)');c.querySelector('.revenue').setAttribute('cy',button.dataset.y1);c.querySelector('.expense').setAttribute('cy',button.dataset.y2);
 root.querySelectorAll('.analysis-target').forEach(el=>el.setAttribute('aria-pressed',String(el===button)));
}
function chartRefreshR11(){
 const root=document.querySelector('.analysis-panel');if(!root)return;const n=Number(root.querySelector('#chart-period').value);
 root.querySelector('#chart-bars').innerHTML=chartPlotR11(n,chartModeR11);
 root.querySelectorAll('[data-action^="chart-mode:"]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.action==='chart-mode:'+chartModeR11)));
 chartSelectR11(root.querySelector('.analysis-target:last-child'));
}
document.addEventListener('pointerover',e=>{const el=e.target.closest('.analysis-target');if(el)chartSelectR11(el)});
document.addEventListener('focusin',e=>{const el=e.target.closest('.analysis-target');if(el)chartSelectR11(el)});
