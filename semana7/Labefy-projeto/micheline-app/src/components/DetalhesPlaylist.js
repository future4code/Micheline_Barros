import React from 'react'
import '../App.css';
import styled from 'styled-components';
import axios from 'axios';
import Playlist from './CriarPlaylist';

const DivContainer = styled.div `
    display: flex;
`
const ListaMusicas = styled.div `
display: flex;
justify-content: space-between;
border: 2px solid purple;
width: 300px;
padding: 10px;
margin:auto;
`
const DivPlaylist = styled.div `
padding-right: 370px;
flex-grow: 1;
`



const URL_BASE = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

export default class DetalhesPlaylist extends React.Component{

    state ={
        listaMusicas: [{
            name:'grito',
            artist:'desconhecido',
            url:'http://spoti4.future4.com.br/1.mp3'
        }],
        
    }

    componentDidMount(){
        this.getPlaylistTracks();
        
      }


    getPlaylistTracks = (idPlaylist) => {
        console.log("id detalhe",idPlaylist)
        const header = {
            headers:{
                Authorization:'micheline-barros-paiva'
            }
        };
        axios.get(`${URL_BASE}/${idPlaylist}/tracks`, header)
        .then((res) => {
            console.log(res)
            this.setState({listaMusicas: res.data.result.list});
            this.getPlaylistTracks();
            
        })
        .catch((err) => {
            console.log (err)
            console.log('entrou no erro')
        })
    }

    

    render (){
        console.log('o estado', this.state.listaMusicas)

        const listaMusicasDaPlay = this.state.listaMusicas.map((musica) =>{
            
                return(
                <ListaMusicas key={musica.id}>
                    {musica.name}  -  {musica.artist }
                    <audio controls='conrols'>
                        <source src={musica.url} type='audio/ogg' />
                    </audio>
                </ListaMusicas>
            )   
        })
         return (
             <div>
           
                <h2>Músicas na Playlists</h2>
                <button onClick={this.props.listaPlaylist}>Playlist</button>
               
                <hr />
                <DivContainer>
                    <DivPlaylist>
                        <h3>Playlists</h3>
                        {listaMusicasDaPlay}
                    </DivPlaylist>
                </DivContainer>
                
            </div>
        );
    }
 
}


                            