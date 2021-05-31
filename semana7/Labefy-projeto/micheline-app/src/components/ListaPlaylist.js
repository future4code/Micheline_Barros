import React from 'react'
// import '../App.css';
// import styled from 'styled-components';
// import axios from 'axios';
// import Playlist from './CriarPlaylist';
// import DetalhesPlaylist from './DetalhesPlaylist';



// const ListaPlay = styled.div `
// display: flex;
// justify-content: space-between;
// border: 2px solid purple;
// width: 500px;
// padding: 10px;
// margin:auto;
// button{
//     height:30px;
//     border: none;
//     background-color: Transparent;
//     cursor:pointer;
//     overflow: hidden;
// };
// img{
//     height:28px;
//     width:28px;
//     margin: auto;
// }
// .b1{ 
// }
// `

// const BordaDiv = styled.div`
//     label{
        
//         margin-left:30px;
//     }
// `

// const URL_BASE = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

// export default class ListaPlaylist extends React.Component{

//     state ={
//         listaPlay: [],
//         inputMusica: '',
//         inputArtist: '',
//         inputUrl: ''
//     }

//     componentDidMount(){
//         this.getAllPlaylists();
//         this.addTrackToPlaylist();
      
//       }

//     getAllPlaylists = () => {
//         const header = {
//             headers:{
//                 Authorization:'micheline-barros-paiva'
//             }
//         };
//         axios.get(URL_BASE, header)
//         .then((res) => {
//             this.setState({listaPlay: res.data.result.list});
//             console.log(res.data)
//         })
//         .catch((err) => {
//             console.log (err)
           
//         })
//     }

//     deletePlaylist = (id) => {
//         const header = {
//             headers:{
//                 Authorization:'micheline-barros-paiva'
//             }
//         };
//         axios.delete(`${URL_BASE}/${id}`, header)
//         .then((res) =>{
//             alert('Playlist excluída.');
//             this.getAllPlaylists();
//         })
//         .catch((err) => {
//             alert('Ocorreu um erro inexperado. Tente novamente.')
//         });
//     };


//     handleMusicas = (event) =>{
//         this.setState({inputMusica: event.target.value})
//     }
    
//     handleArtists = (event) =>{
//         this.setState({inputArtist: event.target.value})
//     }

//     handleUrls = (event) =>{
//         this.setState({inputUrl: event.target.value})
//     }

//     addTrackToPlaylist = (id) => {
//         const header = {
//             headers:{
//                 Authorization:'micheline-barros-paiva'
//             }
//         };
//         const body = {
//             name: this.state.inputMusica,
//             artist: this.state.inputArtist,
//             url: this.state.inputUrl
//         }
//         axios.post(`${URL_BASE}/${id}/tracks`, body, header)
//         .then((res) => {
//             alert('Música adicionada')
//             // this.setState({inputPlayList:''});
//             console.log(this.state.inputMusica)
//         })
//         .catch((err) => {
//             console.log (err.response.data.message)
//         })
//     }
   

  

//     render (){
//         const listaPlayLista = this.state.listaPlay.map((playlist) =>{
//             console.log('esse aqui',playlist.id)
//             return(
//                 <div key={playlist.id}>
//                     <ListaPlay  key={playlist.id} idPlaylist={playlist.id}>
//                         {playlist.name}
//                         <button className='b1' onClick={() => this.listaMusicas(playlist.id)}><img src='https://image.flaticon.com/icons/png/512/2404/2404847.png'/></button><button onClick={() => this.addTrackToPlaylist(playlist.id)}><img src='https://img-premium.flaticon.com/png/512/2404/2404891.png?token=exp=1621825946~hmac=83751819e2693983e1f3f48f0eec3955'/></button>
//                         <button onClick={() => this.deletePlaylist(playlist.id)}><img src="https://image.flaticon.com/icons/png/512/4028/4028613.png" /></button>
//                     </ListaPlay>
                    
//                 </div>
                
                
//             )  
            
//         })

//          return (
            
//             <div>
                
//                 <h2>Playlists</h2>
//                 <button onClick={this.props.criarPlaylist}>Nova Playlist</button>
                
                
//                 <hr />
//                 <BordaDiv>  
//                     <p>Adicionar Mísicas as Playlitsts</p>
//                         <label>Nome da música:  </label>
//                         <input onChange={this.handleMusicas} value={this.state.inputMusica}></input>
//                         <label>Cantor ou banda:  </label>
//                         <input onChange={this.handleArtists} value={this.state.inputArtist}></input>
//                         <label>URL da música:  </label>
//                         <input onChange={this.handleUrls} value={this.state.inputUrl}></input>
                        
//                 </BordaDiv>
//                 <hr />
//                 <h3>Playlists</h3>
//                 <div>
//                     {listaPlayLista}
                    
//                 </div>

                
//             </div>
//         );
//     }
 
// }

