import React from 'react';
import './index.css';
import TelaCadastro from './components/TelaCadastro';
import TelaLista from './components/TelaLista';


export default class App extends React.Component {
  state ={
    telaAtual:'cadastro' //premitirá a rederização de tela
  }

  alternaTela = () =>{
    switch (this.state.telaAtual){
      case 'cadastro': 
        return <TelaCadastro lista={this.irParaLista}/>
      case 'lista':
        return <TelaLista cadastro={this.irParaCadastro}/>
      default:
        return <p>Erro! Página não encontrada</p>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual:'cadastro'})
  }

  irParaLista = () => {
    this.setState({telaAtual: 'lista'})
  }

  render(){
    return (
      <div className='corpo'>
       
        {this.alternaTela()}
        <hr />
    
      </div>
    );
  }
}
 


