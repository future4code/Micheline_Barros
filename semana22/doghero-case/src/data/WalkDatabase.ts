import { Walk } from './../model/Walk';
import { BaseDatabase } from "./BaseDatabase";

export class WalkDatabase extends BaseDatabase{

    async createWalk(
        id: string,
        date_walk: Date,
        start_walk: string,
        finish_walk: string,
        price: number,
        status: string,
        id_tutor: string,   
        id_dog: string,
        id_walker: string
    ): Promise<void>{
       try {
           await this.getConnection().insert({
               id,
               date_walk,
               start_walk,
               finish_walk,
               price,
               status,
               id_tutor,
               id_dog,
               id_walker
              
           }).into(this.TABLE_NAME.WALLKING)
       } catch (error) {
            throw new Error(error.sqlMessage || error.message);
       } 
    }

}