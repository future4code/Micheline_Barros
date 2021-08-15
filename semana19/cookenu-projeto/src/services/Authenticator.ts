import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";


export class Authenticator { //gerar o token
    generateToken(info:AuthenticationData): string{
        const token = jwt.sign(
            {info},
            process.env.secret as string,
            {expiresIn: "7d"}
        )
        return token;
    }
    getTokenData(token: string) { //lê e verifica se é válido
        const payload = jwt.verify(
            token,
            process.env.secret  as string
        );
        return payload
    }
}
