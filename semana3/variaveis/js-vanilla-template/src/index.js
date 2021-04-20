// interpretação de código

// Resposta exercício 1: 
// console.log(b): será impresso o valor 10
// console.log(a,b): será impresso os valores 10, 5; já que o valor de b foi alterado para 5.


// Resposta exercício 2:
// console.log(a,b,c): será impresso os valores 10, 10, 10.


// Escrita de Código

// Exercício 1
// a)
let nome;

//b)
let idade;

//c)
console.log(typeof nome);
console.log(typeof idade);
// undefined: pois não atribuí nem um valor a elas.

//d)
nome= prompt("Qual o seu nome?");
idade= prompt("Qual a sua idade?");

console.log(typeof nome);
console.log(typeof idade);
//e)string: sempre que usamos o prompt ele retorna uma string.

//f)
console.log("Olá",nome, ",você tem ",idade,"anos.");

Exercício 2

const nomeDeDeus= prompt("Segundo a Bíblia, no texto de Isaías 42:8, qual é o nome de Deus?(fonte:www.bible.com/pt e www.jw.org/pt)");
console.log("1. Segundo a Bíblia, no texto de Isaías 42:8, qual é o nome de Deus?(fonte:www.bible.com/pt e www.jw.org/pt");
console.log("Resposta:", nomeDeDeus);

const revistasMaisTraduzidas= prompt("Quais as duas revistas com maior circulação no mundo todo?(fonte:joga no google)");
console.log("2. Quais as duas revistas com maior circulação no mundo todo?  (fonte:google)");
console.log("Resposta:", revistasMaisTraduzidas);

const deusVeGuerras= prompt("Como Deus encara a guerra? (fonte: www.jw.org/pt)");
console.log("3. Como Deus encara a guerra? (fonte:www.jw.org/pt)");
console.log("Resposta:", deusVeGuerras);

const porqueMorremos= prompt("Por que as pessoas morrem? (fonte: www.jw.org/pt)");
console.log("4. Por que as pessoas morrem? (fonte:jwww.jw.org/pt)");
console.log("Resposta:", porqueMorremos);

const doencasAcabar= prompt("As doenças vão acabar algum dia? (fonte: www.jw.org/pt)");
console.log("5. As doenças vão acabar algum dia? (fonte: www.jw.org/pt)");
console.log("Resposta:", doencasAcabar);

//Exercício 3
//a
const comidasPreferidas=["Sushi", "Açaí", "Bolo Mole", "X-Bacon", "Salada"];
console.log(comidasPreferidas);

//b
console.log("Essas são minhas comidas preferidas: ");
console.log(comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
console.log(comidasPreferidas[4]);

//c
const comidaUsuário = prompt("Qual sua comida proferida?");
comidasPreferidas[1]= comidaUsuário;
console.log(comidasPreferidas);

//Exercício 4

const tresPerguntas = ['"Você gosta de Calor?"', '"Você gosta de praia?"', '"Você tem plantas?"'];

//a
const respostasTresPergutas = [true, false, true];

//b
console.log(tresPerguntas[2], respostasTresPergutas[2])
console.log(tresPerguntas[1], respostasTresPergutas[0])
console.log(tresPerguntas[0], respostasTresPergutas[1])


console.log("4. ",(9*5)+3);
const array = [103,109,304,893,758,920,391,458,905]
console.log("1. ", true && !true);
