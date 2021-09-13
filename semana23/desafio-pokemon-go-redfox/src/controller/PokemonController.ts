import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";

export class PokemonController{
    async getPokemonIdController(req: Request, res: Response){
        try {
            const id = Number(req.params.id);
           
            const pokemonBusiness = new PokemonBusiness()
            const result = await pokemonBusiness.getPokemonId(id)
            
            res.status(200).send(result) 

        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
}