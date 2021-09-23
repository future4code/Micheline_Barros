import { user } from "../../types/user"
import { connection } from "../connection"

export const createUsers = async(user: user) => {
    console.log("entrou no insert")
    await connection.insert({
        "id": user.id,
        "name": user.name,
        "email": user.email,
        "password": user.password,
        "role": user.role
    }).into('aula58_users')
}