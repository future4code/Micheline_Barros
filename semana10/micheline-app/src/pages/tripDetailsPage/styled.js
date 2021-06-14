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
export const DivBotaoVoltar = styled.div `
    display:flex;
    justify-content: flex-start;
    padding: 20px
`

export const Form = styled.form `
    margin-top: 25px;
`

export const DivBotaoSelicao = styled.div `
    margin: 15px;
    
    display: flex; 
    justify-content: space-between;
`

export const Select = styled.select `
    margin: 5px;
    width:30vw;
    color: #4c6ead;
`
export const ContainerAprovados = styled.div `
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

export const DivBotao = styled.button `
    margin-top: 25px;
    width:30vw;
`