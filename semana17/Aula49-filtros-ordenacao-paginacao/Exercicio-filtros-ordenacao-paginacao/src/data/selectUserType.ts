import { connection } from "./connection"


export default async function selectUserType(type: string):Promise<any> {
    const result = await connection("aula49_exercicio").where("type", `${type}`)
   
 
    return result
 }