import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { PokemonData } from "../data/PokemonData";

export class PokemonController{

    async getPokemonController(req: Request, res: Response){
        try {
            const page = Number(req.query.page) || 1;
            const offset: number = 5 * (page -1);

            const sort = req.query.sort === "id" ? "id" : "name"

            const order = req.query.order === "desc" ? "desc" : "asc";
           
            const pokemonBusiness = new PokemonBusiness(new PokemonData)
            const result = await pokemonBusiness.getPokemon(offset, sort, order)
            
            res.status(200).send(result) 

        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    async getPokemonByIdController(req: Request, res: Response){
        try {
            const id = Number(req.params.id);
           
            const pokemonBusiness = new PokemonBusiness(new PokemonData)
            const result = await pokemonBusiness.getPokemonById(id)
            
            res.status(200).send(result) 

        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    async getPokemonFilterOrderPageController(req: Request, res: Response){
        try {
            const nameOrtype = req.query.name? req.query.name : req.query.type? req.query.type : "%"; 

            const sort = req.query.sort === "statTotal" ? "stat_total" : req.query.sort === "atk" ? "atk" : req.query.sort === "def" ? "def": req.query.sort === "sta" ? "sta" : req.query.sort === "cp40" ? "cp_40" : req.query.sort === "cp39" ? "cp_39" : "name"

            const order = req.query.order === "desc" ? "desc" : "asc";
     
            const page = Number(req.query.page) || 1;

            const offset: number = 5 * (page -1);

         
           
            const pokemonBusiness = new PokemonBusiness(new PokemonData)
            const result = await pokemonBusiness.getPokemonFilterOrderPage(nameOrtype as string, sort as string, order as string, offset)
            
            res.status(200).send(result) 

        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }


}