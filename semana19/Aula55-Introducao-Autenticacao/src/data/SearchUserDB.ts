import { BaseDataBase } from "./BaseDataBase";




export class SearchUserDB extends BaseDataBase{

    public searchUserEmail= async (
        email: string
        )=> {

        const result = await BaseDataBase.connection
        .select("*").from("aula55_user")
        .where({email});
      
        return result[0]
    }
}