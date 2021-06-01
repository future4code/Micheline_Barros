import React from "react";
import './index.css'
import styled from "styled-components";
import axios from 'axios';


const AreaMensagem= styled.div`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  activity:{},
  inputPesquisa:''
}

gerarAleatoria = () =>{
  axios.get(URL_BASE)
    .then((res) => {
     console.log(res.data)
      this.setState({activity:res.data})
      alert(res)
    })
    .catch((err) => {
      alert(err)
    })
}

pesquisarAtividade = () =>{
  axios.get(`http://www.boredapi.com/api/activity?type=${this.state.inputPesquisa}`)
    .then((res) => {
     console.log(res.data)
      this.setState({activity:res.data})
      console.log('entrou')
      
    })
    .catch((err) => {
      alert(err.error)
      console.log('Seu erro foi',err)
      console.log('entrou')
    })
}

handlePesquisa = (event) => {
  this.setState({inputPesquisa: event.target.value})
}

 render(){
   
   return(
     
        <AreaMensagem>
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
            <hr />
            <input placeholder='pesquise por atividade' onChange={this.handlePesquisa} value={this.state.inputPesquisa}></input>
            <button onClick={this.pesquisarAtividade}>Pesquisar</button>
          </Atividade>
          
        </AreaMensagem>
     
   );
 }
}



