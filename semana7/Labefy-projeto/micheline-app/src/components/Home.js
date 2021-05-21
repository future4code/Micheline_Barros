import React from 'react'
import '../App.css';
import styled from 'styled-components';
import axios from 'axios';

export default class Home extends React.Component{
    render() {
        return (
            <div >
            <h3>Todos os canais</h3>
            <p>Destaques</p>
            <p>Gêneros</p>
            <button onClick={this.props.listaPlaylist}>Playlists</button>
            </div>
        );
    }
  
}

