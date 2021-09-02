import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { TutorInputDTO } from "../model/Tutor";
import { TutorDatabase } from "../data/TutorDatabase";

export class TutorBusiness {

    
    async createTutor(tutor: TutorInputDTO) {

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(tutor.password);

        const tutorDatabase = new TutorDatabase();
        await tutorDatabase.createTutor(id, tutor.phone, tutor.email, tutor.name, hashPassword);

    }

}