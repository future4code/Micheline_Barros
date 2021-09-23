# Case Back end - DogHero

Documentação: https://documenter.getpostman.com/view/14555245/U16jLR3n

**Sobre**
Essa API simula uma aplicação que oferta o serviço de passeios com cachorros. Contempla uma estrutura que suporta usuários a pedir esse novo serviço para seus peludos.

**Recursos utilizados**
- Nodejs;
- MySQL;
- express;
- typescript;
- uuid;
- knex;


**O que contém:**
- Endpoint signup;
- Endpoint walkCreate;
- Endpoint index;
- Endpoint showWalkId;
- Endpoint getWalkTutor;
- Endpoint editStartOrFinish;
- Endpoint editStatus.

**O quue não foi implementado:
- Endpoint de deletar.

**O que funciona:**
- Endpoint signup para criar usuários;
- Endpoint walkCreate para criar passeios;
- Endpoint index recebe um filtro e retorna todos os passeios da data atual em diante ordenado pelo horário com paginação implementada;
- Endpoint showWalkId que retorna duração do passeio, ou seja, a diferença entre o início e o término e o preço do passeio;
- Endpoint getWalkTutor retorna os dados do tutor e do passeio.
- Endpoint editStartOrFinish edita o horário de início ou o horário final do passeio;
- Endpoint editStatus edita o status do passeio de PENDENTE para CONCLUIDO.

