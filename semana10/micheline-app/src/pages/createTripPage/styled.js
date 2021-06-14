import styled from "styled-components";

export const DivContainer = styled.div `
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    text-align: center;
    width: 30vw;
    min-height: 100vh;
    p{
        margin-top: 25px;
        margin-bottom: 25px
    }
`

export const DivInput = styled.div `
    /* margin-top: 70px; */
`
export const DivBotaoVoltar = styled.div `
    display:flex;
    justify-content: flex-start;
    padding: 20px
`

export const Form = styled.form `
    margin-top: 25px;
`

export const Input = styled.input `
    margin: 5px;
    width:30vw;
`

export const Select = styled.select `
    margin: 5px;
    width:30vw;
    color: #4c6ead;
`
export const InputDate = styled.input `
    margin: 5px;
    width:30vw;
    color: #4c6ead;
`

export const DivBotao = styled.button `
    margin-top: 25px;
    width:30vw;
`