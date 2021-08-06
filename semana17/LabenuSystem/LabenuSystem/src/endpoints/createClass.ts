import { Request, Response } from "express"
import insertClass from "../data/insertClass";
import moment from 'moment';


export async function createClass(
   req: Request,
   res: Response
): Promise<void> {
   try {
      if(
         !req.body.name || 
         !req.body.start_date || 
         !req.body.and_date
      ){
         res.status(400).send("Verifique se todos os campos foram preenchidos corretamente")
         return
      }

      let modulo = ("0"|| "1"|| "2"|| "3"|| "4"|| "5"|| "6" || "7")

      if(req.body.current_module !== modulo){
         res.status(400).send("current_modulo deve estar entre 0 e 7")
         return
      }

   
      const id = Date.now().toString();
      await insertClass(
         id,
         req.body.name,
         moment(req.body.start_date, "DD/MM/YYYY").format("YYYY/MM/DD"),
         moment(req.body.and_date, "DD/MM/YYYY").format("YYYY/MM/DD"),
         req.body.current_module
      )

      res.status(200).send("Criada com sucesso.")

   } catch (error) {
      if(res.statusCode === 200){
         res.status(500).send("Internal server error")
      }else{
         res.send(error.sqlMessage || error.message)
      } 
   }
}