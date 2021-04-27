//Exercício 1

//a. Os 10 e 50;

//b. Nada seria impresso no console.

//Exercício 2

//a. Apenas os nomes Darvas e Caio, pois os valores de i são: 0 e 1, que são os índices do promeiro e segundo nome;

//b. Amanda e Caio um abaixo do outro.


//Exercício 3
//a função testa se quais elementos da array são pares e manda pra arrayFinal. Sugiro o nome: arrayNumerosPares.

//Escrita de código
//Exercício 4
//a.
function meusDados(){
    console.log("Olá, meu nome é Micheline, tenho 35 anos, sou de Fortaleza e estudo desenvolvimento Web na Labenu");
}
meusDados();

//b.

function dadosPessoais (nome, idade, endereco, souNaoSou) {
 
    if (souNaoSou === true) {
        souNaoSou = "sou";
    } else {
        souNaoSou = "não sou";
    }
    console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos, sou de ${endereco} e ${souNaoSou} estudante da Labenu.`)

}
dadosPessoais ("Micheline", 35, "Fortaleza", true);


// Exercício 5

//a.

function somaDoisNumeros (numero1, numero2) {
    const soma = numero1 + numero2;
    return soma;
}
console.log(somaDoisNumeros(5, 10));

//b.

function maiorMenor (numero1, numero2) {

    resultado = numero1 >= numero2;
    return resultado;
}

maiorMenor(10, 40)
console.log("O número 1 é maior que o número 2?", resultado);

//c.

function mensagem (texto) {
    for (let contador = 1; contador <= 10; contador++) {
        console.log (texto);
    }
}

mensagem ("Deu certo!");