import { BaseDataBase } from "./BaseDataBase";



export class UsersDataBase extends BaseDataBase{
    public registerUser = async(
        id: string,
        name: string,
        email: string,
        password: string
    ) => {
        await BaseDataBase.connection("cookenu_users")
        .insert({
            id,
            name,
            email,
            password
        })
    
    }
}