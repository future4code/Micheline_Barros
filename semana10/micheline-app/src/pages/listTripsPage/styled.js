import styled from "styled-components";

export const DivContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50vw;
    min-height: 100vh;
    h3{
        text-align: center;
    }
`

export const DivBotao = styled.div `
    padding-top: 25px;
    padding-bottom: 25px;
    display: flex;
    justify-content: space-between;
`

export const ContainerViagem = styled.div `
    padding-left: 60px;
    padding-right: 60px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid white;
    margin: 5px;
    margin-top: 10px;
    border-radius: 10px;
`