import React from 'react'
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import CriarPlaylist from './components/CriarPlaylist'
import Home from './components/Home';
import ListaPlaylist from './components/ListaPlaylist';
import CardsMusicas from './components/CardsMusicas';

export default class App extends React.Component {

  state = {
    telaAtual: 'home'
  }

  alternaTela = () => {
    switch (this.state.telaAtual){
      case 'home' :
        return <Home listaPlaylist={this.irParaListaPlaylist}/>
      case 'listaPlaylist':
        return <ListaPlaylist criarPlaylist={this.irParaCriarPlaylist} home={this.irParaHome}/>
      case 'criarPlaylist' :
        return <CriarPlaylist home={this.irParaHome} listaPlaylist={this.irParaListaPlaylist}/>
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



  render(){
    return (
      <div className="App">
        {this.alternaTela()}
      </div>
    );
  }
  
}


