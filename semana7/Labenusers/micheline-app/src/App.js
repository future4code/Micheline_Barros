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
  componentDidMount(){
    this.getAllUsers();
  }

handleName = (event) => {
  this.setState({inputName: event.target.value})
  console.log("handleName", event.target.value)
}
// teclaEnter = (event) => {
//   if (event.keyCode === 13){ //essa função serve pra habilitar o uso do enter pra ativar o botão criar usuário, onde o key.code 13é o código que identifica a tecla enter
//     this.criarUsuario();
//   }
// }

handleEmail = (event) => {
  this.setState({inputEmail: event.target.value})
  console.log("handleName", event.target.value)
}

criarUsuario = () => {
  const header ={
    headers:{
      Authorization: "micheline-barros-paiva"
    }
  };

  const body = {
    name: this.state.inputName,
    email: this.state.inputEmail
  }

  axios.post(URL_BASE, body, header).then(() =>{ //o body sempre tem que ser o segundo elemento a ser inserido
    alert('Usuário adicionado com sucesso');
    // this.setState({inputName:''}); //limpar o campo de input
    // this.setState({inputEmail:''}) //limpar o campo de input
    this.getAllUsers(); //chamo minha função no final pra atualizar meu estado
  })
  .catch((err) => {
   alert(err.response.data);
  });
};

getAllUsers = () => { //mostra informações dos usuários como nome e email
  const header = {
    headers:{
      Authorization: "micheline-barros-paiva"
    }
  };

  axios.get(URL_BASE, header)
  .then((res) => {
    this.setState({listaUsuarios: res.data});
  })
  .catch((err) => {
    alert(err.response.data);
    console.log(err)
  });
};


  render(){
    const listaDeUsuarios = this.state.listaUsuarios.map((usuario) => {
      return(
        <li key = {usuario.id}>{usuario.name}</li>
      )
    });
    console.log('entrou na lista')
    console.log(listaDeUsuarios)
    return (
      <div className='corpo'>
        <h2>Labenusers</h2>
        <button>Trocar de página</button>
        <hr />
        <h3>Criar usuário</h3>
        <input placeholder='nome' onChange={this.handleName} value={this.state.inputName} />
        <input placeholder='E-mail' onChange={this.handleEmail} value={this.state.inputEmail} />
        <button onClick={this.criarUsuario} >criar</button>
        <div>{listaDeUsuarios}</div>

      </div>
    );
  }
}
 


