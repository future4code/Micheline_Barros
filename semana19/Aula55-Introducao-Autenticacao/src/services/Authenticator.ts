import { AuthenticationData } from './../types';
import * as jwt from "jsonwebtoken";


export class Authenticator {

    generateToken(info: AuthenticationData): string{
        const token = jwt.sign(
            {id: info.id},
            process.env.JWT_KEY as string,
            {expiresIn:"3d"}
        )
        return token;
    }
}