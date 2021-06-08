import styled from 'styled-components';

export const ImgB = styled.img `
width: 30px;
`
export const ImgPerfil = styled.img `
    height: 100%;
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
`

export const ContainerMatches = styled.div `
    position: relative;
    height: 70px;
    padding: 10px;
    display: flex;
    width: 100%;
    cursor: pointer;
    p{
        font-size: 16px;
        font-family: Roboto, sans-serif;
        color: white;
    }
`
export const Button = styled.button `
border: 0px;
background-color: transparent;
` 

export const ContainerPag= styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 0.5rem;
    background-color: #FFA07A;
    width: 400px;
    height: 600px;
`

export const Header = styled.div `
    display: flex;
    justify-content: space-between;
    border-bottom: 1.5px solid lightgray;
    height: 50px;
`