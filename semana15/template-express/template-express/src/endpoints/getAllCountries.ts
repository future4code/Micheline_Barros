import { Request, Response } from "express";

const getAllCountries = ( //recebe dois parâmetros. Sempre o request/req virá antes do response/res
    request: Request,              //tipagem que dá acesso aos métodos
    response: Response
) => {
    response.send('Hello from express')
}
export default getAllCountries;