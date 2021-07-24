import { country } from './../types';
import { countries } from '../data';
import { Request, Response } from "express"; //importar para poder tipar


const getSearch = ( //recebe dois parâmetros. Sempre o request/req virá antes do response/res
    request: Request,              //tipagem que dá acesso aos métodos
    response: Response
): void => { //void, pois não o 'return' dentro das chaves
    let resultSearch: country[] = countries
    
    if(!request.query.name && !request.query.capital && !request.query.continent){
        response.statusMessage = 'Nenhum parametro foi passado'
        response.status(500).end()
        
    }

    if(request.query.name) {
        
        resultSearch = resultSearch.filter(
            country => country.name.includes(request.query.name as string)
        )
    } 
    console.log('params',request.params)

    if(request.query.capital) {
        resultSearch = resultSearch.filter(
            country => country.capital.includes(request.query.capital as string)
        )
    } 

    if(request.query.continent) {
        resultSearch = resultSearch.filter(
            country => country.continent.includes(request.query.continent as string)
        )
    } 

    
        response.status(200).send(resultSearch)
    
     
}
export default getSearch;


//principais propriedades do request ou req
//● req.headers - Parâmetros de cabeçalho
//● req.body - Parâmetros de corpo
//● req.query - Parâmetros de consulta => informações que são filtros. São passadas pela url colocando ? =>  (ex: https://endereco-da-api.com/users/busca?chave=valor) http://localhost:3003/countries?continent=Asia&name=br&name=a com o & é possível passar mais de uma parâmetro 
//● req.params - Parâmetros de caminho => path parameters (ex: https://endereco-da-api.com/users/1)