import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoPerfil from './img/michelineFFBarros.jpeg'
import logoCoelce from './img/logoCoelce.png'
import logoAstef from './img/logoAstef.jpg'
import imagemEmail from './img/email.png'
import imagemEndereço from './img/enderecoResidencial.png'




function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= { fotoPerfil } 
          nome="Micheline F F Barros" 
          descricao="Olá, me chamo Micheline. Sou aluna do curso Full Stack da Labenu. Estou apredendo a trabalhar com React."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
        imagem = { imagemEmail }
        nome = "Email: "
        descricao = " michelinemms@gmail.com"
        />
         <CardPequeno
        imagem = { imagemEndereço }
        nome = "Endereço: "
        descricao = " Rua Alameda, 000, Fortaleza Ceará"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem = { logoAstef } 
          nome="Astef" 
          descricao="Eletrotécnica - Área de Análise de Projetos de Subestações Elétricas." 
        />
        
        <CardGrande 
          imagem = { logoCoelce } 
          nome="Coelce" 
          descricao="Estagiária em eletrotécnica - Área de Manutenção." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
