// Exercício 1
//a) usando o process.argv[index]. O index pode ser do 2 em diante.
//b)
// const nome = process.argv[2]
// const idade = process.argv[3]

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

//c)
const nome = process.argv[2]
const idade = process.argv[3]

const idadeMaisSete = Number(process.argv[3]) + 7

console.log(`Olá, ${nome}! Você tem ${idade} anos. Daqui 7 anos você terá ${idadeMaisSete}.`)