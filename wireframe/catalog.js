/* Catálogo central R02: dados fictícios, não integrações reais. */
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
  ]
};
