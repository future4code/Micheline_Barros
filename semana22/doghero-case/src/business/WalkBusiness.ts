import { WalkDatabase } from './../data/WalkDatabase';
import { IdGenerator } from "../services/IdGenerator";
import { WalkInputDTO } from "../model/Walk";
import { InputError } from "../error/InputError";
import moment from "moment";
import { NotFoundError } from "../error/NotFoundError";

export class WalkBusiness {

    
    async createWalk(walk: WalkInputDTO) {


        if(!walk.dateWalk || !walk.startWalk || !walk.time || !walk.latitude || !walk.longitude || !walk.quantityDogs || !walk.idTutor){
            throw new InputError("Preencha todos os campos para registro do walk.")
        }

        const dateDiff= moment(walk.dateWalk, 'DD/MM/YYYY').add(1, 'days').unix() - moment().unix()

        if(dateDiff < 0){
            throw new Error("'dateWalk' não pode ser ser anterior a data atual!")
        }

        if(walk.time === '30' || walk.time === '60'){

            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();
    
            if(walk.time <= "30"){
                 const price = 25 + (walk.quantityDogs - 1) * 15
    
                const walkDatabase = new WalkDatabase();
                await walkDatabase.createWalk(id, walk.dateWalk, walk.startWalk, walk.finishWalk, walk.time, walk.latitude, walk.longitude, walk.quantityDogs, walk.idTutor, price);
                
            } else{
                const price = 35 + (walk.quantityDogs - 1) * 20
                const walkDatabase = new WalkDatabase();
                await walkDatabase.createWalk(id, walk.dateWalk, walk.startWalk, walk.finishWalk, walk.time, walk.latitude, walk.longitude, walk.quantityDogs, walk.idTutor, price);
            }
        }else{
            throw new Error("O tempo (time) de duração do passeio é de 30min ou 60min")
        }

    }

    async getWalkScheduled(index: any, offset: number){

        if(!index){
            throw new NotFoundError("Not found")
        }

        const wbd = new WalkDatabase();
        const result = wbd.getWalkByDate(index, offset);
        
        return result
    }

    

    async getShowWalk(id: string){

        if(!id){
            throw new NotFoundError("Not found")
        }

        const wbd = new WalkDatabase();
        const result = await wbd.getShowWalk(id);
       
        return result

    }

    async getWalkByTutor(id: string){

        if(!id){
            throw new NotFoundError("Não há passeios marcados por esse tutor")
        }

        const wbd = new WalkDatabase();
        const result = await wbd.getWalkByTutor(id);

        return result
    }

}