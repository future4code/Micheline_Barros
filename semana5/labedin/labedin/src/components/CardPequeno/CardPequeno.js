import React from 'react';
import styled from "styled-components"

const ContainerLittleCard = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`
const ImagensLittle = styled.img `
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
`
const TituloLittleFour = styled.h4 `
    margin-bottom: 15px;
    margin-left: 10px;
    margin-right: 10px;
`
const ContainerLittleDescricao = styled.div `
    display: flex;
    /* flex-direction: column; */
    justify-items: flex-start;
`

function CardPequeno(props) {
    return (
        <ContainerLittleCard>
            <ImagensLittle src={ props.imagem } />
            <ContainerLittleDescricao>
                <TituloLittleFour>{ props.nome }</TituloLittleFour>
                <p>{ props.descricao }</p>
            </ContainerLittleDescricao>
        </ContainerLittleCard>
    )
}

export default CardPequeno;