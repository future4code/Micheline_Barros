import React, { useState, useEffect } from 'react'
import axios from 'axios'
import style, {ContainerPerfis, ImgB, Img, Button, Botton, ContainerBotao, ImgLogo, ContainerPerfil, Header, ContainerLogo, Moldura, DivUm, ContainerTexto, DivNomeIdade, DivNome, DivIdade, DivBio} from "./Styled"


const urlBase = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/micheline/";

function TelaPerfis(props) {
    const [perfilUsuario, setPerfilUsuario] = useState({})
    const [match, setMatch] = useState()

    useEffect(() => {
        getProfileToChoose()
    }, [])

    useEffect(() => {
        if(match){
            getProfileToChoose()
        }
    }, [match])

    const getProfileToChoose = () => {
        axios.get(`${urlBase}person`).then((res) => {
            setPerfilUsuario(res.data.profile)
        }).catch((err) => {
            alert(err.response.data)
        })
    }


    const choosePersonMatch = (id) => {
        const header = {
                'Content-Type': 'application/json'
        }
        const body = {
            id: id,
            choice: true,
        }
        console.log('body', body)
        axios.post(`${urlBase}choose-person`, body, header).then((res) => {
            setMatch(res.data)
        }).catch((err) => {
            alert(err.response.data)
        })
    }


    const choosePersonNoMatch = (id) => {
        const header = {
                'Content-Type': 'application/json'
        }
        const body = {
            id: {id},
            choice: false,
        }
        axios.post(`${urlBase}choose-person`, body, header).then((res) => {
            setMatch(res.data)
        }).catch((err) => {
            alert(err.response.data)
        })
    }

  return (
    <ContainerPerfis>
        <ContainerPerfil>
            <Header>
                <ContainerLogo>
                    <ImgLogo src="/logo.png" />
                </ContainerLogo>
                <Botton onClick={props.telaMatches}><ImgB src="/matches.png" /></Botton>
            </Header>
            
                <Moldura>
                    <DivUm>
                        <Img src={perfilUsuario.photo}/>
                        <ContainerTexto>
                            <DivNomeIdade>
                                <DivNome>{perfilUsuario.name}</DivNome>
                                <DivIdade>, {perfilUsuario.age} anos</DivIdade>
                            </DivNomeIdade>
                            <DivBio>{perfilUsuario.bio}</DivBio>
                        </ContainerTexto>
                       
                    </DivUm>
                </Moldura>
            
            <ContainerBotao>
                <Button onClick={()=>choosePersonNoMatch(perfilUsuario.id)}><ImgB src="/!matche.png" /></Button>
                <Button onClick={()=>choosePersonMatch(perfilUsuario.id)}><ImgB src="/matche.png" /></Button>
            </ContainerBotao>
        </ContainerPerfil>
    </ContainerPerfis>
  );
}

export default TelaPerfis;
