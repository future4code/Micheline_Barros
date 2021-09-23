import { user } from '../types';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { Response, Request } from 'express';
import { BaseDataBase } from '../data/BaseDataBase';
import { SearchLogin } from '../data/SearchLogin';


export async function loginTeste(
   req: Request,
   res: Response
): Promise<void>{
    try {

        if(!req.body.email || !req.body.password){
            res.statusCode = 400;
            throw new Error("Preencha todos os campos")
        }

        const {email, password} = req.body //desestruturação
        
        const sl = new SearchLogin();

        const searchUsuárioLogin = await sl.login(email);

        const hm = new HashManager();
        const passwordIsCorrect: boolean = await hm.compare(password, searchUsuárioLogin.user.password)

        const auth = new Authenticator();
        const token = auth.generateToken(searchUsuárioLogin.user.id)
        
        if(!passwordIsCorrect){
            res.statusCode = 401;
            throw new Error("Invalid credentials")
        }
        
        res.status(200).send({token: token})

    } catch (error) {
        if(res.statusCode === 200){
            
            res.status(500).send("Internal Server Error")
        } else{
            res.send(error.mensagem)
        }
    }
}