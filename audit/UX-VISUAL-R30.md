# R30 — auditoria visual baseada em capturas reais da R29
Fonte: execução 45634858672, commit fcdfaef8c4cc09826c1517c7224ae555810e9dc0.
Artefatos: desktop claro 15032975972; mobile claro 15030964435. Cada ZIP contém 66 capturas de rota e estados adicionais. Capturas efetivamente inspecionadas: 01-login, 02-dashboard, 03-payments, 10-requests, 12-budgets, route-warehouse-stock, 14-messages, 05-summary, 06-editor, 17-item-child, 79-budget-workspace (estado final lista), nas duas dimensões. As demais capturas não estão aprovadas.

| ID | Evidência | Achado | Ação R30 |
|---|---|---|---|
| V-001 | 17-item-child, desktop | janela 810px de altura, com mais de 350px vazios | altura intrínseca, corpo sem flex expansivo, teste de altura |
| V-002 | 05-summary, desktop | resumo ocupa quase toda altura apesar de poucas informações | altura pelo conteúdo e rolagem apenas quando necessário |
| V-003 | 03-payments, mobile | nenhum registro visível no viewport inicial; resumo tem 263px | reduzir altura, espaçamentos, margens; teste de limite |
| V-004 | 14-messages, desktop | iniciais de avatares deslocadas para cima/esquerda; conversa pouco densa | centralização, ajuste tipográfico, espaçamento e bolhas |
| V-005 | 02-dashboard, mobile | primeira dobra concentra indicadores, pouco gráfico visível | reduzir espaçamento sem excluir dados |
| V-006 | 12-budgets / warehouse-stock, mobile | muita área antes dos registros; ações e filtros dispersos | reduzir espaçamento das coleções; revisão estrutural futura |
| V-007 | 01-login, ambos | tela genérica, pouca identidade e equilíbrio | pendente de redesenho |
| V-008 | 79-budget-workspace | captura final mostra lista, não página de acompanhamento | capturar estado interno dedicado em próxima rodada |

Testes R29 claro desktop/mobile: 146/147 cada, sem exceções JS; teste antigo exigia sparklines removidas. R30 atualiza teste para indicadores reais, adiciona testes de dimensão. As mudanças R30 não são aprovadas até nova captura.

Limites: capturas estáticas não comprovam animação, navegação física, teclado ou contraste integral. Revisar temas escuros e demais estados; não registrar aprovação por simples ausência de overflow.
