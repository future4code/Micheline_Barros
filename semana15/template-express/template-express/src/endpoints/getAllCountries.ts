import { countries } from './../data';
import { Request, Response } from "express";

const paises = countries.map((pais) => {
    return(
        {
            "id": pais.id,
            "name": pais.name
        }  
    )
})

const getAllCountries = ( //recebe dois parâmetros. Sempre o request/req virá antes do response/res
    request: Request,              //tipagem que dá acesso aos métodos
    response: Response
) => {
    response.send(paises)
}
export default getAllCountries;