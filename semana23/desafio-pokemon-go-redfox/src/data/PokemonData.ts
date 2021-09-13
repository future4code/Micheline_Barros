import { NotFoundError } from "../error/NotFoundError";
import { PokemonInputDTO } from "../model/Pokemon";
import { BaseDatabase } from "./BaseDatabase";

export class PokemonData extends BaseDatabase{

    async getPokemonData(offset: number): Promise<PokemonInputDTO[]>{

        try {
            const result = await this.getConnection()
           .select("*")
           .into(this.TABLE_NAME.Pokemon)
           .limit(15)
           .offset(offset)
           .orderBy("id", 'asc')

      
            
            if(!result.length){
                throw new NotFoundError("Not found")
            }
     
            return result.map((pokemon: any) => {
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    generation: pokemon.generation,
                    evolutionStage: pokemon.evolution_stage,
                    familyId: pokemon.family_id,
                    type1: pokemon.type_1,
                    type2: pokemon.type_2,
                    statTotal:pokemon.stat_total,
                    atk: pokemon.atk,
                    sta: pokemon.sta,
                    legendary: pokemon.legendary,
                    cp40: pokemon.cp_40,
                    cp39: pokemon.cp_39
            }})
         

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }

    }

    async getPokemonByIdData(id: number): Promise<PokemonInputDTO[]>{

        try {
            const result = await this.getConnection()
           .select("*")
           .where('id', id)
           .into(this.TABLE_NAME.Pokemon)
      
            
            if(!result.length){
                throw new NotFoundError("Not found")
            }
     
            return result.map((pokemon: any) => {
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    generation: pokemon.generation,
                    evolutionStage: pokemon.evolution_stage,
                    familyId: pokemon.family_id,
                    type1: pokemon.type_1,
                    type2: pokemon.type_2,
                    statTotal:pokemon.stat_total,
                    atk: pokemon.atk,
                    sta: pokemon.sta,
                    legendary: pokemon.legendary,
                    cp40: pokemon.cp_40,
                    cp39: pokemon.cp_39
            }})
         

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }

    }

    async getPokemonFilterOrderPageData(nameOrtype: string, sort:any, order: string, offset: number): Promise<PokemonInputDTO[]>{

        try {
           const result = await this.getConnection()
           .where('name', "like", `%${nameOrtype}%`)
           .orWhere('type_1', "like", `%${nameOrtype}%`)
           .orWhere('type_2', "like", `%${nameOrtype}%`)
           .into(this.TABLE_NAME.Pokemon)
           .orderBy(sort, order)
           .limit(15)
           .offset(offset)
         
            // if(!result.length){
            //     throw new NotFoundError("Not found")
            // }
     
            return result.map((pokemon: any) => {
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    generation: pokemon.generation,
                    evolutionStage: pokemon.evolution_stage,
                    familyId: pokemon.family_id,
                    type1: pokemon.type_1,
                    type2: pokemon.type_2,
                    statTotal:pokemon.stat_total,
                    atk: pokemon.atk,
                    sta: pokemon.sta,
                    legendary: pokemon.legendary,
                    cp40: pokemon.cp_40,
                    cp39: pokemon.cp_39
            }})
         

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }

    }
}