//Interpretação de código
// 1.

//a. false

//b. false

//c. true

//e. boolean

//2.

/*
a. undefined

b. null

c. 11

d. 3

e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

f. 9
*/

//Escrita de código
// Exercício 1
// a.
let idadeUsuario= Number(prompt("Qual a sua idade?"));

//b.
let idadeAmigo= Number(prompt("Qual a idade do seu melhor amigo?"));

//c 

let maiorMenor = idadeUsuario > idadeAmigo;
console.log("Sua idade é maior do que a do seu amigo?", maiorMenor);


//d
let diferencaIdade =idadeUsuario - idadeAmigo;
const mensagem= `A diferença de idade entre vocês é de ${diferencaIdade} anos`;
console.log(mensagem)


//Exercício 2
//a. 
let numeroPar= Number(prompt("Digite um número par."));

//b.
let restoDivisao = numeroPar%2;
console.log("O resto da divisão é ",restoDivisao);

//c. O resto da divisão é sempre 0.

//d. O resto da divisão será 1.


// Exercício 3

// a.
const listaDeTarefas=[];

//b.
const primeiraTarefa = prompt("Qual a primeira tarefa que você precisa realizar hoje?");
listaDeTarefas.push(primeiraTarefa);

const segundaTarefa = prompt("Qual a segunda tarefa que você precisa realizar hoje?");
listaDeTarefas.push(segundaTarefa);

const terceiraTarefa = prompt("Qual a terceira tarefa que você precisa realizar hoje?");
listaDeTarefas.push(terceiraTarefa);

//c.
console.log(listaDeTarefas);

//d.
const indiceTarefa = prompt("Qual tarefa você já realizou? A de índice 0, 1 ou 2?");

//e.
listaDeTarefas.splice(indiceTarefa,1);

//f.
console.log(listaDeTarefas);

// Exercício 4

const nomeDoUsuario = prompt("Digite seu nome.");
const emailDoUsuario = prompt("Digite seu email.");

const mensagem= `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vido(a), ${nomeDoUsuario}!`;

console.log(mensagem);

