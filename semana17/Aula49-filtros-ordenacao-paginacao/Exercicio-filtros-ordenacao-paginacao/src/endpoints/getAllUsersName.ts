import { Request, Response } from "express"
import selectUserName from "../data/selectUserName"

export const getAllUsersName = async(req: Request,res: Response): Promise<void> =>{
   try {

      const name = req.query.name || "%"

      const users = await selectUserName(name as string)

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