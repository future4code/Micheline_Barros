import React from 'react';
import './index.css';
import axios from 'axios';

const URL_BASE = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

export default class App extends React.Component {
  state ={
   listaUsuarios:[],
   inputName:'',
   inputEmail:''
  }

inputNome = (event) => {
  this.setState({inputName: event.target.value})
}
teclaEnter = (event) => {
  if (event.keyCode === 13){ //essa função serve pra habilitar o uso do enter pra ativar o botão criar usuário, onde o key.code 13é o código que identifica a tecla enter
    this.criarUsuario();
  }
}

criarUsuario = () => {
  const header ={
    headers:{
      Authorization: "micheline-paiva"
    }
  };

  const body = {
    name:this.state.inputName,
    email: this.state.inputEmail
  }

  axios.post(`${URL_BASE}/users`, body, header).then(() =>{ //o body sempre tem que ser o segundo elemento a ser inserido
    alert('Usuário adicionado com sucesso');
    this.setState({inputName:''}); //limpar o campo de input
    this.setState({inputEmail:''}) //limpar o campo de input
    criarUsuario(); //chamo minha função no final pra atualizar meu estado
  })



}


  render(){
     return (
    <div className='corpo'>
      <h2>Labenusers</h2>
      <button>Trocar de página</button>
      <hr />
      <h3>Criar usuário</h3>
      <input placeholder='nome' onChange={this.inputNome} value={this.state.inputName} onKeyDown = {this.teclaEnter}/>
      <input placeholder='E-mail'/>
      <button>criar</button>

      
    </div>
  );
}
  }
 


