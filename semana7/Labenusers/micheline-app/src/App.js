import React from 'react';
import './index.css';
import axios from 'axios';



export default class App extends React.Component {
  state ={
    name:''
  }



  render(){
     return (
    <div className='corpo'>
      <h2>Labenusers</h2>
      <button>Trocar de página</button>
      <hr />
      <h3>Criar usuário</h3>
      <input placeholder='nome'/>
      <input placeholder='E-mail'/>

      
    </div>
  );
}
  }
 


