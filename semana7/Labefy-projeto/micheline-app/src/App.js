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
    telaAtual: 'home'
  }

  alternaTela = () => {
    switch (this.state.telaAtual){
      case 'home' :
        return <Home listaPlaylist={this.irParaListaPlaylist}/>
      case 'listaPlaylist':
        return <ListaPlaylist criarPlaylist={this.irParaCriarPlaylist} home={this.irParaHome} listaMusicas={this.irParaDetalhesPlaylist}/>
      case 'criarPlaylist' :
        return <CriarPlaylist home={this.irParaHome} listaPlaylist={this.irParaListaPlaylist}/>
      case 'detalhesPlaylist':
        return <DetalhesPlaylist home={this.irParaHome} listaPlaylist={this.irParaListaPlaylist}/>
      default:
        return <p>Erro inesperado! Página não encontrada</p>
    }
  }

  irParaHome = () => {
    this.setState({telaAtual: 'home'})
  }

  irParaListaPlaylist = () => {
    this.setState({telaAtual: 'listaPlaylist'})
  }

  irParaCriarPlaylist = () => {
    this.setState({telaAtual: 'criarPlaylist'})
  }

  irParaDetalhesPlaylist = () => {
    this.setState({telaAtual: 'detalhesPlaylist'})
  }




  render(){
    return (
      <div className="App">
        {this.alternaTela()}
      </div>
    );
  }
  
}


