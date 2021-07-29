import { Request, Response } from "express"
import selectUserType from "../data/selectUserType"

export const getAllUsersType = async(req: Request,res: Response): Promise<void> =>{
   try {

      const type = req.params.type || "%"

      const users = await selectUserType(type as string)

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