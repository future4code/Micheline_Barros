# Case Back end - wirecardBrasil-case

Documentação: https://documenter.getpostman.com/view/14555245/UUy1emm8

**Sobre**
Essa API simula uma aplicação de pagamentos.

**Recursos utilizados**
- Nodejs;
- MySQL;
- express;
- typescript;
- uuid;
- knex;


**O que contém:**
- Endpoint createClient;
- Endpoint getClient;
- Endpoint createPurchase;
- Endpoint getPurchaseById;
- Endpoint getPurchaseType.

**O quue não foi implementado:
- Verificação de cartão válido.

**O que funciona:**
- Endpoint createClient: cria um cliente no banco de dados;
- Endpoint getClient: pega todos os cliente num limite de 10 por página;
- Endpoint createPurchase: cria um pagamento;
- Endpoint getPurchaseById: retorna um pagamento pelo id;
- Endpoint getPurchaseType: retorna um pagamento pelo tipo.

