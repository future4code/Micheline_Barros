import React from 'react'
import '../App.css';
import styled from 'styled-components';
import axios from 'axios';

const URL_BASE = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

export default class CriarPlaylist extends React.Component{

    state ={
        playlist:[],
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
        const body = {
            name: this.state.inputPlayList
        }
        axios.post(URL_BASE, body, header)
        .then((res) => {
            console.log('play adicionada')
            this.setState({playlist: res.data})
            this.setState({inputPlayList:''});
            console.log(this.state.inputPlayList)
        })
        .catch((err) => {
            console.log (err.response.data)
        })
    }

    render (){
            return (
                <div>
                    <h2>Nova playlist</h2>
                    <input placeholder='digite o nome da Playlist' onChange={this.handleNameList} value={this.state.inputPlayList}/>
                    <button onClick={this.createPlaylist}>SALVAR</button>
                </div>
            );
    }
 
}

