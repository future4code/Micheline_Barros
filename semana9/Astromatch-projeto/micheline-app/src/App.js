import React, { useState } from 'react'
import TelaMatches from './components/TelaMatches/TelaMatches'
import TelaPerfis from './components/TelaPerfis/TelaPerfis'


function App() {
  const [trocaTela, setTrocaTela] = useState('telaPerfil')

  const retornaTela = () => {
    switch (trocaTela){
      case "telaPerfil":
        return <TelaPerfis telaMatches={irParaTelaMatches} />
      case 'telaMatches':
        return <TelaMatches telaPerfis={irParaTelaPerfis} />  
      default:
        return <TelaPerfis />
    }
  }

  const irParaTelaPerfis = () => {
    setTrocaTela("telaPerfil")
  }

  const irParaTelaMatches = () => {
    setTrocaTela('telaMatches')
  }

  return (
    <>
      {retornaTela()}
    </>
  );
}

export default App;
