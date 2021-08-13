import { UsersDataBase } from './../data/UsersDataBase';
import { HashManager } from './../services/HashManager';
import { IdGenerator } from './../services/IdGenerator';
import { Request, Response } from 'express';
import { isIdentifierOrPrivateIdentifier } from 'typescript';


export async function createUser(
    req: Request,
    res: Response
): Promise<void>{
    try {

        if(!req.body.name){
            throw new Error("Informe o nome.")
        }

        if(!req.body.email || req.body.email.indexOf("@") === -1){
            throw new Error ("email inválido");
        }

        if(!req.body.password || req.body.password.lenght < 6){
            throw new Error ("senha inválida. A senha deve ter, no mínimo, 6 caracteres")
        }

        
        const idG = new IdGenerator();
        const id = idG.generateId();

        const {name, email} = req.body;
        console.log(name)
        const password = req.body.password;
        const hm = new HashManager();
        const criptoPass = await hm.hash(password)

        const uDB = new UsersDataBase()
        const user = uDB.registerUser(id, name, email, criptoPass)

        res.status(200).send("Usuário criado.")
    } catch (error){

        res.status(400).send(error.sqlMessage || error.message)

    }
}