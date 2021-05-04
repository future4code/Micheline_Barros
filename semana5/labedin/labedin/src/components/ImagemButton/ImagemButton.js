import React from 'react';
import styled from "styled-components"

const ContainerButton = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`

const ImagemBotao = styled.img `
    width: 30px;
    margin-right: 10px;
`

function ImagemButton(props) {
    return (
        <ContainerButton>
            <ImagemBotao src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ContainerButton>

    )
}

export default ImagemButton;