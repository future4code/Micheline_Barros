import React from 'react'
import styled from "styled-components";


const Botao = styled.button `
margin-top: 15px;
`



export default class Etapa2 extends React.Component {
    render (){
        
        return (
            <div>
                <h2> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <div>
                    <p>5. Qual curso?</p>
                    <input />
                    <p>6. Qual a unidade de ensino?</p>
                    <input />
                </div>
                <Botao onClick = {this.props.mudarEtapa}>Próxima etapa</Botao>
            </div>
        );
    
    }
}