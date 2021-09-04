import { InputError } from "../error/InputError";

export class Walk{
    constructor(
        private id: string,
        private dateWalk: Date,
        private startWalk: Time,
        private time: string,
        private latitude: number,
        private longitude: number,
        private quantityDogs: number,
        private idTutor: string,
        private status: Status,
        private finishWalk?: string,
        private price?: number
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

    getTime(){
        return this.time;
    }

    getLatitude(){
        return this.latitude;
    }

    getLongitude(){
        return this.longitude;
    }


    getIdTutor(){
        return this.idTutor;
    }

    getQuantityDogs(){
        return this.quantityDogs;
    }

    getStatus(){
        return this.status;
    }


    getFinishWalk(){
        return this.finishWalk;
    }

    getPrice(){
        return this.price
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

    setTime(time: Time){
        return this.time = time;
    }

    setLatitude(latitude: number){
        return this.latitude = latitude;
    }

    setLongitude(longitude: number){
        return this.longitude = longitude;
    }

    setQuantityDogs(quantityDogs: number){
        return this.quantityDogs = quantityDogs;
    }

    setIdTutor(idTutor: string){
        return this.idTutor = idTutor;
    }

    setStatus(status: Status){
        return this.status = status
    }


    static toTimeEnum(data?: any): Time{
        switch(data){
            case "30":
                return Time.TRINTA
            case "60":
                return Time.SESSENTA
            default:
                throw new InputError("Invalid time. Deve ser 30min ou 60min")      
            }
    }

    static toStatusEnum(data?: any): Status{
        switch(data){
            case "PENDENTE":
                return Status.PENDENTE
            case "CONCLUIDO":
                return Status.CONCLUIDO
            default:
                throw new InputError("Invalid status. Deve ser PENDENTE ou CONCLUIDO")      
            }
    }

    static toWalkModel(data?: any){
        return (data && new Walk(
            data.id,
            data.date_walk || data.dateWalk,
            data.startWalk || data.start_alk,
            Walk.toTimeEnum(data.time),
            data.latitude,
            data.longitude,
            data.quantityDogs || data.quantity_dogs,
            data.idTutor || data.id_tutor,
            Walk.toStatusEnum(data.status),
            data.finishWalk || data.finish_walk,
            data.price
        ))
    }
}

export enum Time {
    TRINTA = "30",
    SESSENTA = "60"
}

export enum Status {
    PENDENTE = "PENDENTE",
    CONCLUIDO = "CONCLUIDO"
}

export interface WalkInputDTO{
    dateWalk: Date,
    startWalk: Time,
    time: string,
    latitude: number,
    longitude: number,
    quantityDogs: number,
    idTutor: string,
}


export interface WalkOutputDTO{
    dateWalk: Date,
    startWalk: Time,
    time: string,
    latitude: number,
    longitude: number,
    quantityDogs: number,
    idTutor: string,
    status: string,
    finishWalk: Date,
    price: number
}

