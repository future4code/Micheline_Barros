import React from "react";
import axios from 'axios';
import styled from 'styled-components'

const ContainerUsers = styled.div `
border: 1px solid pink;
padding: 10px;
margin: 10px;
width:300px;
display: flex;
justify-content: space-between;
`
// const DivList = styled.div `
// text-align:center;
// margin:auto;
// `


const URL_BASE = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

export default class TelaLista extends React.Component{
state = {
    listaUsuarios:[]
}

componentDidMount(){
    this.getAllUsers();
  }


getAllUsers = () => { //mostra informações dos usuários como nome e email
    const header = {
      headers:{
        Authorization: "micheline-barros-paiva"
      }
    };
  
    axios.get(URL_BASE, header)
    .then((res) => {
      this.setState({listaUsuarios: res.data});
      console.log(res)
    })
    .catch((err) => {
      alert(err.response.data);
      console.log(err)
    });
  };

  deleteUser = (id) => { 
  const header = {
    headers:{
      Authorization: "micheline-barros-paiva"
    }
  };

  axios.delete(`${URL_BASE}/${id}`, header)
  .then((res) => {
      alert('Usuário removido.')
      this.getAllUsers();
   
  })
  .catch((err) => {
    alert('Ocorreu um erro.');
       
  });
};



    render(){
        const listaDeUsuarios = this.state.listaUsuarios.map((usuario) => {
            return(
              <ContainerUsers key={usuario.id}>{usuario.name}<button onClick={() => this.deleteUser(usuario.id)}>remover</button></ContainerUsers>
              
            )
          });
        return(
            <div>
            <h2>Labenusers</h2>
            <button onClick={this.props.cadastro}>Trocar de página</button>
             <hr />
            <h3>Lista de usuários</h3>
            <div>{listaDeUsuarios}</div>
               
            </div>
        )
    }
}





