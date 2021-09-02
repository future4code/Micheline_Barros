import { IdGenerator } from "../services/IdGenerator";
import { WalkInputDTO } from "../model/Walk";
import { WalkDatabase } from "../data/WalkDatabase"
import { InputError } from "../error/InputError";

export class WalkBusiness {

    
    async createWalk(walk: WalkInputDTO) {

        if(!walk.dateWalk || !walk.startWalk || !walk.finishWalk || !walk.price || !walk.idTutor || !walk.idDog || !walk.idWalker){
            throw new InputError("Preencha todos os campos para registro do walk.")
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const walkDatabase = new WalkDatabase();
        await walkDatabase.createWalk(id, walk.dateWalk, walk.startWalk, walk.finishWalk, walk.price, walk.status, walk.idTutor, walk.idDog, walk.idWalker);

    }

}