# MOVA — auditoria de experiência R28

## Escopo e evidência
Leitura do DOM da aba R26 aberta no navegador (lista Orçamentos) e inspeção de fonte R27. O navegador conectado não permite captura visual nem clique nesta sessão; nenhum fluxo visual é considerado homologado. R28 implementa correções estruturais iniciais.

## Achados
| ID | Severidade | Evidência | Solução | Estado |
|---|---|---|---|---|
| UX-001 | Crítica | showDialog substituía innerHTML após close da janela anterior | Histórico de janelas filhas, restaurando DOM, foco e rolagem; passos de wizard mantêm substituição própria | Implementado; teste pendente |
| UX-002 | Alta | itemLine repetia entradas em cada linha do formulário | Coleção compacta, janela dedicada de adicionar/editar, remoção confirmada, metadados e total preservados | Implementado nos cinco formulários com itemRoutes; teste pendente |
| UX-003 | Alta | orçamento com etapa/subetapa como campos repetidos | agrupamento por etapa, subtotal e lista de itens | Implementado; teste pendente |
| UX-004 | Alta | CSS de operação/decisão força 100dvh em mobile | janela curta adaptável; edição de registro mantém tela cheia | Implementado; captura pendente |
| UX-005 | Alta | estoque tem fluxos próprios, ainda não usa coleção multi-item | migrar para contrato central de itens após mapear quantidade, unidade, lote e localização | Pendente |
| UX-006 | Alta | rota/registro não equivalem à cobertura de todos os estados | matriz de auditoria por tela, componente e tarefa | Pendente de captura |

## Protocolo de aceite por rota
1. Capturar desktop 1440, tablet 768, mobile 390 e mobile compacto 360; claro e escuro. Registrar a versão exata.
2. Mapear cabeçalho, ações, filtros, busca, indicadores, coleção, cards, abas, paginação e estados. Avaliar hierarquia e clareza, densidade, contraste, rótulos e alvos de toque.
3. Abrir cada ação contextual e testar ida/volta, cancelamento, confirmar, erro, estado vazio, scroll e foco; não confundir navegação de etapa com nova janela filha.
4. Inspecionar itens com 0, 1, 20 e 100 registros, texto longo, edição, remoção e mudança de grupo. A lista mostra dados; a janela modifica dados; a entidade principal preserva o rascunho.
5. Analisar animações com movimento normal e reduzido: continuidade, feedback pressionado, abertura/fechamento e retorno. Não usar movimento decorativo que atrase tarefas.
6. Registrar evidência antes/depois, prioridade, solução central e telas impactadas. Não marcar aprovado sem captura e inspeção humana/visual e verificação comportamental.

## Lotes
A. Janelas, hierarquia, ações e coleções centrais (implementação inicial R28; homologação pendente).
B. Login, painel, navegação, notificações, mensagens.
C. Financeiro, Compras, Orçamentos e estoque, incluindo todos os fluxos e subpáginas.
D. Cadastros, tarefas, documentos, contratos, BI, configurações, ajuda e suporte.
E. Revisão de todos os componentes, estados e motion; regressões desktop/mobile.

## Contratos de interface
Página = visão e contexto; coleção = leitura e operação em lote; resumo = consulta breve; acompanhamento = histórico e relações; editor = campos; janela filha = tarefa delimitada. Fechar uma janela filha não fecha o pai. Confirmação simples não ocupa toda a tela; formulários extensos usam espaço suficiente. A ação de navegação explícita encerra o contexto anterior. Dados de demonstração não são dados reais.
