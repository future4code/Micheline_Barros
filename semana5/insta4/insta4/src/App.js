import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import micheline from './img/micheline.jpg'
import fotoMicheline from './img/baciaCactos.jpg'
import pipoca from './img/pipoca.jpg'
import fotoPipoca from './img/pipocaGostoso.jpg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


class App extends React.Component {

  state = {
    postagem: []
  }


  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Micheline Barros'}
          fotoUsuario={micheline}
          fotoPost={fotoMicheline}
        />
        <Post
          nomeUsuario={'Pipoca Barros'}
          fotoUsuario={pipoca}
          fotoPost={fotoPipoca}
        />
      </MainContainer>
    );
  }
}

export default App;
