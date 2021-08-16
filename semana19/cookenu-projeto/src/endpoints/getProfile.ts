import { Authenticator } from '../services/Authenticator';
import { Request, Response } from 'express';
import { BaseDataBase } from '../data/BaseDataBase';

export async function getProfile(
    req: Request, 
    res: Response
): Promise<void>{
    try {

        const token: string = req.headers.authorization!;
       
        const auth= new Authenticator()
        const tokenData = auth.getTokenData(token)
         
        if(tokenData === undefined ){
            res.status(500).send("entrou no Error")
        }

        const [user] = await BaseDataBase.connection("cookenu_users")
        .where({id: tokenData?.id});
       
        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email
        }) 
        

    } catch (error) {
        if(res.statusCode === 200){
            res.status(500).send("Internal Server Error")
            console.log("entrou aqui")
        } else{
            res.send(error.message)
        }
      
    }
}