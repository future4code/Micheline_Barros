import { PokemonInputDTO } from './../model/Pokemon';
import { Request, Response } from "express";
import { stringify } from "uuid";
import { PokemonBusiness } from "../business/PokemonBusiness";

export class PokemonController{

    async getPokemonController(req: Request, res: Response){
        try {
            const page = Number(req.query.page) || 1;
            const offset: number = 5 * (page -1);
           
            const pokemonBusiness = new PokemonBusiness()
            const result = await pokemonBusiness.getPokemonBusiness(offset)
            
            res.status(200).send(result) 

        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    async getPokemonByIdController(req: Request, res: Response){
        try {
            const id = Number(req.params.id);
           
            const pokemonBusiness = new PokemonBusiness()
            const result = await pokemonBusiness.getPokemonByIdBusiness(id)
            
            res.status(200).send(result) 

        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    async getPokemonFilterOrderPageController(req: Request, res: Response){
        try {
            const nameOrtype = req.query.name? req.query.name : req.query.type? req.query.type : "%"; 

            const sort = req.query.sort === "statTotal" ? "stat_total" : req.query.sort === "atk" ? "atk" : req.query.sort === "sta" ? "sta" : req.query.sort === "cp40" ? "cp_40" : req.query.sort === "cp39" ? "cp_39" : "name"

            const order = req.query.order === "desc" ? "desc" : "asc";
     
            const page = Number(req.query.page) || 1;

            const offset: number = 5 * (page -1);

         
           
            const pokemonBusiness = new PokemonBusiness()
            const result = await pokemonBusiness.getPokemonFilterOrderPageBusiness(nameOrtype as string, sort as string, order as string, offset)
            
            res.status(200).send(result) 

        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }


}