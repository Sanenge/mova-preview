# MOVA R31 — revisão visual e design adaptativo
Fonte: execução R30 45636725403 (commit 1c2679feb5795610f41b5a17ef17fdfb7631b558), artefatos 15034610424, 15032699086, 15033830553. Todos os quatro jobs técnicos concluíram com sucesso; 149 verificações por configuração nos três relatórios recuperados. Inspeção de pranchas desktop claro, mobile claro e escuro e grupos adicionais mobile Financeiro, Compras/Estoque, Administração. Capturas são do estado da sessão automatizada, não uma homologação estética.

## Achados e correções
- R30 editor de item (80-compact-item-dialog-open): proporção corrigida visualmente no desktop; resumo (05-summary) também melhorou.
- R30 03-payments: primeira linha aparece no mobile, mas comandos secundários ficam cortados. R31 ação prioritária + menu de operações com Escape e clique externo. Toolbar desktop continua aberta. Aplicado a Compras, Financeiro e Estoque.
- R30 route-purchase-requests/quotes/orders: Acompanhar ocupa linha extra no card e concorre com ações. R31 vínculo no nome do registro e três ações na base; detalhes continuam acessíveis pelo resumo.
- R30 route-finance-banks: "Em aberto" não representa saldo ativo; route-finance-reconciliation/payment-plans/entries usam indicadores genéricos. R31 resumos semânticos próprios, mais compactos.
- R30 route-budgets: lista de centros ocupa espaço antes dos registros. R31 disclosure com agrupamento detalhado, aberto no desktop e recolhido em mobile.
- R30 route-settings-approvals/workflows/automations, route-contracts/document-center: repetição de contagens/status, muita altura. R31 composição horizontal compacta, miniatura documental reduzida.
- R30 route-clients/suppliers/warehouse-stock: cartões grandes para pouca informação. R31 espaçamento interno e hierarquia refinados.
- R30 login: desktop usa gráfico ornamental fictício e mobile perde identidade. R31 arte de marca abstrata, composição adaptativa clara e escura.
- R30 dashboard: gráfico começa tarde no mobile. R31 compactação de indicadores, sem retirar dados.
- R30 mensagens: composição anterior melhorou avatar, mas ainda requer revisão de conversa, estados, anexos e teclado; não homologada.
- R30 BI/fluxo de caixa: gráficos e legendas precisam revisão dedicada, especialmente telas estreitas; pendente.
- R30 mobile escuro: tom violeta forte em botões, contrastes a testar individualmente; pendente.
## Referências de design
Android Developers: https://developer.android.com/design/ui/mobile/guides/layout-and-content/layout-and-nav-patterns (FAB, ações secundárias e overflow, navegação adaptativa)
https://developer.android.com/design/ui/mobile/guides/layout-and-content/common-layouts (list-detail e coleções)
https://developer.android.com/design/ui/mobile/guides/layout-and-content/layout-basics (contenção, alinhamento, áreas seguras).
## Validação
R31 introduz verificações de menu adaptativo e resumo de banco. Nova captura e revisão pós-correção ainda necessárias. Não marcar rota aprovada pelo relatório automático. Não altera ERP oficial.