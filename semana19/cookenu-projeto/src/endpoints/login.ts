import { Authenticator } from './../services/Authenticator';
import { HashManager } from './../services/HashManager';
// import { SearchLogin } from './../data/SearchLogin';
import { Response, Request } from 'express';
import { BaseDataBase } from '../data/BaseDataBase';


export async function login(
   req: Request,
   res: Response
): Promise<void>{
    try {

        if(!req.body.email || !req.body.password){
            res.statusCode = 400;
            throw new Error("Preencha todos os campos")
        }

        const {email, password} = req.body //desestruturação
        
        // const sl = new SearchLogin();
        // const searchUsuárioLogin = sl.login(email);

        const [user] = await BaseDataBase.connection("cookenu_users")
        .where({email}) // const [user] = await BaseDataBase.connection("cookenu_users"):por padrão essa construção retorna todos os usários, por isso não é necessário colocar o .select, mas como só queremos aquele que corresponda ao email informado colocamos o .where({email})

        const hm = new HashManager();
        const passwordIsCorrect: boolean = await hm.compare(password, user.password)

        const auth = new Authenticator();
        const token = auth.generateToken(user.id)
        
        if(!passwordIsCorrect){
            res.statusCode = 401;
            throw new Error("Invalid credentials")
        }
        
        res.status(200).send(token)

    } catch (error) {
        if(res.statusCode === 200){
            res.status(500).send("Internal Server Error")
        } else{
            res.send(error.mensagem)
        }
    }
}