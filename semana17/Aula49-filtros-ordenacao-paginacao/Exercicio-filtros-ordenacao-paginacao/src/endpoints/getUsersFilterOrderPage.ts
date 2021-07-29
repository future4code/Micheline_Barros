import { Request, Response } from "express";
import selectUsersFilterOrderPage from "../data/selectUsersFilterOrderPage";


export const getUsersFilterOrderPage = async(req: Request,res: Response): Promise<void> =>{
   try {

      const name = req.query.name || "%"; //ternário abreviado

      const sort = req.query.sort=== "name"?  "name": req.query.sort === "type" ?"type" : "email";

      const order = req.query.order === "desc" ? "desc" : "asc";
     
      const page = Number(req.query.page) || 1;

      const offset: number = 5 * (page -1);

      const users = await selectUsersFilterOrderPage(name as string, sort as string, order as string, offset);

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