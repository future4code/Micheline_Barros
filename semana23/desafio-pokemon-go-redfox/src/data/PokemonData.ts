import { NotFoundError } from "../error/NotFoundError";
import { PokemonImputDTO } from "../model/Pokemon";
import { BaseDatabase } from "./BaseDatabase";

export class PokemonData extends BaseDatabase{
    async getPokemonIdData(id: number): Promise<PokemonImputDTO[]>{

        try {
            const result = await this.getConnection()
           .select("*")
           .where('id', id)
           .into(this.TABLE_NAME.Pokemon)
      
            
            if(!result.length){
                throw new NotFoundError("Not found")
            }
     
            return result[0]
         

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }

    }
}