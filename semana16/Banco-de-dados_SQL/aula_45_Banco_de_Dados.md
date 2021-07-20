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

### Exercício 5

a) Resposta: Essa query cria uma tabela Movie que terá como nome de colunas o id que é do tipo string com até 255 caracteres, title string com até 255 caracteres, synopsis do tipo texto, esse tipo não possue limite definido, release-Date tipo data e rating tipo inteiro. Todos os campos são de preenchimento obrigatório.

```
CREATE TABLE Movie(
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL,
release_Date DATE NOT NULL,
rating INT NOT NULL
);
```

b) Resposta:
```
INSERT INTO Movie(id, title, synopsis, release_Date, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há anos e enfrentam a rotina do casamento. um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);
```

c) Resposta:
```
INSERT INTO Movie(id, title, synopsis, release_Date, rating)
VALUES(
"002",
"Doce de Mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);
```

d) Resposta:
```
INSERT INTO Movie(id, title, synopsis, release_Date, rating)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);
```

e) Resposta:
```
INSERT INTO Movie(id, title, synopsis, release_Date, rating)
VALUES(
"004",
"O Auto da Compadecida",
"O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.",
"2000-09-10",
10
);
```

### Exercício 6

a) Resposta:
```
select id, title, rating from Movie where id = "004";
```

b) Resposta:
```
select * from Movie where title = "O Auto da Compadecida";
```

c) Resposta: 
```
SELECT id, title, synopsis FROM Movie WHERE rating >= 7;
```

### Exercício 7

a) Resposta:
```
SELECT * FROM Movie WHERE (title LIKE "%Vida%");
```

b) Resposta:
```
SELECT * FROM Movie WHERE (title LIKE "%uma%" OR synopsis LIKE "%uma%");
```

c) Resposta:
```
SELECT * FROM Movie WHERE release_Date < "2021-07-20";
```

d) Resposta:
```
SELECT * FROM Movie WHERE (release_Date < "2017-07-20") AND (title LIKE "%anos%" OR synopsis LIKE "%anos%") AND rating > 7;
```
