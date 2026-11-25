/* Catálogo central R03: registros de demonstração, sem integração real. */
const R02_CATALOG = {
  "finance-banks": [
    "Contas bancárias",
    "Financeiro",
    "bank",
    "Conta bancária",
    "Banco / conta",
    "Agência e conta",
    "Instituição",
    "money",
    [
      "Ativo",
      "Inativo"
    ],
    [
      [
        "CB-001",
        "Banco Modelo",
        "Ag. 0001 · CC 10203",
        "Tesouraria",
        85000,
        "Ativo"
      ]
    ]
  ],
  "finance-reconciliation": [
    "Extratos e conciliação",
    "Financeiro",
    "bank",
    "Movimento",
    "Histórico",
    "Referência",
    "Conta bancária",
    "money",
    [
      "Pendente",
      "Conciliado"
    ],
    [
      [
        "EX-001",
        "Transferência recebida",
        "PIX demonstrativo",
        "Banco Modelo",
        12500,
        "Pendente"
      ],
      [
        "EX-002",
        "Pagamento fornecedor",
        "TED demonstrativa",
        "Banco Modelo",
        4200,
        "Conciliado"
      ]
    ]
  ],
  "finance-payment-plans": [
    "Parcelamentos",
    "Financeiro",
    "calendar",
    "Parcelamento",
    "Credor",
    "Descrição",
    "Centro de custo",
    "money",
    [
      "Pendente",
      "Pago"
    ],
    [
      [
        "PL-001",
        "Distribuidora Alfa",
        "3 parcelas",
        "Obra Litoral",
        18500,
        "Pendente"
      ]
    ]
  ],
  "purchase-quotes": [
    "Cotações",
    "Compras",
    "cart",
    "Cotação",
    "Solicitante",
    "Objeto da cotação",
    "Centro de custo",
    "money",
    [
      "Pendente",
      "Aprovado",
      "Rejeitado"
    ],
    [
      [
        "CT-001",
        "Engenharia",
        "Tubulações e conexões",
        "Obra Litoral",
        42000,
        "Pendente"
      ],
      [
        "CT-002",
        "Estoque",
        "EPIs",
        "Obra Centro",
        5800,
        "Aprovado"
      ]
    ]
  ],
  "purchase-invoices": [
    "Notas fiscais",
    "Compras",
    "file",
    "Nota fiscal",
    "Fornecedor",
    "Número / descrição",
    "Centro de custo",
    "money",
    [
      "Pendente",
      "Conferido",
      "Rejeitado"
    ],
    [
      [
        "NF-001",
        "Distribuidora Alfa",
        "NF 000123",
        "Obra Litoral",
        26000,
        "Pendente"
      ]
    ]
  ],
  "warehouse-catalog": [
    "Catálogo",
    "Estoque",
    "box",
    "Item",
    "Material",
    "Unidade / especificação",
    "Categoria",
    "none",
    [
      "Ativo",
      "Inativo"
    ],
    [
      [
        "MAT-001",
        "Tubo PEAD DE160",
        "m · PE100",
        "Tubulações",
        0,
        "Ativo"
      ],
      [
        "MAT-002",
        "Luva nitrílica",
        "par · tamanho M",
        "EPI",
        0,
        "Ativo"
      ],
      [
        "MAT-003",
        "Conexão DN150",
        "un · PVC",
        "Conexões",
        0,
        "Ativo"
      ]
    ]
  ],
  "warehouse-stock": [
    "Estoques",
    "Estoque",
    "box",
    "Saldo",
    "Material",
    "Unidade",
    "Local de estoque",
    "qty",
    [
      "Disponível",
      "Estoque mínimo",
      "Bloqueado"
    ],
    [
      [
        "ES-001",
        "Tubo PEAD DE160",
        "m",
        "Almoxarifado central",
        1240,
        "Disponível"
      ],
      [
        "ES-002",
        "Luva nitrílica",
        "par",
        "Obra Litoral",
        18,
        "Estoque mínimo"
      ],
      [
        "ES-003",
        "Conexão DN150",
        "un",
        "Obra Centro",
        65,
        "Disponível"
      ]
    ]
  ],
  "warehouse-movements": [
    "Movimentações",
    "Estoque",
    "box",
    "Movimentação",
    "Material",
    "Tipo de movimento",
    "Local",
    "qty",
    [
      "Registrado",
      "Pendente"
    ],
    [
      [
        "MV-001",
        "Tubo PEAD DE160",
        "Entrada",
        "Almoxarifado central",
        350,
        "Registrado"
      ],
      [
        "MV-002",
        "Luva nitrílica",
        "Saída",
        "Obra Litoral",
        12,
        "Registrado"
      ]
    ]
  ],
  "warehouse-deliveries": [
    "Entregas",
    "Estoque",
    "box",
    "Entrega",
    "Destinatário",
    "Material / unidade",
    "Local",
    "qty",
    [
      "Pendente",
      "Entregue"
    ],
    [
      [
        "EN-001",
        "Equipe de campo",
        "Luva nitrílica · par",
        "Obra Centro",
        24,
        "Pendente"
      ]
    ]
  ],
  "warehouse-inventory": [
    "Inventários",
    "Estoque",
    "task",
    "Inventário",
    "Responsável",
    "Escopo",
    "Local",
    "qty",
    [
      "Aberto",
      "Concluído"
    ],
    [
      [
        "IN-001",
        "Almoxarife Demo",
        "Contagem de conexões",
        "Almoxarifado central",
        65,
        "Aberto"
      ]
    ]
  ],
  "suppliers": [
    "Fornecedores",
    "Cadastros",
    "users",
    "Fornecedor",
    "Razão social",
    "E-mail",
    "Localidade",
    "none",
    [
      "Ativo",
      "Inativo"
    ],
    [
      [
        "FO-001",
        "Distribuidora Alfa",
        "comercial@alfa.example",
        "Joinville / SC",
        0,
        "Ativo"
      ],
      [
        "FO-002",
        "Comercial Sul",
        "contato@sul.example",
        "Itajaí / SC",
        0,
        "Ativo"
      ]
    ]
  ],
  "professionals": [
    "Profissionais",
    "Cadastros",
    "users",
    "Profissional",
    "Nome",
    "E-mail",
    "Função",
    "none",
    [
      "Ativo",
      "Inativo"
    ],
    [
      [
        "PR-001",
        "Ana Demo",
        "ana@exemplo.test",
        "Engenharia",
        0,
        "Ativo"
      ],
      [
        "PR-002",
        "Bruno Demo",
        "bruno@exemplo.test",
        "Suprimentos",
        0,
        "Ativo"
      ]
    ]
  ],
  "contracts": [
    "Contratos",
    "Cadastros",
    "file",
    "Contrato",
    "Contratante",
    "Objeto",
    "Centro de custo",
    "money",
    [
      "Ativo",
      "Em revisão",
      "Encerrado"
    ],
    [
      [
        "CO-001",
        "Cliente Modelo",
        "Execução de infraestrutura",
        "Obra Litoral",
        425000,
        "Ativo"
      ]
    ]
  ],
  "cost-centers": [
    "Centros de custo",
    "Cadastros",
    "budget",
    "Centro de custo",
    "Nome",
    "Código / descrição",
    "Empresa",
    "none",
    [
      "Ativo",
      "Inativo"
    ],
    [
      [
        "CC-001",
        "Obra Litoral",
        "Centro operacional",
        "Empresa Modelo",
        0,
        "Ativo"
      ],
      [
        "CC-002",
        "Administrativo",
        "Despesas administrativas",
        "Empresa Modelo",
        0,
        "Ativo"
      ]
    ]
  ],
  "plans": [
    "Plano de contas",
    "Cadastros",
    "budget",
    "Conta",
    "Nome da conta",
    "Classificação",
    "Grupo",
    "none",
    [
      "Ativo",
      "Inativo"
    ],
    [
      [
        "PC-001",
        "Receitas operacionais",
        "1.01",
        "Receitas",
        0,
        "Ativo"
      ],
      [
        "PC-002",
        "Materiais",
        "2.01",
        "Despesas",
        0,
        "Ativo"
      ]
    ]
  ],
  "categories": [
    "Categorias",
    "Cadastros",
    "budget",
    "Categoria",
    "Nome",
    "Descrição",
    "Grupo",
    "none",
    [
      "Ativo",
      "Inativo"
    ],
    [
      [
        "CA-001",
        "Materiais",
        "Compras de materiais",
        "Operacional",
        0,
        "Ativo"
      ]
    ]
  ],
  "lookups": [
    "Tipologias e listas",
    "Cadastros",
    "settings",
    "Item de lista",
    "Nome",
    "Descrição",
    "Lista",
    "none",
    [
      "Ativo",
      "Inativo"
    ],
    [
      [
        "LT-001",
        "Serviços",
        "Natureza operacional",
        "Tipo de compra",
        0,
        "Ativo"
      ]
    ]
  ],
  "task-center": [
    "Central de Tarefas",
    "Tarefas",
    "task",
    "Tarefa",
    "Tarefa",
    "Descrição",
    "Responsável",
    "none",
    [
      "Pendente",
      "Em andamento",
      "Concluído"
    ],
    [
      [
        "TA-001",
        "Conferir pagamentos",
        "Revisar vencimentos",
        "Financeiro",
        0,
        "Pendente"
      ],
      [
        "TA-002",
        "Analisar cotação",
        "Materiais de rede",
        "Compras",
        0,
        "Em andamento"
      ],
      [
        "TA-003",
        "Atualizar catálogo",
        "Itens novos",
        "Estoque",
        0,
        "Concluído"
      ]
    ]
  ],
  "document-center": [
    "Documentos",
    "Documentos",
    "file",
    "Documento",
    "Nome",
    "Tipo / referência",
    "Responsável",
    "none",
    [
      "Pendente",
      "Aprovado",
      "Arquivado"
    ],
    [
      [
        "DOC-001",
        "Contrato de serviços",
        "PDF · demonstração",
        "Engenharia",
        0,
        "Aprovado"
      ],
      [
        "DOC-002",
        "Política de compras",
        "PDF · demonstração",
        "Suprimentos",
        0,
        "Pendente"
      ]
    ]
  ],
  "users": [
    "Usuários e permissões",
    "Configurações",
    "users",
    "Usuário",
    "Nome",
    "E-mail",
    "Perfil",
    "none",
    [
      "Ativo",
      "Inativo"
    ],
    [
      [
        "US-001",
        "Alex Demo",
        "alex@exemplo.test",
        "Administrador",
        0,
        "Ativo"
      ],
      [
        "US-002",
        "Ana Demo",
        "ana@exemplo.test",
        "Gestor",
        0,
        "Ativo"
      ]
    ]
  ],
  "companies": [
    "Empresas e ambientes",
    "Configurações",
    "settings",
    "Empresa",
    "Nome",
    "Descrição",
    "Ambiente",
    "none",
    [
      "Ativo",
      "Inativo"
    ],
    [
      [
        "EM-001",
        "Empresa Modelo",
        "Matriz",
        "Demonstração",
        0,
        "Ativo"
      ],
      [
        "EM-002",
        "Empresa operacional",
        "Filial",
        "Demonstração",
        0,
        "Ativo"
      ]
    ]
  ],
  "help-trails": [
    "Cursos",
    "Aprendizado",
    "help",
    "Curso",
    "Curso",
    "Conteúdo",
    "Categoria",
    "none",
    [
      "Disponível",
      "Concluído"
    ],
    [
      [
        "CU-001",
        "Primeiros passos no MOVA",
        "Navegação e ambiente",
        "Introdução",
        0,
        "Disponível"
      ],
      [
        "CU-002",
        "Financeiro na prática",
        "Contas e conciliação",
        "Financeiro",
        0,
        "Disponível"
      ]
    ]
  ],
  "help-paths": [
    "Trilhas",
    "Aprendizado",
    "help",
    "Trilha",
    "Trilha",
    "Etapas",
    "Público",
    "none",
    [
      "Disponível",
      "Em andamento",
      "Concluído"
    ],
    [
      [
        "TR-001",
        "Gestor financeiro",
        "3 cursos",
        "Gestores",
        0,
        "Em andamento"
      ]
    ]
  ],
  "help-authoring": [
    "Gestão de cursos",
    "Aprendizado",
    "help",
    "Curso",
    "Título",
    "Descrição",
    "Autor",
    "none",
    [
      "Rascunho",
      "Publicado"
    ],
    [
      [
        "GC-001",
        "Integração de novos usuários",
        "Aula introdutória",
        "Equipe Demo",
        0,
        "Rascunho"
      ]
    ]
  ],
  "help-tours": [
    "Tours guiados",
    "Aprendizado",
    "help",
    "Tour",
    "Título",
    "Etapas",
    "Módulo",
    "none",
    [
      "Disponível",
      "Concluído"
    ],
    [
      [
        "TG-001",
        "Conheça o painel",
        "Indicadores e atalhos",
        "Painel",
        0,
        "Disponível"
      ]
    ]
  ],
  "help-demos": [
    "Demonstrações práticas",
    "Aprendizado",
    "help",
    "Demonstração",
    "Título",
    "Objetivo",
    "Módulo",
    "none",
    [
      "Disponível",
      "Concluído"
    ],
    [
      [
        "DP-001",
        "Registrar pagamento",
        "Simulação sem movimentar valores",
        "Financeiro",
        0,
        "Disponível"
      ]
    ]
  ],
  "help-support": [
    "Central de Suporte",
    "Suporte",
    "help",
    "Chamado",
    "Assunto",
    "Descrição",
    "Categoria",
    "none",
    [
      "Aberto",
      "Em andamento",
      "Resolvido"
    ],
    [
      [
        "CH-001",
        "Dúvida sobre cadastro",
        "Como alterar centro de custo?",
        "Operação",
        0,
        "Aberto"
      ]
    ]
  ],
  "settings-access": [
    "Perfis e acessos",
    "Configurações",
    "users",
    "Perfil",
    "Perfil",
    "Descrição",
    "Escopo",
    "none",
    [
      "Ativo",
      "Inativo"
    ],
    [
      [
        "PF-001",
        "Administrador",
        "Acesso demonstrativo integral",
        "Empresa",
        0,
        "Ativo"
      ],
      [
        "PF-002",
        "Gestor",
        "Operação e aprovação",
        "Obra",
        0,
        "Ativo"
      ]
    ]
  ],
  "audit": [
    "Auditoria",
    "Configurações",
    "task",
    "Evento",
    "Autor",
    "Evento",
    "Módulo",
    "none",
    [
      "Registrado"
    ],
    [
      [
        "AU-001",
        "Alex Demo",
        "Acesso ao ambiente demonstrativo",
        "Sessão",
        0,
        "Registrado"
      ]
    ]
  ],
  "finance-entries": [
    "Lançamentos",
    "Financeiro",
    "wallet",
    "Lançamento",
    "Parte",
    "Histórico",
    "Centro de custo",
    "money",
    [
      "Pendente",
      "Pago",
      "Recebido"
    ],
    [
      [
        "LA-001",
        "Distribuidora Alfa",
        "Materiais",
        "Obra Litoral",
        18750,
        "Pendente"
      ]
    ]
  ],
  "warehouse-reservations": [
    "Solicitações e reservas",
    "Estoque",
    "box",
    "Reserva",
    "Material",
    "Solicitante",
    "Local",
    "qty",
    [
      "Pendente",
      "Reservado",
      "Entregue"
    ],
    [
      [
        "RE-001",
        "Tubo PEAD DE160",
        "Equipe de campo",
        "Obra Litoral",
        120,
        "Reservado"
      ]
    ]
  ],
  "warehouse-items": [
    "Cadastro de itens",
    "Estoque",
    "box",
    "Item",
    "Material",
    "Especificação",
    "Categoria",
    "none",
    [
      "Ativo",
      "Inativo"
    ],
    [
      [
        "IT-001",
        "Tubo PEAD DE160",
        "PE100 · m",
        "Tubulações",
        0,
        "Ativo"
      ]
    ]
  ],
  "warehouse-custody": [
    "Responsabilidades",
    "Estoque",
    "users",
    "Termo",
    "Responsável",
    "Equipamento",
    "Local",
    "none",
    [
      "Ativo",
      "Devolvido"
    ],
    [
      [
        "RS-001",
        "Equipe de campo",
        "Equipamento Demo",
        "Obra Litoral",
        0,
        "Ativo"
      ]
    ]
  ],
  "warehouse-epi": [
    "EPI",
    "Estoque",
    "box",
    "Entrega de EPI",
    "Profissional",
    "Equipamento",
    "Obra",
    "qty",
    [
      "Pendente",
      "Entregue"
    ],
    [
      [
        "EP-001",
        "Ana Demo",
        "Luva nitrílica",
        "Obra Litoral",
        2,
        "Entregue"
      ]
    ]
  ],
  "warehouse-forms": [
    "Fichas e documentos",
    "Estoque",
    "file",
    "Ficha",
    "Documento",
    "Tipo",
    "Responsável",
    "none",
    [
      "Pendente",
      "Emitido"
    ],
    [
      [
        "FI-001",
        "Ficha de entrega",
        "EPI",
        "Almoxarifado",
        0,
        "Emitido"
      ]
    ]
  ],
  "warehouse-settings": [
    "Configurações de estoque",
    "Estoque",
    "settings",
    "Local",
    "Nome",
    "Descrição",
    "Empresa",
    "none",
    [
      "Ativo",
      "Inativo"
    ],
    [
      [
        "AL-001",
        "Almoxarifado central",
        "Local principal",
        "Empresa Modelo",
        0,
        "Ativo"
      ]
    ]
  ],
  "settings-approvals": [
    "Aprovações",
    "Configurações",
    "task",
    "Regra",
    "Nome da regra",
    "Abrangência",
    "Módulo",
    "money",
    [
      "Ativo",
      "Inativo"
    ],
    [
      [
        "AP-001",
        "Compras até 25 mil",
        "Todos os centros",
        "Compras",
        25000,
        "Ativo"
      ]
    ]
  ],
  "settings-workflows": [
    "Workflows",
    "Configurações",
    "task",
    "Fluxo",
    "Nome do fluxo",
    "Objeto",
    "Módulo",
    "none",
    [
      "Ativo",
      "Rascunho"
    ],
    [
      [
        "WF-001",
        "Fluxo de compras",
        "Solicitação, cotação, ordem",
        "Compras",
        0,
        "Ativo"
      ]
    ]
  ],
  "settings-automations": [
    "Automações",
    "Configurações",
    "settings",
    "Automação",
    "Nome",
    "Gatilho",
    "Módulo",
    "none",
    [
      "Ativo",
      "Inativo"
    ],
    [
      [
        "AT-001",
        "Aviso de vencimento",
        "3 dias antes",
        "Financeiro",
        0,
        "Ativo"
      ]
    ]
  ],
  "settings-migration": [
    "Saneamento de dados",
    "Configurações",
    "file",
    "Revisão",
    "Nome da revisão",
    "Descrição",
    "Módulo",
    "none",
    [
      "Pendente",
      "Concluído"
    ],
    [
      [
        "MI-001",
        "Revisar duplicidades",
        "Verificação demonstrativa",
        "Cadastros",
        0,
        "Pendente"
      ]
    ]
  ]
};
