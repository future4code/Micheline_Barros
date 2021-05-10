import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import EtapaFinal from './components/EtapaFinal'

export default class App extends React.Component {
  state = {
    pagina:'Etapa1'
  }
  render (){
    if (this.state.pagina ==='Etapa1'){
    return (
      <div>
        <Etapa1 />
      </div>
    );
    } else {
        return(
          <div>
            <Etapa2 />
          
          </div>
        );
      }
  }
}
