import { IdGenerator } from "../../services/IdGenerator";
import moment from 'moment'
import { PostDataBase } from "../../data/PostDataBase/PostDataBase";
import { Authenticator } from "../../services/Authenticator";

export class PostBusiness{

        create = async ({photo, description, type, createdAt, authorId}: any) => {
        
            if(!photo || !description || !type || !createdAt || !authorId){
                throw new Error("Todos os campos são obrigatórios.")
            }

            const dateDiff= moment(createdAt, 'DD/MM/YYYY').add(1, 'days').unix() - moment().unix()
               console.log(dateDiff)

            if(dateDiff < 0){
                throw new Error("'createdAt' não pode ser ser anterior a data atual!")
            }
    
    
        

            const ig = new IdGenerator();
            const id = ig.generateId(); 

            const pdb = new PostDataBase();
            await pdb.postDataBase({
                id,
                photo, 
                description, 
                type, 
                createdAt, 
                authorId
            })

            const auth = new Authenticator();
            const token = auth.generateToken({id});
            return token;

    }
}