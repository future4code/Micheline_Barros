import express from 'express'
import cors from 'cors'

export const app = express()

app.use(express.json()) //middleware: funções que estão no meio. Toda vez que chamar app no index, essas funções serão executadas primeiro. app.post('/user/signup', signup), executada antes da requisição.
app.use(cors()) //evita erro de cors

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})