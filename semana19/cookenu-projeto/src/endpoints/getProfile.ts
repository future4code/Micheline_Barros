import { Profile } from './../data/Profile';
import { Authenticator } from '../services/Authenticator';
import { Request, Response } from 'express';


export async function getProfile(
    req: Request, 
    res: Response
): Promise<void>{
    try {

        const token: string = req.headers.authorization!;
       
        const auth= new Authenticator()
        const tokenData = auth.getTokenData(token)
        
        const id = tokenData.info

        const p = new Profile();

        const pp = await p.profile(id);
        
        res.status(200).send({
            id: pp.user.id,
            name: pp.user.name,
            email: pp.user.email
        }) 
        

    } catch (error) {
        if(res.statusCode === 200){
            res.status(500).send("Internal Server Error")
    
        } else{
            res.send(error.message)
        }
      
    }
}