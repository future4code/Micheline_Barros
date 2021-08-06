import { Request, Response } from 'express';
import { app } from './app';
import {connection} from './data/connection';
import moment from 'moment'


export class User{
    
    constructor(
        idUser:string,
        name: string,
        email: string,
        age: number
    ){

    }
}

export class Product{
    constructor(
        idProduct: string,
        name: string,
        description: string,
        price: number
    ){}
}


export class Ticket extends Product{
    constructor(
        idProduct: string,
        name: string,
        description: string,
        price: number,
        source: string,
        destiny: string
    ){
        super(idProduct,name,description, price)
    }
}

export class Purchase{
    constructor(
        idUser: string,
        idProduct: string,
        quantity: number,
        total: number
    ){}
}


//Endpoint 1
class Usuarios extends User{
    createUser = async(
        idUser:string,
        name: string,
        email: string,
        age: number
        ): Promise<void> => {
        await connection.raw(`
            insert into user(idUser, name, email, age)
            values(
                ${idUser},
                "${name}",
                "${email}",
                "${age}"
            )
        `)
        }
}


app.post("/user", async(req: Request, res: Response): Promise<void> => {
    try{
        if(
            !req.body.name ||
            !req.body.email ||
            !req.body.age
        ){
            throw new Error("Verifique se todos os campos foram preenchidos corretamente!")
        }


        const idUser: string = Date.now() + Math.random().toString()
        new Usuarios(
            idUser,
            req.body.name,
            req.body.email,
            req.body.age,
        )
        res.status(200).send({mensage:"Usuário criado com sucesso!", id: idUser})

    } catch(error){
        res.status(400).send(error.sqlMessage || error.message)
    }
})


