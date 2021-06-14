import React from 'react'
import styled from 'styled-components'
import Router from './router/Router'


const AreaMensagem= styled.div`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  color: white;
  box-sizing: border-box;
  width: 40vw;
  box-shadow: 5px 5px 15px -5px #000000;
  background-color: #4c6ead;
`
const Container = styled.div `
  font-family: sans-serif;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

function App() {
  return (
    <AreaMensagem>
    <Container>

      <Router />
      
    </Container>
    </AreaMensagem>
  );
}

export default App;
