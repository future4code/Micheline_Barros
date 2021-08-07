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
    idProduct: string;
    constructor(
        idProduct: string,
        name: string,
        description: string,
        price: number
    ){
        this.idProduct = idProduct
    }

    getIdProduct(): string{
        return this.idProduct
    }
}


export class Ticket extends Product{
        idProduct: string;
        name: string;
        description: string;
        price: number;
        source: string = '';
        destiny: string = '';
    constructor(
        idProduct: string,
        name: string,
        description: string,
        price: number,
        source: string,
        destiny: string
    ){
        super(idProduct,name,description, price)
        this.idProduct=idProduct,
        this.name= name,
        this.description= description,
        this.price= price,
        this.source= source,
        this.destiny= destiny
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


//Endpoint 2
export class ProductDataBase extends BaseDataBase {
    public createProduct = async(product: Ticket) => {
        await BaseDataBase.connection("product")
            .insert({
                idProduct: product.getIdProduct(),
                name: product.name,
                description: product.description,
                price: product.price,
                source: product.source,
                destiny: product.destiny
            })
        }

}

app.post("/product", async(req: Request, res: Response): Promise<void> => {
    try{
        if(
            !req.body.name ||
            !req.body.description ||
            !req.body.price
        ){
            throw new Error("Verifique se todos os campos foram preenchidos corretamente!")
        }


        const idProduct: string = Date.now() + Math.random().toString()
        const newProduct = new Ticket(
            idProduct,
            req.body.name,
            req.body.description,
            req.body.price,
            req.body.source,
            req.body.destiny
        )
        new ProductDataBase().createProduct(newProduct)

        res.status(200).send({mensage:"Produto inserido com sucesso!", id: idProduct})

    } catch(error){
        res.status(400).send(error.sqlMessage || error.message)
    }
});

