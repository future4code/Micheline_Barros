import * as jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import { authenticationData } from "../type/typeUsers/typeUsers"

dotenv.config()

export class Authenticator {
   generateToken = (
      payload: authenticationData
   ): string => {
      return jwt.sign(
         payload,
         process.env.JWT_KEY as string,
         {
            expiresIn: process.env.EXPIRES_IN
         }
      )
   }

   getTokenData = (
      token: string
   ): authenticationData => {
      return jwt.verify(
         token,
         process.env.JWT_KEY as string
      ) as authenticationData
   }

}

