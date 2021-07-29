import { Request, Response } from "express"
import orderUsers from "../data/orderUsers"


export const getAllUsersOrder = async(req: Request,res: Response): Promise<void> =>{
   try {

      const name = req.query.name || "%" //ternário abreviado
      const sort = req.query.sort=== "name"?  "name": req.query.sort === "type" ?"type" : "email"
      const order = req.query.order === "desc" ? "desc" : "asc"
      console.log('type', req.query.sort)
      const users = await orderUsers(name as string, sort as string, order as string)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No user found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}