/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log ("Bem vindo ao jogo de Blackjack!");

let cartasUsuario = "";
let totalPontosUsuario = 0;
let cartasComputador = "";
let totalPontosComp = 0;
if(confirm("Quer iniciar uma nova rodada?")) {

   
   for (contador = 1; contador<=2; contador++) {
   const carta = comprarCarta(); 
   cartasUsuario = cartasUsuario +" " + carta.texto;
   totalPontosUsuario = totalPontosUsuario + carta.valor;
}
console.log("Usuário - cartas: ", cartasUsuario, " - pontuação ", totalPontosUsuario);

   
   for (contador = 1; contador<=2; contador++) {
      const carta = comprarCarta(); 
      cartasComputador = cartasComputador +" " + carta.texto;
      totalPontosComp = totalPontosComp + carta.valor;
   }
   console.log("Computador - cartas: ", cartasComputador, " - pontuação ", totalPontosComp);

} else {
	// o que fazer se o usuário clicar "cancelar"
   console.log ("O jogo acabou");
}

if (totalPontosUsuario > totalPontosComp){
   console.log("O usuário ganhou!");
} else if (totalPontosUsuario < totalPontosComp) {
   console.log("O computador ganhou!");
} else {
   console.log("Empate!");
}