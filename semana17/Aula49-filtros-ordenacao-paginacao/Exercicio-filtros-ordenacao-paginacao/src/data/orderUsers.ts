import { connection } from "./connection"


export default async function orderUsers(name: string, sort: string, order: string):Promise<any> {

   const result = await connection("aula49_exercicio")
   .where("name", "like", `%${name}%`)
   .orderBy(sort, order)

    return result
 }