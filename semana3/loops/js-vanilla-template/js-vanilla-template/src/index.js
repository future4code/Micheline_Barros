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