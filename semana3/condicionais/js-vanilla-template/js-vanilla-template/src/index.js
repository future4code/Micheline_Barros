//Exercício 1
//Ele recebe um número digitado pelo usuário e testa se esse número é divisível por 2. Se o resto for zero ele é divisível, o que significa que é um número par, senão ele é ímpar. 
//A mensagem "passou no teste" é impressa para números pares.
//A mensagem é "Não passou no teste" impressa para números ímpares.

//Exercício 2
//a - Ele lê uma fruta digitada pelo usuário e devolve o preço dela no console;

//b - O preço da fruta Maçã é R$ 2.25;

//c - O preço da fruta  Pêra  é  R$  5.

//Exercício 3
//a - está sendo declarada uma const que recebe um número digitado pelo usuário e testa se ele é maior que 0;

//b - Se digitar o número 10: Esse número passou no teste.
//Se digitar o número -10: não é exibida nenhuma mensagem.
//c - Sim, que mensagem da última linha do código não foi definida. Isso acontece porque ela foi declarada dentro do escopo filho, o que faz com que ela não exista dentro do escopo pai.


// //Exercício 4
// //Apto a dirigir?

// const idadeUsuario = Number(prompt("Digite sua idade."))
// if (idadeUsuario>=18){
//   console.log ("Você pode dirigir");
// } else{
//   console.log ("Você não pode dirigir");
// }

// //Exercício 5
// // Turno em que estuda:

// const turnoDiaEstuda = prompt("Qual turno você está estudando? Digite: M (matutino), V (Vespertino) ou N (Noturno).");

// if (turnoDiaEstuda=='M'){
//   console.log ("Bom dia!");
// } else if(turnoDiaEstuda=='V'){
//   console.log ("Boa tarde!");
// } else {
//   console.log ("Boa noite!");
// }


// //Exercício 6
// // Turno em que estuda:

// const turnoDiaEstuda = prompt("Qual turno você está estudando? Digite: M (matutino), V (Vespertino) ou N (Noturno).");

// let turno;

// switch (turnoDiaEstuda){
//   case 'M':
//   console.log ("Bom dia!");
//   break;

//   case 'V':
//   console.log ("Boa tarde!");
//   break;

//   case 'N':
//   console.log ("Boa noite!");
//   break;
// }

// //Exercício 7
// //Gênero Filme e Preço

// let generoFilme = prompt("Qual o gênero do filme?");

// let precoIngresso = Number(prompt("Qual o valor do ingresso?"));

// if ((generoFilme=="fantasia")&&(precoIngresso<15)){
//   console.log("Bom filme!🤑");
// } else {
//   console.log("Escolha outro filme!🙁")
// }

// // DESAFIOS

// // Desafio 1
// let generoFilme = prompt("Qual o gênero do filme?");

// let precoIngresso = Number(prompt("Qual o valor do ingresso?"));

// let snack = prompt("Qual o snack você vai comprar?");

// if ((generoFilme=="fantasia")&&(precoIngresso<15)){
//   let mensagem = `Bom filme com ${snack}🤑!`;
//   console.log(mensagem);  
// } else {
//   console.log("Escolha outro filme!🙁")
// }

//Desafio 2
const nomeTorcedor = prompt("Informe seu nome completo.");
const tipoJogo = prompt("Qual o tipo de jogo irá assistir: IN(Internacional) ou DO(Doméstico)?");
const etapaJogo = prompt("Qual a etapa do jogo: SF(semi-final), DT(decisão de terceiro lugar) ou FI(final)?");
const categoria = prompt("Informe a categoria 1,2,3 ou 4.");
const quantidadeIngresso = Number(prompt("Informe a quantidade de ingressos."));

console.log("---Dados da Compra---",);
console.log("Nome do cliente: ", nomeTorcedor);

if(tipoJogo=='DO'){
  console.log("Tipo do jogo: Nacional");
} else {
  console.log("Tipo do jogo: Internacional");
}

if(etapaJogo=='SF'){
  console.log("Etapa do jogo: Semi-final");
} else if (etapaJogo=='DT'){
  console.log("Etapa do jogo: Terceiro Lugar");
} else{
  console.log("Etapa do jogo: Final");
}
console.log("Categoria: ", categoria);
console.log("Quantidade de ingressos: ", quantidadeIngresso, "ingressos");

console.log("---Valores---");
if(tipoJogo=='DO'){
  if(etapaJogo=='SF'){
    
    if(categoria=='1'){
      const valorIngresso =1320;
      const valorTotal= quantidadeIngresso*valorIngresso;
      console.log("Valor do ingresso: R$ ", valorIngresso);
      console.log("Valor total: R$ ", valorTotal);

    } else if (categoria=='2'){

      const valorIngresso =880;
      const valorTotal= quantidadeIngresso*valorIngresso;
      console.log("Valor do ingresso: R$ ", valorIngresso);
      console.log("Valor total: R$ ", valorTotal);

    } else if (categoria=='3'){
      const valorIngresso =550;
      const valorTotal= quantidadeIngresso*valorIngresso;
      console.log("Valor do ingresso: R$ ", valorIngresso);
      console.log("Valor total: R$ ", valorTotal);
    } else {
      const valorIngresso =220;
      const valorTotal= quantidadeIngresso*valorIngresso;
      console.log("Valor do ingresso: R$ ", valorIngresso);
      console.log("Valor total: R$ ", valorTotal);
    }

  } else if(etapaJogo=='DT'){
      if(categoria=='1'){
        const valorIngresso =660;
        const valorTotal= quantidadeIngresso*valorIngresso;
        console.log("Valor do ingresso: R$ ", valorIngresso);
        console.log("Valor total: R$ ", valorTotal);

      } else if (categoria=='2'){

        const valorIngresso =440;
        const valorTotal= quantidadeIngresso*valorIngresso;
        console.log("Valor do ingresso: R$ ", valorIngresso);
        console.log("Valor total: R$ ", valorTotal);

      } else if (categoria=='3'){
        const valorIngresso =330;
        const valorTotal= quantidadeIngresso*valorIngresso;
        console.log("Valor do ingresso: R$ ", valorIngresso);
        console.log("Valor total: R$ ", valorTotal);
      } else {
        const valorIngresso =170;
        const valorTotal= quantidadeIngresso*valorIngresso;
        console.log("Valor do ingresso: R$ ", valorIngresso);
        console.log("Valor total: R$ ", valorTotal);
      }

    } else{
      if(categoria=='1'){
        const valorIngresso =1980;
        const valorTotal= quantidadeIngresso*valorIngresso;
        console.log("Valor do ingresso: R$ ", valorIngresso);
        console.log("Valor total: R$ ", valorTotal);

      } else if (categoria=='2'){

        const valorIngresso =1320;
        const valorTotal= quantidadeIngresso*valorIngresso;
        console.log("Valor do ingresso: R$ ", valorIngresso);
        console.log("Valor total: R$ ", valorTotal);

      } else if (categoria=='3'){
        const valorIngresso =880;
        const valorTotal= quantidadeIngresso*valorIngresso;
        console.log("Valor do ingresso: R$ ", valorIngresso);
        console.log("Valor total: R$ ", valorTotal);
      } else {
        const valorIngresso =330;
        const valorTotal= quantidadeIngresso*valorIngresso;
        console.log("Valor do ingresso: R$ ", valorIngresso);
        console.log("Valor total: R$ ", valorTotal);
      }

    } 

} else{

  const valorEmDolar = 4.10;

  if(etapaJogo=='SF'){
    
    if(categoria=='1'){
      const valorIngresso =1320/valorEmDolar;
      const valorTotal= quantidadeIngresso*valorIngresso;
      console.log("Valor do ingresso: U$ ", valorIngresso);
      console.log("Valor total: U$ ", valorTotal);

    } else if (categoria=='2'){

      const valorIngresso =880/valorEmDolar;
      const valorTotal= quantidadeIngresso*valorIngresso;
      console.log("Valor do ingresso: U$ ", valorIngresso);
      console.log("Valor total: U$ ", valorTotal);

    } else if (categoria=='3'){
      const valorIngresso =550/valorEmDolar;
      const valorTotal= quantidadeIngresso*valorIngresso;
      console.log("Valor do ingresso: U$ ", valorIngresso);
      console.log("Valor total: U$ ", valorTotal);
    } else {
      const valorIngresso =220/valorEmDolar;
      const valorTotal= quantidadeIngresso*valorIngresso;
      console.log("Valor do ingresso: U$ ", valorIngresso);
      console.log("Valor total: U$ ", valorTotal);
    }

  } else if(etapaJogo=='DT'){
      if(categoria=='1'){
        const valorIngresso =660/valorEmDolar;
        const valorTotal= quantidadeIngresso*valorIngresso;
        console.log("Valor do ingresso: U$ ", valorIngresso);
        console.log("Valor total: U$ ", valorTotal);

      } else if (categoria=='2'){

        const valorIngresso =440/valorEmDolar;
        const valorTotal= quantidadeIngresso*valorIngresso;
        console.log("Valor do ingresso: U$ ", valorIngresso);
        console.log("Valor total: U$ ", valorTotal);

      } else if (categoria=='3'){
        const valorIngresso =330/valorEmDolar;
        const valorTotal= quantidadeIngresso*valorIngresso;
        console.log("Valor do ingresso: u$ ", valorIngresso);
        console.log("Valor total: U$ ", valorTotal);
      } else {
        const valorIngresso =170/valorEmDolar;
        const valorTotal= quantidadeIngresso*valorIngresso;
        console.log("Valor do ingresso: U$ ", valorIngresso);
        console.log("Valor total: U$ ", valorTotal);
      }

    } else{
      if(categoria=='1'){
        const valorIngresso =1980/valorEmDolar;
        const valorTotal= quantidadeIngresso*valorIngresso;
        console.log("Valor do ingresso: U$ ", valorIngresso);
        console.log("Valor total: U$ ", valorTotal);

      } else if (categoria=='2'){

        const valorIngresso =1320/valorEmDolar;
        const valorTotal= quantidadeIngresso*valorIngresso;
        console.log("Valor do ingresso: U$ ", valorIngresso);
        console.log("Valor total: U$ ", valorTotal);

      } else if (categoria=='3'){
        const valorIngresso =880/valorEmDolar;
        const valorTotal= quantidadeIngresso*valorIngresso;
        console.log("Valor do ingresso: U$ ", valorIngresso);
        console.log("Valor total: U$ ", valorTotal);
      } else {
        const valorIngresso =330/valorEmDolar;
        const valorTotal= quantidadeIngresso*valorIngresso;
        console.log("Valor do ingresso: U$ ", valorIngresso);
        console.log("Valor total: U$ ", valorTotal);
      }

    } 
}



