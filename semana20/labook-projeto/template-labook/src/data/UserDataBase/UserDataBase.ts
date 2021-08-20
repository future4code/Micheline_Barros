import { User } from "../../type/typeUsers/typeUsers"
import { BaseDataBase } from "../BaseDataBase"


export class UserDataBase extends BaseDataBase{
    public createUser = async (
        user: User
    ) => {
        await BaseDataBase.connection.insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        }).into("labook_users")
    }
}