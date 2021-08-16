import { BaseDataBase } from "./BaseDataBase";

export class Profile extends BaseDataBase{
    user: any;
    public profile = async (id: string) => {
        const result = await BaseDataBase.connection("cookenu_users")
        .where({id});
       
        return {user: result[0]}
    }
    
   
}