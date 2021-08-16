import { BaseDataBase } from "./BaseDataBase";

export class Profile extends BaseDataBase{
    user: any;
    public profile = async (id: string) => {
        const result = await BaseDataBase.connection("cookenu_users")
        .where({id});

        console.log("login",{user: result[0]})
       
        return {user: result[0]}
    }
    
   
}