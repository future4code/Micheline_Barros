import React from 'react'
import '../App.css';
import styled from 'styled-components';
import axios from 'axios';
import Playlist from './CriarPlaylist';

const DivContainer = styled.div `
    display: flex;
`
const BordaDiv = styled.div`
    border: 1px solid black;
    box-sizing: border-box;
    margin-left: 10px;
    padding:8px;
    width: 20vw;
    height: 400px;
    input{
        margin-top: 70px;
    }
`
const ListaMusicas = styled.div `
display: flex;
justify-content: space-between;
border: 2px solid purple;
width: 300px;
padding: 10px;
margin:auto;
/* button{
    height:30px;
    border: none;
    background-color: Transparent;
    cursor:pointer;
    overflow: hidden;
};
img{
    height:28px;
    width:28px;
    margin: auto;
} */
`
const DivPlaylist = styled.div `
padding-right: 370px;
flex-grow: 1;
`


const URL_BASE = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

export default class DetalhesPlaylist extends React.Component{

    state ={
        listaMusicas: []
    }

    // componentDidMount(){
    //     this.getAllPlaylists();
    //   }

    getPlaylistTracks = (id) => {
        const header = {
            headers:{
                Authorization:'micheline-barros-paiva'
            }
        };
        axios.get(`${URL_BASE}/${id}`, header)
        .then((res) => {
            console.log('')
            this.setState({listaMusicas: res.data.result.list});
            console.log(this.state.listaMusicas)
            
        })
        .catch((err) => {
            console.log (err)
        })
    }

    // deletePlaylist = (id) => {
    //     const header = {
    //         headers:{
    //             Authorization:'micheline-barros-paiva'
    //         }
    //     };
    //     axios.delete(`${URL_BASE}/${id}`, header)
    //     .then((res) =>{
    //         alert('Playlist excluída.');
    //         this.getAllPlaylists();
    //     })
    //     .catch((err) => {
    //         alert('Ocorreu um erro inexperado. Tente novamente.')
    //     });
    // };

    render (){
        const listaMusicasDaPlay = this.state.listaMusicas.map((nome) =>{
            return(
                <ListaMusicas key={nome.id}>{nome.name}{nome.artist}</ListaMusicas>
            )   
        })
         return (
             <div>
           
                <h2>Músicas na Playlists</h2>
                <button onClick={this.props.listaPlaylist}>Playlist</button>
                <button onClick={this.props.home}>Home</button>
                <hr />
                <DivContainer>
                    <BordaDiv>
                        <label>Nome da música:  </label>
                        <input ></input><br/><br/>
                        <label>Cantor ou banda:  </label>
                        <input></input><br/><br/>
                        <label>URL da música:  </label>
                        <input></input>
                    </BordaDiv>
                    <DivPlaylist>
                        <h3>Playlists</h3>
                        {listaMusicasDaPlay}
                    </DivPlaylist>
                </DivContainer>
            </div>
        );
    }
 
}

