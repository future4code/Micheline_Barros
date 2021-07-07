import styled from 'styled-components';
import { Fab } from '@material-ui/core';


export const PostContainer = styled.div `
  display:flex;
  flex-direction: column;
  align-items: center;
  `

export const ButtonAddPost = styled(Fab)`
    position: fixed;
    right: 20px;
    top: 70px;
    z-index: 3;
`