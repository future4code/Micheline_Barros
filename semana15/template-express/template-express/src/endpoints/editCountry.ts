import { Request, Response } from 'express'
import { country } from './../types'
import { countries } from '../data'

const utf8 = require('utf8');

const editCountry = (
    req: Request,
    res: Response
) => {

    try {
        const index = countries.findIndex(
            country => country.id === Number(req.params.id)
        )

        if(index === -1){
            res.statusCode =  404;
            const mensagem = utf8.encode("Não encontrado")
            throw new Error(mensagem);
        }

        if (!req.body.name && !req.body.capital) {
            throw new Error("Invalid Parameters");
        }

        if (req.body.name) {
            countries[index].name = req.body.name
        }

        if (req.body.capital) {
            countries[index].capital = req.body.capital
        }
        
        res.status(200).send("Country successfully updated");

    } catch (error) {
        res.statusMessage = error.message
        res.end()
    }

}

export default editCountry;


