import React from 'react'



export default class Etapa2 extends React.Component {
    render (){
        
        return (
            <div>
                <h2> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <ol>
                    <p>5. Qual curso?</p>
                    <input />
                    <p>6. Qual a unidade de ensino?</p>
                    <input />
                    
                </ol>
                <button onClick = {this.props.mudarEtapa}>Próxima etapa</button>
            </div>
        
        );
    
    }
}