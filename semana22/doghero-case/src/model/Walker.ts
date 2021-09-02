import { InputError } from "../error/InputError";

export class Walker{
    constructor(
        private id: string,
        private name: string,
        private phone: string,
        private email: string,
        private password: string
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getPhone(){
        return this.phone;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }

    setId(id: string){
        return this.id = id;
    }

    setName(name: string){
        return this.name = name;
    }

    setPhone(phone: string){
        return this.phone = phone;
    }

    setEmail(email: string){
        return this.email = email;
    }

    setPassword(password: string){
        return this.password = password;
    }

    

    static toWalkerModel(data?: any){
        return (data && new Walker(
            data.id,
            data.name,
            data.phone,
            data.email,
            data.password
        ))
    }
}

// export enum Status {
//     PENDENTE = "PENDENTE",
//     CONCLUIDO = "CONCLUIDO",
// }

export interface WalkerInputDTO{
    name: string,
    phone: string,
    email: string,
    password: string
}


// export interface ShowOutputDTO{
//     id: string,
//     bandId: string,
//     weekDay: WeekDay,
//     startTime: number,
//     endTime: number,
//     musicGenre?: string,
//     bandName?:string
// }

