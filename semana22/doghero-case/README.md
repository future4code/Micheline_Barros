# Case Back end - DogHero

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
- Endpoint getWalkTutor.

**O que funciona:**
- Endpoint signup para criar usuários;
- Endpoint walkCreate para criar passeios;
- Endpoint index recebe um filtro e retorna todos os passeios da data atual em diante ordenado pelo horário com paginação implementada;
- Endpoint showWalkId que retorna duração do passeio, ou seja, a diferença entre o início e o término e o preço do passeio;
- Endpoint getWalkTutor retorna os dados do tutor e do passeio.

