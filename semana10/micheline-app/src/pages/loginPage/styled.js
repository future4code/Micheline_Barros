import styled from "styled-components";

export const ContainerLogin = styled.div `
    display: flex;
    div{
        display: flex;
        flex-direction: column;
        margin: auto;
    }
    button{
        border: 1px solid white;
        padding: 0 10px;
        border-radius: 10px;
    }
   
`

export const DivContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content:center;
    text-align: center;
    width: 35vw;
    min-height: 100vh;
`

export const Form = styled.form `
    margin-top: 25px;
`

export const Input = styled.input `
display:flex;

    margin: 5px;
    width:10vw;
    color: #4c6ead;
`

export const DivBotaoVoltar = styled.div `
    display:flex;
    justify-content: flex-start;
    padding: 20px;
    width: 35vw;

`