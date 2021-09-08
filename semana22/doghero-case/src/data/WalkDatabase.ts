import { Tutor } from './../model/Tutor';
import { WalkCalc, WalkOutputDTO, Status, EditWalkDTO } from './../model/Walk';
import moment from "moment";
import { NotFoundError } from "../error/NotFoundError";
import { Time} from "../model/Walk";
import { BaseDatabase } from "./BaseDatabase";

export class WalkDatabase extends BaseDatabase{
   
    async createWalk(
        id: string,
        date_walk: Date,
        start_walk: Time,
        finish_walk: Time,
        time: string,
        latitude: number,
        longitude: number,
        quantity_dogs: number,
        id_tutor: string,
        price: number 

    ): Promise<void>{
        
       try {
           await this.getConnection().insert({
               id,
               date_walk: moment(date_walk, 'DD/MM/YYYY').format('YYYY-MM-DD'),
               start_walk,
               finish_walk,
               time,
               latitude,
               longitude,       
               quantity_dogs,
               id_tutor,
               price
              
           }).into(this.TABLE_NAME.WALLKING)
       } catch (error) {
            throw new Error(error.sqlMessage || error.message);
       } 
    }

    async getWalkByDate(dataAtual: boolean, offset: number): Promise<WalkOutputDTO[]>{

            if(dataAtual){

            const data = new Date();
            const dia = String(data.getDate()).padStart(2, '0');
            const mes = String(data.getMonth() + 1).padStart(2, '0');
            const ano = data.getFullYear();
            const dataHoje = (ano + '-' + mes + '-' + dia)

            const result = await this.getConnection().select("*")
            .into(this.TABLE_NAME.WALLKING)
            .where("date_walk", ">=", dataHoje)
            .orderBy("date_walk", 'asc')
            .limit(5)
            .offset(offset)

               
                if(!result[0]){
                    throw new NotFoundError(`Não tem nenhum walk agendado`)
                }
    
                return result
           }else{

            
            const result = await this.getConnection()
            .select("*")
            .orderBy("date_walk", 'asc')
            .into(this.TABLE_NAME.WALLKING)
            .limit(5)
            .offset(offset)

            if(!result[0]){
                throw new NotFoundError(`Não tem nenhum walk agendado`)
            }

            return result
           }
            
    }

   
    async getShowWalk(id: string): Promise<WalkCalc[]>{
        
        try {
            const result = await this.getConnection().raw(`
            SELECT TIMEDIFF(finish_walk, start_walk) as timeWallking,
            if (time = "30",
           25 + (quantity_dogs - 1)*15, 35 + (quantity_dogs - 1)*20) as price
            FROM ${this.TABLE_NAME.WALLKING} w
            WHERE w.id = "${id}"
            `)
            
            if(!result.length){
                throw new NotFoundError("Não há shows nesse dia")
            }

                      
            return result[0][0]
         

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }

    }

    public async getWalkByTutor(
        idTutor: string
    ): Promise<WalkOutputDTO[]> {

        const walk = await this.getConnection().raw(`
        SELECT w.id as id,
        t.id as tutorId,
        w.date_walk as dateWalk,
        w.start_walk as startWalk,
        w.finish_walk as finishWalk,
        w.quantity_dogs as quantityDogs,
        t.name as name
        FROM ${this.TABLE_NAME.WALLKING} w
        LEFT JOIN ${this.TABLE_NAME.TUTOR} t ON t.id = w.id_tutor
        WHERE w.id_tutor = "${idTutor}"
        ORDER BY dateWalk ASC
        `)
        
        if(!walk.length){
            throw new NotFoundError("Não há shows nesse dia")
        }


        return walk[0].map((data: any) => ({
            id: data.id,
            name: data.name,   
            dateWalk: data.dateWalk,
            startWalk: data.startWalk,
            quantityDogs: data.quantityDogs
        }))
        
    }

    async editStartOrFinishData(walk: EditWalkDTO): Promise<void>{
    
            try {
                await this.getConnection().where("id",walk.id)
                .update({
                    start_walk: walk.startWalk,
                    finish_walk: walk.finishWalk
            
                }).into(this.TABLE_NAME.WALLKING)
                
            } catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
    }

    async editStatusData(input: EditWalkDTO): Promise<void>{
    
        try {
            await this.getConnection().where("id",input.id)
            .update({
                status: input.status

            }).into(this.TABLE_NAME.WALLKING)
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
}

}