import { connection } from "./connection"


export default async function selectUserName(name: string):Promise<any> {
    const result = await connection("aula49_exercicio").where("name", "like", `%${name}%`)
   
 
    return result
 }