import { Authenticator } from './../services/Authenticator';
import { IdGenerator } from './../services/IdGenerator';
import { CreateUserDataBase } from './../data/CreateUserDataBase';
import {Request, Response} from "express"

export async function createUser(
    req: Request, 
    res: Response
): Promise<void>{
    try{
        
        const id: string = new IdGenerator().generatorId();

        const { email, password } = req.body

        // const password = req.body.password

        const auth = new Authenticator();

        const token = auth.generateToken({id})

        const userDB = new CreateUserDataBase();

        const user = userDB.createUser(id, email, password)

        res.status(200).send(token)
    }catch(error){
        res.status(500).send("Internal server error")
    }
}