import { sign, verify}  from "jsonwebtoken";
import { AuthenticationData } from "../types";
import { config } from "dotenv"

config();

export class Authenticator { //gerar o token
    generateToken = (info:AuthenticationData): string =>{
    console.log("entrou no auth")

        const token = sign(
            {info},
            process.env.secret as string,
            {expiresIn: "7d"}
           
        )
        return token;
    }
   getTokenData = (token: string): AuthenticationData => { //lê e verifica se é válido
        console.log("entrou no getToken")
        const {id} = verify(
            token,
            process.env.secret as string 
        )as AuthenticationData;
        console.log("verify",verify)
        console.log("token tokenData",token)
        console.log("id tokenData",{id})
        return {id}
    }
}



