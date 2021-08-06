import { connection } from "./connection"


export default async function insertClass (
   id: string,
   name: string,
   start_date: string,
   and_date: string,
   current_module: string
):Promise<any> {

  await connection.insert({
    id,
    name,
    start_date,
    and_date,
    current_module
   }).into("class")
  
 } 

