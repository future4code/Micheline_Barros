import { User } from "../../type/typeUsers/typeUsers"
import { BaseDataBase } from "../BaseDataBase"


export class UserDataBase extends BaseDataBase{
    createUser = async (
        user: User
    ) => {
        await BaseDataBase.connection.insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        }).into("labook_users")
    }

    selectUser = async ({email}: any) => {
        const result = await BaseDataBase.connection("labook_users")
        .select().where({email})
         
        return result[0]
    }
}