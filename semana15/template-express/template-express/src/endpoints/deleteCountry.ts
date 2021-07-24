import { Request, Response } from 'express'
import { country } from './../types'
import { countries } from '../data'
import utf8 from 'utf8'

// const utf8 = require('utf8'); //npm install utf8 e importa com require ou com import no cabeçalho

const deleteCountry = (
    req: Request,
    res: Response
) => {

    try {
        
        const authorization = req.headers.authorization as string;

        if( !authorization || authorization.length<10){
            res.statusCode =  401;
            throw new Error ('Unauthorized')
        }

        const index = countries.findIndex(
            country => country.id === Number(req.params.id)
        )

        if(index === -1){
            res.statusCode =  404;
            const mensagem = utf8.encode("Não encontrado") //converte a mensgem para utf8
            throw new Error(mensagem);
        }
       
        countries.splice(index, 1)
        
        res.status(200).send("Delete Country successfully");

    } catch (error) {
        if (res.statusCode === 200){
            res.status(500).end()
        } else {
            res.statusMessage = error.message
            res.end() 
        }
    }
}

export default deleteCountry;


