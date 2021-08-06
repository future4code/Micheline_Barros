import { Request, Response } from "express";
import selectUsersPage from "../data/selectUsersPage"


export const getUsersPage = async(req: Request,res: Response): Promise<void> =>{
   try {

      const page = Number(req.query.page) || 1
      const offset: number = 5 * (page - 1)
      const users = await selectUsersPage(offset)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

