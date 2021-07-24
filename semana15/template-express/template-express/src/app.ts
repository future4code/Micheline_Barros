import express,{ Express } from "express"
import cors from 'cors'

const app: Express = express() //Express é um tipo

//essas são funções pelas quais a requisição irá passar antes de ela ser direcionada para a função que vai tratar ela de fato

app.use(express.json()) //se for uma requisição com body, uma post ou put, que chegará como string precisará ser convertida para json, e é o que essa linha faz, express.json()

app.use(cors())  //para todas as requisições precisamos colocar um cabeçalho na resposta de controle de origem pro front não tomar o erro de cors - Access-Control-Allow-Origin

app.listen(3003, () => {
    console.log("Server is running in door 3003")  //url base => http://localhost:3003
}) //essa linha faz o servidor escutar a porta 3003, poderia ser 5500(live server), 3001, 3333 (obs.: a porta 3000 já é utilizada pelo react) / o console.log serve pra avisar quando o processo já está ancorado na porta e que já pode testar os endpoint. Ao executar o comando "npm run start" configurado no arquivo package.json no root iniciará a execução nessa porta que ficará escutando e respondendo as requisições.

export default app;