import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
// import micheline from './img/micheline.jpg'
// import fotoMicheline from './img/baciaCactos.jpg'
// import pipoca from './img/pipoca.jpg'
// import fotoPipoca from './img/pipocaGostoso.jpg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


class App extends React.Component {

  state = {
    postagens: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuário: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: "Micheline Barros",
        fotoUsuario: "./img/micheline.jpg",
        fotoPost: "./img/baciaCactos.jpg"
      },
      {
        nomeUsuario: "Pipoca Barros",
        fotoUsuário: "./img/pipoca.jpg",
        fotoPost: "./img/pipocaGostoso.jpg"
      },
      {
        nomeUsuario: "",
        fotoUsuário: "",
        fotoPost: ""
      }
    ]
  }


  render() {

    const linhaDoTempo = this.state.postagens.map((postar) => {
      return(
        <Post
        nomeUsuario = {postar.nomeUsuario}
        fotoUsuário = {postar.fotoUsuario}
        fotoPost = {postar.fotoPost} 
        />
      );
    });
    return (
      <MainContainer>
        {linhaDoTempo}
      </MainContainer>
    );
  }
}

export default App;
