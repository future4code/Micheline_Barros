import { IdGenerator } from './../services/IdGenerator';
import { Request, Response } from 'express';


export async function createUser(
    req: Request,
    res: Response
): Promise<void>{
    try {
        
        const idG = new IdGenerator();
        const id = idG.generateId();

        const {name, email} = req.body;

        



        console.log(id)
        res.status(200).send("Usuário criado.")
    } catch (error){

        res.status(500).send("Internal Server Error");

    }
}