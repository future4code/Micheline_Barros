### Exercício 1

a) Resposta: Irá pagar a coluna salary da tabela Actor;

b) Resposta: Altera o nome da coluna gender para sex do tipo VARCHAR(6) com no máximo 6 caracteres;

c) Resposta: Não altera nada, pois a configuração da coluna gender é a mesma;

d) Resposta: 
```
alter table Actor change gender gender varchar(100);
```

### Exercício 2

a) Resposta: 
```
update Actor set name= "Tom Holland", birth_date = "1996-06-01" where id = "003";
```

b) Resposta:
```
update Actor set name = "Juliana Paes" where name = "JULIANA PAES";
```

c) Resposta:
```
update Actor set
name = "Jenna von",
salary = 500000,
birth_date = "1977-04-02",
gender = "female"
where id = "005";
```

d) Resposta: Não deu mensagem de erro, pois o comando está correto, porém como não existe esse campo na tabela, então 0 linha foi afetada ou alterada. 

* ERRO: 21:03:35	update Actor set name = "Do Kyung-soo" where id = "007"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.187 sec.*


### Exercício 3

a) Resposta: 
```
delete from Actor WHERE name = "Fernanda Montenegro";
```

b) Resposta:
```
delete from Actor where gender = "male" and salary > 1000000;
```


### Exercício 4

a) Resposta: 
```
SELECT MAX(salary) FROM Actor;
```

b) Resposta:
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c) Resposta:
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d) Resposta: 
```
select SUM(salary) from Actor;
```

