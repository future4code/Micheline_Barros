# front-table-master

![Animação](https://user-images.githubusercontent.com/79018513/140418973-9411c088-d974-467b-97f0-9cc682d0bc6e.gif)


# Sobre
Simula uma página de uma aplicação com tabela de informações dos funcionários. 
As informações são coletadas de uma API simulada escrita em json-server. Que deve estar em execução para que a requisição seja feita. O layout segue o estabelecido [clique aqui](https://www.figma.com/file/y9qJNNAckFRL7LNoyNjpv8/Teste---Be-mobile?node-id=0%3A1). 

Resolução de tela:
- height: 800px;
- width: 1024px;


# Recursos utilizados
- React;
- Axios;
- Styled Components;
- API JSON Server.


# O que contém:
- Página com dados dos funcionários;
- Input para pesquisa.


# O que funciona:
- Tabela com os dados retirados de uma API;
- Pesquisa que filtra os dados por nome do funcionário, por cargo e por ano de admissão.


# Pré-requisitos
Tenha instalado em sua máquina as seguintes ferramentas: Git, Node.js e Yarn.


# Rodando a aplicação:
- Deploy: https://front-table.surge.sh/

Para executar o projeto, siga o passo-a-passo abaixo:

1. Baixe este projeto em sua máquina e crie um repositório no github baseado nele;
2. Para executar a API entre na pasta server-api e execute os comandos abaixo

```

# Instalar as dependências
$ yarn

# Executar o json-server
$ yarn json-server --watch server.json --port 3004

```


3. Para executar a aplicação clique no link do deploy ou entre na pasta front-table-app e execute o comando abaixo

```

# Instalar as dependências
$ npm install

# Executar o React
$ npm start

```