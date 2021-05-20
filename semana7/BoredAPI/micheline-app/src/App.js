import React from "react";
import styled from "styled-components";
import axios from 'axios';


const ContainerArea= styled.div`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  box-sizing: border-box;
  width: 37.5rem;
  box-shadow: 5px 5px 15px -5px #000000;
  background-color: pink;
  button{
    width:100px;
    margin: auto;
  }
`
const Atividade = styled.div`
  padding: 20px;
  `


const URL_BASE = "https://www.boredapi.com/api/activity/"

export default class App extends React.Component {
  
state = {
  activity:{}
}

gerarAleatoria = () =>{
  axios.get(URL_BASE)
    .then((res) => {
     console.log(res.data)
      this.setState({activity:res.data})
    })
    .catch((err) => {
      alert(err)
    })
}

 render(){
   
   return(
     <ContainerArea>
       <h1>Está entediado?</h1>
       <p>Clique no botão e vamos lhe sugerir uma atividade para realizar.</p>
       <button onClick={this.gerarAleatoria}>Click Aqui</button>
       <hr/>
       <Atividade> 
        <h3>A atividade sugerida é:</h3>
        <p>Nome: {this.state.activity.activity}</p>
        <p>Tipo: {this.state.activity.type}</p>
        <p>Participantes: {this.state.activity.participants}</p>
        <p>Preço: ${this.state.activity.price}</p>
       </Atividade>
      
     </ContainerArea>
   );
 }
}



