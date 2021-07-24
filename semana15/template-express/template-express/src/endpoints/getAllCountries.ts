import { countries } from './../data';
import { Request, Response } from "express"; //importar para poder tipar

const country = countries.map((coun) => {
    return(
        {
            "id": coun.id,
            "name": coun.name
        }  
    )
})

const getAllCountries = ( //recebe dois parâmetros. Sempre o request/req virá antes do response/res
    request: Request,              //tipagem que dá acesso aos métodos
    response: Response
): void => { //void, pois não o 'return' dentro das chaves
    response.status(200)
    response.send(country)
}
export default getAllCountries;

//principais propriedades do request ou req
//● req.headers - Parâmetros de cabeçalho
//● req.body - Parâmetros de corpo
//● req.query - Parâmetros de consulta => informações que são filtros. São passadas pela url colocando ? =>  (ex: https://endereco-da-api.com/users/busca?chave=valor) http://localhost:3003/countries?continent=Asia&name=br&name=a com o & é possível passar mais de uma parâmetro 
//● req.params - Parâmetros de caminho => path parameters (ex: https://endereco-da-api.com/users/1)