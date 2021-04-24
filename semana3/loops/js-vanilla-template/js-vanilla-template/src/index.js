//Exercício 1
//O código está contando de 0 a 4, somando os números e armazenando a soma na let valor. No final ele imprime o total da soma

//Exercício 2
//a. todos os números maiores que 18.
//b. Pelo que entendi da aula não. Para acessar cada índice é necessário usar while ou for.

//Exercício 3
// a. O arrays abaixo são só a título de exemplo
const arrayOriginal = [0,1,2,3,4,5,6,7,8,9];
for (let i = 0; i < arrayOriginal.length; i++){
    console.log(arrayOriginal[i])
}

//b.
const arrayOriginal = [0,1,2,3,4,5,6,7,8,9];
for (let i = 0; i < arrayOriginal.length; i++){
    console.log(arrayOriginal[i]/10)
}

//c.
const arrayOriginal = [0,1,2,3,4,5,6,7,8,9];
const arrayPares = [];
for (let i = 0; i < arrayOriginal.length; i++){
    if(arrayOriginal[i]%2==0){
        arrayPares.push(arrayOriginal[i])
    }
    
}
console.log(arrayPares)

//d
const arrayOriginal = [0,1,2,3,4,5,6,7,8,9];
for (let i = 0; i < arrayOriginal.length; i++){
    let mensagem = `O elemento do índex ${i} é: ${arrayOriginal[i]}`;
    console.log(mensagem);
}

//e
const arrayOriginal = [1,2,3,4,5,45,6,7,8,9];
let arrayMaior=0;
let arrayMenor=arrayOriginal.length;
for (let i = 0; i < arrayOriginal.length; i++){
    
    if(arrayMaior<arrayOriginal[i]){
    arrayMaior=arrayOriginal[i];
    }  
    if (arrayMenor>arrayOriginal[i]){
        arrayMenor=arrayOriginal[i];
        }

}
let mensagem = `O maior número é ${arrayMaior} e o menor é ${arrayMenor}`;
    console.log(mensagem);


//Desafio 1

const numeroPensado = Number(prompt("Digite um número."));
console.log("Que comecem os jogos!");
let chuteNumero = Number(prompt("Chute um número."));
let contador = 0;
while(chuteNumero!==numeroPensado){
    
    if(chuteNumero>numeroPensado){
        console.log("O número chutado foi: ",chuteNumero);
        console.log("Errrrrrrrou, o número pensado é menor");           
    } else if(chuteNumero<numeroPensado){
        console.log("O número chutado foi: ",chuteNumero);
        console.log("Errrrrrrrou, o número pensado é maior");
    } 
    chuteNumero = Number(prompt("Digite outro número."))
    ++contador;
}

console.log("O número pensado foi:",numeroPensado);
console.log("Acertou!!");
console.log("O número tentativas foi:",contador);

//Desafio 2



let numeroPensado = Math.round((Math.random() * 100));
console.log(numeroPensado)
console.log("Que comecem os jogos!");
let chuteNumero=Number(prompt("Chute um número."));
let contador = 1;
while(chuteNumero!==numeroPensado){
    

    if(chuteNumero>numeroPensado){
        console.log("O número chutado foi: ",chuteNumero);
        console.log("Errrrrrrrou, o número pensado é menor");           
    } else if(chuteNumero<numeroPensado){
        console.log("O número chutado foi: ",chuteNumero);
        console.log("Errrrrrrrou, o número pensado é maior");
    } 
    chuteNumero=Number(prompt("Chute um número."));
   contador++;
}

console.log("O número pensado foi:",numeroPensado);
console.log("Acertou!!");
console.log("O número tentativas foi:",contador);

//Eu fiz o curso de lógica com js do Alura e tem um exercício desse. Para gerar o número aleatório é usado o Math.round((Math.random() * 100). O Math.round() arredonda e o Math.random() * 100 gera números aleatórios de 1 a 100