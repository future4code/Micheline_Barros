import { User } from '../model/User';
import BaseDataBase from './BaseDataBase';

export class GetUserIdData extends BaseDataBase{

    getUserIdData = async (id: string) => {
        // try {
            
            const result = await BaseDataBase.connection.select("*").from("aula58_users").where({id})
            // if(result.length < 1){
            //     throw new Error("User Not found")
            // }
            console.log("result", result)
            return result[0]

            
            
        // } catch (error) {

        //     throw new Error(error.sqlMessage || error.message)
            
        // }
       
    }
}