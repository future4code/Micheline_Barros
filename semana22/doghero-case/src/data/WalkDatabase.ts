import moment from "moment";
import { NotFoundError } from "../error/NotFoundError";
import { Time, WalkOutputDTO } from "../model/Walk";
import { BaseDatabase } from "./BaseDatabase";

export class WalkDatabase extends BaseDatabase{

    async createWalk(
        id: string,
        date_walk: Date,
        start_walk: Time,
        time: string,
        latitude: number,
        longitude: number,
        quantity_dogs: number,
        id_tutor: string  

    ): Promise<void>{
       try {
           await this.getConnection().insert({
               id,
               date_walk: moment(date_walk, 'DD/MM/YYYY').format('YYYY-MM-DD'),
               start_walk,
               time,
               latitude,
               longitude,       
               quantity_dogs,
               id_tutor,
          
              
           }).into(this.TABLE_NAME.WALLKING)
       } catch (error) {
            throw new Error(error.sqlMessage || error.message);
       } 
    }

    async getWalkByDate(dataAtual: boolean): Promise<WalkOutputDTO[]>{
           
        console.log(dataAtual)

            if(dataAtual){

            const data = new Date();
            const dia = String(data.getDate()).padStart(2, '0');
            const mes = String(data.getMonth() + 1).padStart(2, '0');
            const ano = data.getFullYear();
            const dataHoje = (ano + '-' + mes + '-' + dia)

            const result = await this.getConnection().select("*")
            .into(this.TABLE_NAME.WALLKING).where("date_walk", ">=", dataHoje)

                
               
                if(!result[0]){
                    throw new NotFoundError(`Não tem nenhum walk agendado`)
                }
    
                return result
           }else{

            
            const result = await this.getConnection().select("*")
            .into(this.TABLE_NAME.WALLKING)

            if(!result[0]){
                throw new NotFoundError(`Não tem nenhum walk agendado`)
            }

            return result
           }
            
            
            
    }

}