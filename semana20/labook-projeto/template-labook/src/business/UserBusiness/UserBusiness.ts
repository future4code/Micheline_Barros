import { UserDataBase } from '../../data/UserDataBase/UserDataBase';
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";


export class UserBusiness{

    signup = async ({name, email, password}: any) => {

        
        if(name.length < 5 || !name){
            throw new Error ("O campo nome não poderá estar em branco e deverá ter, no mínimo, 5 caracteres.");
            
        }


        if(!email || email.indexOf("@") === -1){
            throw new Error ("Email inválido.")
        }

        if(!password || password.length < 6){
            throw new Error ("senha inválida. Informe uma senha com, no mínimo, 6 caracteres.")
        }

        
        const ig = new IdGenerator();
        const id = ig.generateId();

        const hm = new HashManager();
        const hashPass = await hm.hash(password);

        const udb = new UserDataBase();
        await udb.createUser({
            id,
            name, 
            email, 
            password: hashPass
        });

        const auth = new Authenticator();
        const token = auth.generateToken({id});
        return token;

    }


    login = async ({ email, password}: any) => {
        
        if(!email || !password){
            throw new Error ("Operação nválida. Informe a senha e o email cadastrados.")
        }

        const udb = new UserDataBase()
        const resultUser = await udb.selectUser({email})
      
        if(!resultUser){
            throw new Error ("Usuário não encontrado")
        }


        const hm = new HashManager()
        const comparePass = hm.compare(password, resultUser.password)

        const auth = new Authenticator();
        const token = auth.generateToken({id: resultUser.id});
        return token;
       
    }

}