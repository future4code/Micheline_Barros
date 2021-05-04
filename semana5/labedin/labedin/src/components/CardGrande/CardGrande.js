import React from 'react';
import styled from "styled-components"

const ContainerBigCard = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const Imagens = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const TituloFour = styled.h4 `
    margin-bottom: 15px;
`
const ContainerDescricao = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <ContainerBigCard>
            <Imagens src={ props.imagem } />
            <ContainerDescricao>
                <TituloFour>{ props.nome }</TituloFour>
                <p>{ props.descricao }</p>
            </ContainerDescricao>
        </ContainerBigCard>
    )
}

export default CardGrande;