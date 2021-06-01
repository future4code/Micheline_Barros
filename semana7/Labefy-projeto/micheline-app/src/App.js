import React from 'react'
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import CriarPlaylist from './components/CriarPlaylist'
import Home from './components/Home';
import ListaPlaylist from './components/ListaPlaylist';
import CardsMusicas from './components/CardsMusicas';
import DetalhesPlaylist from './components/DetalhesPlaylist';

export default class App extends React.Component {

  state = {
    telaAtual: 'listaPlaylist',
    idDetalhe: ''
  }

  alternaTela = () => {
    switch (this.state.telaAtual){
      case 'listaPlaylist':
        return <ListaPlaylist listaNomesPlaylist={this.state.listaPlay} criarPlaylist={this.irParaCriarPlaylist}  listaMusicas={this.irParaDetalhesPlaylist} idPlaylist={this.idPlaylist}/>
      case 'criarPlaylist' :
        return <CriarPlaylist  listaPlaylist={this.irParaListaPlaylist} idPlaylist={this.props.idPlaylist}/>
      case 'detalhesPlaylist':
        return <DetalhesPlaylist  listaPlaylist={this.irParaListaPlaylist} idPlaylist={this.idPlaylist}/>
      default:
        return <p>Erro inesperado! Página não encontrada</p>
    }
  }

 

  irParaListaPlaylist = () => {
    this.setState({telaAtual: 'listaPlaylist'})
  }

  irParaCriarPlaylist = () => {
    this.setState({telaAtual: 'criarPlaylist'})
  }

  irParaDetalhesPlaylist = (idPlaylist) => {
    this.setState({telaAtual: 'detalhesPlaylist'})
    this.setState({idDetalhe:idPlaylist})
    

  }




  render(){
    console.log('idPlay', this.state.idDetalhe)
  return (
      <div className="App">
        {this.alternaTela()}
      </div>
    );
  }
  
}


