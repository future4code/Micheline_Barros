import { UserDataBase } from "../data/UserDataBase/UserDataBase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";


export class UserBusiness{

    public  signup = async ({name, email, password}: any) => {

        const ig = new IdGenerator();
        const id = ig.generateId();

        const hm = new HashManager();
        const hashPass = await hm.hash(password);

        const ub = new UserDataBase();
        ub.createUser({
            id,
            name, 
            email, 
            password: hashPass
        });

        const auth = new Authenticator();
        const token = auth.generateToken({id});
        return token;

    }

}