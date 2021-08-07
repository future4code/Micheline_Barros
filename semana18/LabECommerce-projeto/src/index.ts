import { Request, Response } from 'express';
import { app } from './app';
import {BaseDataBase } from './data/BaseDataBase';
import moment from 'moment'



export class User{
    idUser:string;
    name: string;
    email: string;
    age: number;
    constructor(
        idUser:string,
        name: string,
        email: string,
        age: number
    ){
        this.idUser = idUser,
        this.name = name,
        this.email = email,
        this.age = age
    }
    getIdUser(): string{
        return this.idUser
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
export class UserDataBase extends BaseDataBase {
    public createUser = async(user: User) => {
        await BaseDataBase.connection("user")
            .insert({
                idUser: user.getIdUser(),
                name: user.name,
                email: user.email,
                age: user.age
            })
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
        const newUser = new User(
            idUser,
            req.body.name,
            req.body.email,
            req.body.age,
        )
        new UserDataBase().createUser(newUser)

        res.status(200).send({mensage:"Usuário criado com sucesso!", id: idUser})

    } catch(error){
        res.status(400).send(error.sqlMessage || error.message)
    }
});


