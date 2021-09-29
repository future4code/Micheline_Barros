export class Client{
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private cpf: string
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

   getEmail(){
        return this.email;
    }

    getCpf(){
        return this.cpf;
    }

    setId(id: string){
        return this.id = id;
    }

    setName(name: string){
        return this.name = name;
    }

   setEmail(email: string){
        return this.email = email;
    }

    setCpf(cpf: string){
        return this.cpf = cpf;
    }

    

    static toTutorModel(data?: any){
        return (data && new Client(
            data.id,
            data.name,
            data.email,
            data.cpf
        ))
    }
}


export interface ClientInputDTO{
    name: string,
    email: string,
    cpf: string
}

export interface ClientOutputDTO{
    name: string,
    email: string,
    cpf: string
}


