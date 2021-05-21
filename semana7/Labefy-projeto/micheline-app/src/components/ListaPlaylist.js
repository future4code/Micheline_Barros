import React from 'react'
import '../App.css';
import styled from 'styled-components';
import axios from 'axios';
import Playlist from './CriarPlaylist';

const URL_BASE = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

export default class ListaPlaylist extends React.Component{

    state ={
        inputPlayList: ''
    }

    handleNameList = (event) =>{
        this.setState({inputPlayList: event.target.value})
    }

    createPlaylist = () => {
        
        const header = {
            headers:{
                Authorization:'micheline-barros-paiva'
            }
        };
        axios.post(URL_BASE, header)
        .then((res) => {
            console.log('lista')
            this.setState({inputPlayList:''});
            console.log('ESTÁ TUDO OK')
        })
        .catch((err) => {
            console.log (err.response.data)
        })
    }

    render (){
         return (
            <div>
                <h2>Playlists</h2>
                <button onClick={this.props.criarPlaylist}>Nova Playlist</button>
            </div>
        );
    }
 
}

