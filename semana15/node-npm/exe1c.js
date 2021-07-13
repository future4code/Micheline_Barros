//c)
const nome = process.argv[2]
const idade = process.argv[3]

const idadeMaisSete = Number(process.argv[3]) + 7

console.log(`Olá, ${nome}! Você tem ${idade} anos. Daqui 7 anos você terá ${idadeMaisSete}.`)