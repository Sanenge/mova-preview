# MOVA — Contrato de wireframe e prototipagem (R26)

## Escopo
Protótipo navegável, sem serviços reais. Cobertura de rotas não certifica cobertura de ações ou experiência.
Fase atual: arquitetura de informação, wireflows e consistência funcional, antes de refinamento visual.

## Referências
- Figma: https://www.figma.com/resource-library/what-is-wireframing/
- NN/g: https://www.nngroup.com/articles/wireflows/
- NN/g: https://www.nngroup.com/articles/ux-prototype-hi-lo-fidelity/
- IBM Carbon: https://www.carbondesignsystem.com/building-blocks/core/patterns/dialogs
- IBM Carbon: https://www.carbondesignsystem.com/building-blocks/core/components/data-table/guidelines
- IBM Carbon: https://www.carbondesignsystem.com/building-blocks/data-visualization/chart-anatomy

## Hierarquia obrigatória
1. Shell: navegação global, contexto, usuário e notificações.
2. Página: título, ação principal, navegação local, indicadores essenciais, coleção.
3. Coleção: operações contextuais, busca/filtros, resultados, paginação. Sem cards decorativos de operações.
4. Registro: resumo breve para consulta; acompanhamento em página quando houver estados, vínculos, documentos, eventos ou etapas. Um único destino de acompanhamento.
5. Janela: edição ou operação delimitada. Confirmação curta, ações claras; conteúdo scrollável, cabeçalho e rodapé visíveis.
6. Estado: vazio, erro, sucesso, carregamento, permissões; dados fictícios identificados.

## Wireflows iniciais — contratos, não certificação
- Solicitação: lista → resumo → acompanhamento → itens/aprovação → decisão → acompanhamento → cotação.
- Cotação: lista → acompanhamento → fornecedores → mapa comparativo → seleção/aprovação → ordem vinculada.
- Ordem: lista → criação por origem → revisão → acompanhamento → entrega/recebimentos/devoluções → conferência fiscal.
- Financeiro: lista → resumo → dossiê → classificação/documentos/baixas/histórico; operação → seleção → revisão → confirmação.
- Estoque: inventário, recebimentos, transferências, cautelas e EPI ainda precisam de levantamento e wireflows completos.

## Aceite por fluxo
- Ação principal inequívoca; ações por registro não repetidas em cartões de atalho.
- Caminho de volta explícito; estados e vínculos preservados durante a sessão.
- Sem duplicação de página e janela para a mesma finalidade.
- Validar campos, seleção e estados; rótulos, tooltips e unidades em gráficos.
- Desktop e mobile: capturar lista, resumo, acompanhamento, edição, confirmação e resultado. Inspecionar capturas, não apenas contar testes.
- Registrar separadamente implementação, validação técnica e revisão visual. Não atribuir percentual subjetivo de qualidade.
