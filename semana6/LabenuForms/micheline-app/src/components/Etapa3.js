import React from 'react'
import styled from "styled-components";


const Imput6 = styled.input `
margin-bottom: 15px;
`
const Botao = styled.button `
margin-top: 15px;
`



export default class Etapa3 extends React.Component {
    render (){
        return (
            <div>
                <h2> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <div>
                    <p>5. Por que você não terminou um curso de graduação?</p>
                    <input />
                    <p>6. Você fez algum curso complementar?</p>
                    <Imput6 />
                    <br />
                    <select>
                        <option value="Nenhum">Nenhum</option>  
                        <option value="Curso técnico">Curso técnico</option>  
                        <option value="Curso de Inglês">Curso de Inglês</option>  
                    </select> 
                </div>
                <Botao onClick = {this.props.mudarEtapa}>Próxima etapa</Botao>
            </div>
        
        );
    
    }
}