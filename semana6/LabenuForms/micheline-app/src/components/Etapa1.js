import React from 'react'



export default class Etapa1 extends React.Component {
    render (){
       
        return (
            <div>
                <h2> ETAPA 1 - DADOS GERAIS</h2>
                <ol>
                    <p>1. Qual o seu nome?</p>
                    <input />
                    <p>2. Qual sua idade?</p>
                    <input />
                    <p>3. Qual seu email?</p>
                    <input />
                    <p>4. Qual sua escolaridade?</p>
                    <input />
                    <select>
                        <option value="Ensino médio incompleto">Ensino médio incompleto</option>  
                        <option value="Ensino médio completo">Ensino médio completo</option>  
                        <option value="Ensino superior incompleto">Ensino superior incompleto</option>  
                        <option value="Ensino superiior completo">Ensino superior completo</option>  
                    </select> 
                </ol>
                <button onClick = {this.props.mudarEtapa}>Próxima etapa</button>
            </div>
        
        );
    
    }
}