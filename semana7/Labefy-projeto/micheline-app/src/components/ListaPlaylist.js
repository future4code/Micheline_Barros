import React from 'react'
import '../App.css';
import styled from 'styled-components';
import axios from 'axios';
import Playlist from './CriarPlaylist';


const ListaPlay = styled.div `
display: flex;
justify-content: space-between;
border: 2px solid purple;
width: 300px;
padding: 10px;
margin:auto;
`

const URL_BASE = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

export default class ListaPlaylist extends React.Component{

    state ={
        listaPlay: []
    }

    componentDidMount(){
        this.getAllPlaylists();
      }

    getAllPlaylists = () => {
        const header = {
            headers:{
                Authorization:'micheline-barros-paiva'
            }
        };
        axios.get(URL_BASE, header)
        .then((res) => {
            console.log('lista')
            this.setState({listaPlay: res.data.result.list});
            console.log(this.state.listaPlay)
            
        })
        .catch((err) => {
            console.log (err)
        })
    }

    deletePlaylist = (id) => {
        const header = {
            headers:{
                Authorization:'micheline-barros-paiva'
            }
        };
        axios.delete(`${URL_BASE}/${id}`, header)
        .then((res) =>{
            alert('Playlist excluída.');
            this.getAllPlaylists();
        })
        .catch((err) => {
            alert('Ocorreu um erro inexperado. Tente novamente.')
        });
    };

    render (){
        const listaPlayLista = this.state.listaPlay.map((nome) =>{
            return(
                <ListaPlay key={nome.id}>{nome.name}<button onClick={() => this.deletePlaylist(nome.id)}>Excluir</button></ListaPlay>
            )   
        })
         return (
            <div>
                <h2>Playlists</h2>
                <button onClick={this.props.criarPlaylist}>Nova Playlist</button>
                <button onClick={this.props.home}>Home</button>
                <hr />
                <h3>Playlists</h3>
                <div>
                    {listaPlayLista}
                </div>
            </div>
        );
    }
 
}

