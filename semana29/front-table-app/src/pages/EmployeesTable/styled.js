import styled from "styled-components";

export const ContainerInputName = styled.div`
    display: flex;
    flex-direction: row;
    width: 960px;
    height: 103px;
    margin-left: 32px;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
`

export const InputSearch = styled.input`
    width: 278px;
    height: 40px;
    border-radius: 4px;
`

export const ContainerInputIcon = styled.div`
  position: relative;
  i{
    position: absolute;
    right: 10px;
    top: 15px;
    color:#7D7D7D;
    width:17,49px;
    height:17,49px;
  }  
`

export const HeadTable = styled.thead`
    width: 960px;
    height: 49px;
    background: #5984C0;
    border-radius: 4px 4px 0px 0px;
    color: #FFFFFF;
    display: grid;
    align-items: center;
    font-size: 16px;
    margin-left: 32px;
`
export const Tr = styled.tr`
    display: grid;
    grid-template-columns: 0.5fr repeat(4, 1fr);
    justify-items: center;
    justify-content:space-evenly;
`

export const Row = styled.tr`
    display: grid;
    grid-template-columns: 0.5fr repeat(4, 1fr);
    align-items: center;
    width: 960px;
    height: 49px;
    margin: 1px 0 0 32px;
    background: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    font-size: 16px;
    justify-items: center;
`


export const ImgEmployees = styled.img`
    border-radius: 50%;
    width: 34px;
    height: 33px;
`




