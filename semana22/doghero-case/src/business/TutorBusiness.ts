import { PHONE_REGEX } from './../services/regexValidar';
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { TutorInputDTO } from "../model/Tutor";
import { TutorDatabase } from "../data/TutorDatabase";
import { EMAIL_REGEX } from "../services/regexValidar";

export class TutorBusiness {

    
    async createTutor(tutor: TutorInputDTO) {

        
        if (!tutor.email || !tutor.password || !tutor.phone || !tutor.name) {
            throw new Error("Preencha todos os campos para registro do usuário");
        }

        if(EMAIL_REGEX.test(tutor.email) === false){
            throw new Error("O formato do email é inválido")
        }

        if(PHONE_REGEX.test(tutor.phone) === false){
            throw new Error("O formato do phone é inválido. Insira nesse formato (xx) xxxxx-xxxx")
        }
        
        if (tutor.password.length < 6 || tutor.name.length < 10) {
            throw new Error("O password deve ter, no mínimo, 6 caracteres e o name 10");
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(tutor.password);

        const tutorDatabase = new TutorDatabase();
        await tutorDatabase.createTutor(id, tutor.phone, tutor.email, tutor.name, hashPassword);

    }

}