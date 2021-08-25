import BaseDataBase from './BaseDataBase';

export class GetUserIdData extends BaseDataBase{
    getUserIdData = async ({id}: any) => {
        const result = await BaseDataBase.connection.select("*").from("aula58_users").where({id})

      
        return result[0]
    }
}