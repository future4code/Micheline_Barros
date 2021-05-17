import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import EtapaFinal from './components/EtapaFinal'

export default class App extends React.Component {
  state = {
    pagina:'Etapa1'
  };

  mudarEtapa = () => {
    if (this.state.pagina === "Etapa1"){
      this.setState({pagina: 'Etapa2'});
    } else if (this.state.pagina === "Etapa2"){
      this.setState({pagina: 'Etapa3'});
    } else if (this.state.pagina === 'Etapa3'){
      this.setState({pagina: 'EtapaFinal'});
    }  
  } 

  render (){
    const rederizaPagina = () => {
      if(this.state.pagina === 'Etapa1'){
        return <Etapa1 mudarEtapa = {this.mudarEtapa}/>;
      } else if (this.state.pagina === 'Etapa2'){
        return <Etapa2 mudarEtapa = {this.mudarEtapa}/>;
      } else if (this.state.pagina === 'Etapa3'){
        return <Etapa3 mudarEtapa = {this.mudarEtapa}/>;
      } else if (this.state.pagina === 'EtapaFinal'){
        return <EtapaFinal mudarEtapa = {this.mudarEtapa}/>;
      }
    };

    return <div className = "App"> { rederizaPagina() } </div>;
   
  }
}
