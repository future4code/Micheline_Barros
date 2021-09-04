import moment from "moment";
import { Time } from "../model/Walk";
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

    

}