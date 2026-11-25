/* R06 — Contratos de domínio do wireframe. Dados exclusivamente locais. */
const DomainR06=Object.freeze({
  formSections:{
    'finance-payments':[
      ['Identificação e classificação',[['Documento / referência','document','text'],['Competência','competence','month'],['Emissão','issuedAt','date'],['Conta do plano','planAccount','lookup:plan'],['Categoria gerencial','category','lookup:category'],['Origem','originType',['Manual','Ordem de serviço','Contrato','Ordem de compra','Nota fiscal','Outro']],['Referência de origem','originRef','text']]],
      ['Datas e parcelamento',[['Parcelas','installments','number']]],
      ['Documentos',[['Boleto / cobrança','billingFile','file'],['Nota fiscal','invoiceFile','file'],['Outro anexo','attachmentFile','file']]]
    ],
    'finance-receipts':[
      ['Identificação e classificação',[['Documento / referência','document','text'],['Competência','competence','month'],['Emissão','issuedAt','date'],['Conta do plano','planAccount','lookup:plan'],['Categoria gerencial','category','lookup:category'],['Origem','originType',['Manual','Ordem de serviço','Contrato','Ordem de compra','Nota fiscal','Outro']],['Referência de origem','originRef','text']]],
      ['Datas e parcelamento',[['Parcelas','installments','number']]],
      ['Documentos',[['Cobrança','billingFile','file'],['Nota fiscal','invoiceFile','file'],['Outro anexo','attachmentFile','file']]]
    ],
    'purchase-requests':[
      ['Planejamento',[['Prioridade','priority',['Baixa','Normal','Alta','Urgente']],['Necessidade','neededAt','date']]],
      ['Entrega',[['Responsável no recebimento','deliveryContact','text'],['Local de entrega','deliveryAddress','textarea'],['Orientações de entrega','deliveryNotes','textarea']]]
    ],
    'purchase-orders':[['Condições da ordem',[['Condição de pagamento','terms','text'],['Entrega prevista','delivery','date'],['Frete','shipping',['CIF','FOB','A definir']]]]],
    'purchase-quotes':[['Rodada de cotação',[['Solicitação','requestRef','lookup:request'],['Prazo para resposta','deadline','date'],['Fornecedor 1','supplier1','lookup:supplier'],['Fornecedor 2','supplier2','lookup:supplier'],['Fornecedor 3','supplier3','lookup:supplier']]]],
    'purchase-invoices':[['Identificação fiscal',[['Documento fiscal','taxKey','text'],['Emissão','issuedAt','date'],['Ordem de compra','orderRef','lookup:order'],['Parcelas','installments','number'],['Arquivo do documento','invoiceFile','file']]]],
    'clients':[['Identificação',[['CPF / CNPJ','taxId','text'],['Nome fantasia','tradeName','text']]],['Contato e endereço',[['Telefone','phone','tel'],['CEP','zip','text'],['Logradouro','address','text'],['Número','addressNo','text'],['UF','state','text']]]],
    'suppliers':[['Identificação',[['CPF / CNPJ','taxId','text'],['Nome fantasia','tradeName','text']]],['Contato e comercial',[['Telefone','phone','tel'],['CEP','zip','text'],['Logradouro','address','text'],['Número','addressNo','text'],['UF','state','text'],['Condição comercial','terms','text']]]],
    'professionals':[['Vínculo',[['CPF / documento','taxId','text'],['Tipo de vínculo','employment',['Colaborador','Terceiro','Prestador','Sócio']],['Centro de custo principal','mainCenter','lookup:center']]],['Contato e endereço',[['Telefone','phone','tel'],['CEP','zip','text'],['Logradouro','address','text'],['UF','state','text']]],['Custo gerencial',[['Remuneração base','salary','number'],['Benefícios mensais','benefits','number'],['Encargos (%)','charges','number']]]],
    'contracts':[['Vigência',[['Número contratual','contractNo','text'],['Tipo','contractType',['Cliente','Fornecedor']],['Gestor','manager','lookup:professional'],['Início','startAt','date'],['Término','endAt','date']]],['Condições',[['Condição de pagamento','terms','text'],['Dia-base de medição','measurementDay','number'],['Retenção (%)','retention','number'],['Índice de reajuste','adjustment','text'],['Garantia','guarantee','text']]]],
    'companies':[['Identificação fiscal',[['Nome fantasia','tradeName','text'],['CNPJ','taxId','text'],['Tipo','companyType',['Matriz','Filial','Empresa do grupo']],['Inscrição estadual','stateReg','text'],['Inscrição municipal','municipalReg','text']]],['Endereço e contato',[['CEP','zip','text'],['Logradouro','address','text'],['Número','addressNo','text'],['Cidade','city','text'],['UF','state','text'],['Telefone','phone','tel'],['E-mail','email','email'],['E-mail de faturamento','billingEmail','email']]]],
    'cost-centers':[['Estrutura e gestão',[['Tipo','centerType',['Obra','Administrativo','Operacional']],['Gestor','manager','lookup:professional'],['Centro superior','parentCenter','lookup:center']]],['Planejamento',[['Orçamento previsto','budgetValue','number'],['Início','startAt','date'],['Fim','endAt','date']]]],
    'warehouse-reservations':[['Reserva',[['Depósito','depot','text'],['Necessidade','neededAt','date'],['Referência','reference','text']]]],
    'warehouse-inventory':[['Escopo',[['Tipo','inventoryType',['Balanço inicial','Verificação periódica']],['Depósito','depot','text'],['Item','itemRef','lookup:stock'],['Quantidade contada','counted','number']]]],
    'task-center':[['Planejamento',[['Prioridade','priority',['Baixa','Normal','Alta','Urgente']],['Prazo','deadline','date']]],['Vínculo opcional',[['Área de origem','sourceType',['Central de Tarefas','Financeiro','Compras','Estoque','Contratos','Documentos','Suporte','Mensagens']],['Referência','sourceRef','text']]]],
    'users':[['Acesso ao ambiente',[['Status do vínculo','membership',['Ativo','Inativo']]]],['Alçadas demonstrativas',[['Limite de pagamento','payLimit','number'],['Limite de compras','purchaseLimit','number'],['Limite de OS','osLimit','number']]]]
  },
  transitions:{
    'purchase-requests':{'Pendente':[['Aprovar','Aprovado'],['Rejeitar','Rejeitado']]},
    'purchase-quotes':{'Pendente':[['Aprovar','Aprovado'],['Rejeitar','Rejeitado']]},
    'purchase-orders':{'Pendente':[['Aprovar','Aprovado'],['Rejeitar','Rejeitado']], 'Aprovado':[['Registrar confirmação','Confirmado']]},
    'purchase-invoices':{'Pendente':[['Conferir','Conferido'],['Rejeitar','Rejeitado']]},
    'task-center':{'Pendente':[['Iniciar','Em andamento']], 'Em andamento':[['Concluir','Concluído']]},
    'warehouse-reservations':{'Pendente':[['Reservar','Reservado']], 'Reservado':[['Entregar','Entregue']]},
    'warehouse-deliveries':{'Pendente':[['Registrar entrega','Entregue']]},
    'warehouse-inventory':{'Aberto':[['Concluir inventário','Concluído']]},
    'help-support':{'Aberto':[['Iniciar atendimento','Em andamento']], 'Em andamento':[['Resolver','Resolvido']]},
    'document-center':{'Pendente':[['Aprovar','Aprovado']], 'Aprovado':[['Arquivar','Arquivado']]}
  }
});
