### Exercício 1
```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```
a) Resposta: 
1.VARCHAR(255): string com no máximo 255 caracteres;
2.DATE: representa uma data

SHOW DATABASES;

SHOW TABLES;

b) Resposta:
1.O comando SHOW DATABASES mosta uma tabela com os bancos de dados;
2.O comando SHOW TABLES mostra as tabelas dentro do banco de dados atual.

DESCRIBE Actor;

c) Resposta: é possível configurar os dados da tabela Actor. O tipo das entradas das colunas, 
é possível configurar se os dados são obrigatórios ou não, chave primária, valor único.

### Exercício 2 
```
insert into Actor (id, name, salary, birth_date, gender)
values(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);
```
a) Resposta:
```
insert into Actor (id, name, salary, birth_date, gender)
values(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);
```
b) Resposta: esse erro ocorre porque o id tem que ser único, PRIMARY KEY.
 Error: 16:31:57	insert into Actor (id, name, salary, birth_date, gender) values( "002", "Teste Pires", 1200000, "1963-08-23", "male" )	Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0.187 sec

```
insert into Actor (id, name, salary, birth_date, gender)
values(
"002",
"Teste Pires",
1200000,
"1963-08-23",
"female"
);
```
Correção:
```
insert into Actor (id, name, salary, birth_date, gender)
values(
"003",
"Teste Pires",
1200000,
"1963-08-23",
"female"
);
```