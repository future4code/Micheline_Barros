import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { WalkerInputDTO } from "../model/Walker";
import { WalkerDatabase } from "../data/WalkerDatabase";

export class WalkerBusiness {

    
    async createWalker(walker: WalkerInputDTO) {

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(walker.password);

        const walkerDatabase = new WalkerDatabase();
        await walkerDatabase.createWalker(id, walker.phone, walker.email, walker.name, hashPassword);

    }

}