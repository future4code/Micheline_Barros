import { IdGenerator } from "../services/IdGenerator";
import { WalkInputDTO } from "../model/Walk";
import { WalkDatabase } from "../data/WalkDatabase"
import { InputError } from "../error/InputError";
import moment from "moment";

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

        const walkDatabase = new WalkDatabase();
        await walkDatabase.createWalk(id, walk.dateWalk, walk.startWalk, walk.time, walk.latitude, walk.longitude, walk.quantityDogs, walk.idTutor);

    }


}