import { connection } from "./connection"


export default async function selectUsersFilterOrderPage (name: string, sort: string, order: string, offset:number):Promise<any> {

   const result = await connection("aula49_exercicio")
   .where("name", "like", `%${name}%`)
   .orderBy(sort, order)
   .limit(5)
   .offset(offset)

    return result
 }