import { Request, Response } from 'express'
import { country } from './../types'
import { countries } from '../data'
import utf8 from 'utf8'

// const utf8 = require('utf8'); //npm install utf8 e importa com require ou com import no cabeçalho

const createCountry  = (
    req: Request,
    res: Response
) => {

    try {
        
        const authorization = req.headers.authorization as string;

        if( !authorization || authorization.length<10){
            res.statusCode =  401;
            throw new Error ('Unauthorized')
        }

        if(!req.body.name || !req.body.capital || !req.body.continent){
            throw new Error ("Invalid Parameters")
        }

        countries.forEach((country) => {
            if(country.name === req.body.name){
                res.statusCode = 409;
                throw new Error("country already exists");
            }
        })
        // const countryName: number = countries.findIndex(
        //     (country1) => country1.name === req.body.name
        //   );
      
        //   if (countryName !== -1) {
        //     console.log("entrou")
        //     res.statusCode = 409;
        //     throw new Error("country already exists");
        //   }

        const country={
            id : Date.now(),
            name: req.body.name,
            capital: req.body.capital,
            continent: req.body.continent
        }
                
        countries.push(country)
    

        res.status(200).send({message:"Sucesso", country: country})

    } catch (error) {
        if (res.statusCode === 200){
            res.status(500).end()
        } else {
            res.statusMessage = error.message
            res.end() 
        }
    }
}

export default createCountry ;


