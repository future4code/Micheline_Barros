import { sign, verify}  from "jsonwebtoken";
import { AuthenticationData } from "../types";
import { config } from "dotenv"

config();
//gerar o token
export class Authenticator { 
   generateToken = (info:AuthenticationData): string => sign(
            {info},
            process.env.secret!,
            {expiresIn: "7d"}
           
        );
      
    //lê e verifica se é válido
   getTokenData = (token: string): AuthenticationData => { 
        console.log("entrou no getToken")
      
            const {info} = verify(
            token,
            process.env.secret!
        )as AuthenticationData
       
        console.log("id tokenData",{info})
        return {info}
        
    }
}


