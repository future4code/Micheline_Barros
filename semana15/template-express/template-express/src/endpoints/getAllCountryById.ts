import { country } from './../types';
import { countries } from './../data';
import { Request, Response } from "express"; //importar para poder tipar


const getAllCountryById = ( //recebe dois parâmetros. Sempre o request/req virá antes do response/res
    request: Request,              //tipagem que dá acesso aos métodos
    response: Response
): void => { //void, pois não o 'return' dentro das chaves
    const countriesByIdOrName: country | undefined = countries.find(
        country => (country.id.toString() === request.params.idOrName || country.name === request.params.idOrName)
    )
    response.send(countriesByIdOrName)
}
export default getAllCountryById;













//principais propriedades do request ou req
//● req.headers - Parâmetros de cabeçalho
//● req.body - Parâmetros de corpo
//● req.query - Parâmetros de consulta => informações que são filtros. São passadas pela url colocando ? =>  (ex: https://endereco-da-api.com/users/busca?chave=valor) http://localhost:3003/countries?continent=Asia&name=br&name=a com o & é possível passar mais de uma parâmetro 
//● req.params - Parâmetros de caminho => path parameters (ex: https://endereco-da-api.com/users/1)