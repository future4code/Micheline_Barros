import * as jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import { authenticationData } from "../type/typeUsers/typeUsers"

dotenv.config()

export const generateToken = (
   payload: authenticationData
): string => {
   return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
         expiresIn: "24min"
      }
   )
}

export const getTokenData = (
   token: string
): authenticationData => {
   return jwt.verify(
      token,
      process.env.JWT_KEY as string
   ) as authenticationData
}