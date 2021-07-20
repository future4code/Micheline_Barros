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

 *ERRO: 16:31:57 inserir valores de Ator (id, nome, salário, data de nascimento, gênero) ("002", "Teste Pires", 1200000, "1963-08-23", "masculino") Código de erro: 1062 . Duplique a entrada '002' para a chave 'PRIMARY' 0,187 seg.*

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
**Correção:**
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

c) Resposta: Foram declaradas menos colunas do que valores. Os valores das colunas data e gênero não foram declarados. E já existe uma linha com **id 003**, por modifiquei par **004**.
```
INSERT INTO Actor (id, name, salary)
VALUES(
 "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
*ERRO: 18: 37: 15 INSERIR NO Ator (id, nome, salário) VALORES ("003", "Fernanda Montenegro", 300000, "1929-10-19", "feminino") Código de erro: 1136. Contagem de colunas não não corresponde à contagem do valor na linha 1 0,188 s*

**Correção:**
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d) Resposta: Não foi passado o valor para o nome.
```
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```
*ERRO: 18:47:40 INSERT INTO Ator (id, salário, data de nascimento, gênero) VALORES ("004", 400000, "1949-04-18", "masculino") Código de erro: 1364. O campo 'nome' não tem um valor padrão 0,187 s*

**Correção:**
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005",
  "José",
  400000,
  "1949-04-18", 
  "male"
);
```
d) Resposta: O valor da data de nascimento deve ser declarado como string.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```

**Correção:**
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

f) Resposta:
1.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Amber Marshall",
  719333.33,
  "1988-06-02", 
  "female"
);
```
2.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "008", 
  "Maitreyi Ramakrishnan",
  79333.33,
  "2001-12-28", 
  "female"
);
```

### Exercício 3
a) Resposta: 
```
select * from Actor where gender = "female"
```
b) Resposta:
```
select salary from Actor where name = "Tony Ramos";
```

c) Resposta: Essa query devolveu como resultado linhas vazias, null.
```
select * from Actor where gender = "invalid";
```

d) Resposta:
```
select id, name, salary from Actor where salary <= "500000";
```

e) Resposta: Esse erro ocorre, pois ele não reconhece o nome da coluna "nome", já que ela é identicada por "name"
*ERRO: 22:02:51 SELECT id, nome do ator WHERE id = "002" LIMIT 0, 1000 Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos' 0,187 s*

**Correção**
```
SELECT id, name from Actor WHERE id = "002";
```

### Exercício 4
a) Resposta: Essa query pesquisa entre todos os atores aqueles que omeçam com a letra A ou J e com salário acima de 300.000.

b) Resposta:
```
select * from Actor where (name not like "A%") and salary > 350000;
```

c) Resposta:
```
select * from Actor where (name like "%G%" or name like "%g%");
```

d) Resposta:
```
select * from Actor where (name like "%a%" or name like "%A%" and name like "%g%" or name like "%G%") and (salary > 350000 and salary < 900000); 
```

