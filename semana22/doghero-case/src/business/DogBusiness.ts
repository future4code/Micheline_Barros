import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { DogDatabase } from "../data/DogDatabase";
import { DogInputDTO } from "../model/Dog";

export class DogBusiness {

    
    async createDog(dog: DogInputDTO) {

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const dogDatabase = new DogDatabase();
        await dogDatabase.createDog(id, dog.name, dog.dogBreed, dog.genderDog, dog.sizeDog, dog.idTutor);

    }

}