import { WalkDatabase } from './../data/WalkDatabase';
import { IdGenerator } from "../services/IdGenerator";
import { Time, WalkInputDTO } from "../model/Walk";
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

        

    }

    async getWalkScheduled(index: any){

        const wbd = new WalkDatabase();
        const result = wbd.getWalkByDate(index);
        
        return result
    }

    

    async getShowWalk(id: string){

        const wbd = new WalkDatabase();
        const result = await wbd.getShowWalk(id);
       
        return result

    }

    async getWalkByTutor(id: string){

        if(!id){
            throw new NotFoundError("Não há shows nesse dia")
        }

        const wbd = new WalkDatabase();
        const result = await wbd.getWalkByTutor(id);

        return result
    }

}