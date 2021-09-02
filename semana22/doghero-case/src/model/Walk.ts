import { InputError } from "../error/InputError";

export class Walk{
    constructor(
        private id: string,
        private dateWalk: Date,
        private startWalk: string,
        private finishWalk: string,
        private price: number,
        private status: Status,
        private idTutor: string,
        private idDog: string,
        private idWalker: string
    ){}

    getId(){
        return this.id;
    }

    getDateWalk(){
        return this.dateWalk;
    }

    getStartWalk(){
        return this.startWalk;
    }

    getFinishWalk(){
        return this.finishWalk;
    }

    getPrice(){
        return this.price
    }

    getStatus(){
        return this.status;
    }

    getIdTutor(){
        return this.idTutor;
    }

    getIdDog(){
        return this.idDog;
    }

    getIdWalker(){
        return this.idWalker
    }

    setId(id: string){
        return this.id = id;
    }

    setDateWalk(dateWalk: Date){
        return this.dateWalk = dateWalk;
    }

    setStartWalk(startWalk: any){
        return this.startWalk = startWalk;
    }

    setFinishWalk(finishWalk: any){
        return this.finishWalk = finishWalk;
    }

    setPrice(price: number){
        return this.price = price;
    }

    setStatus(status: Status){
        return this.status = status;
    }

    setIdTutor(idTutor: string){
        return this.idTutor = idTutor;
    }

    setIdDog(idDog: string){
        return this.idDog = idDog;
    }

    setIdWalker(idWalker: string){
        return this.idWalker = idWalker;
    }

    static toStatusEnum(data?: any): Status{
        switch(data){
            case "PENDETE":
                return Status.PENDENTE
            case "CONCLUIDO":
                return Status.CONCLUIDO
            default:
                throw new InputError("Invalid status")      
            }
    }

    static toWalkModel(data?: any){
        return (data && new Walk(
            data.id,
            data.date_walk || data.dateWalk,
            data.startWalk || data.start_alk,
            data.finishWalk || data.finish_walk,
            data.price,
            Walk.toStatusEnum(data.status),
            data.idTutor || data.id_tutor,
            data.idDog || data.id_Dog,
            data.idWalker || data.id_walker
        ))
    }
}

export enum Status {
    PENDENTE = "PENDENTE",
    CONCLUIDO = "CONCLUIDO"
}

export interface WalkInputDTO{
    dateWalk: Date,
    startWalk: string,
    finishWalk: string,
    price: number,
    status: Status,
    idTutor: string,
    idDog: string,
    idWalker: string
}


