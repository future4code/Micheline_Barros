


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