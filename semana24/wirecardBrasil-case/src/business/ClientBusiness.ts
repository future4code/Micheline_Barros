import { IdGenerator } from "../services/IdGenerator";
import { ClientInputDTO } from "../model/Client";
import { ClientDatabase } from "../data/ClientDatabase";
import { EMAIL_REGEX } from "../services/regexValidar";

export class ClientBusiness {

    
    async createClient(client: ClientInputDTO) {

        
        if (!client.email || !client.cpf || !client.name) {
            throw new Error("Fill in all fields for user registration");
        }

        if(EMAIL_REGEX.test(client.email) === false){
            throw new Error("The email format is invalid")
        }
        
        if (client.cpf.length < 10 || client.name.length < 10) {
            throw new Error("Invalid cpf or name");
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const clientDatabase = new ClientDatabase();
        await clientDatabase.createClient(id, client.email, client.name, client.cpf);

    }


    async getClient(offset: number) {

        const tutorDatabase = new ClientDatabase();
        const result = await tutorDatabase.getClient(offset)

        return result
    }


}