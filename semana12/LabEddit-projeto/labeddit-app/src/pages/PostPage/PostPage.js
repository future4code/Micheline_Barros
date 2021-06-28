import React from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from '../../constants/urls';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { PostContainer } from './styled'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import useForm from '../../hooks/useForm';
import ListComments from '../../components/ListComments/ListComments'


const PostPage = (props) => {
    useProtectedPage()
    const params = useParams();
    const { data, loading } = useRequestData(`${baseURL}/posts/${params.id}/comments`, [])

    const post = data;

    const [ form, onChange, clear ] = useForm({email:'', password:''});
    const onSubmitComment = (e) => {
        // login(form, clear, history, setAnchorEl)
        // e.preventDefault()
    }

    return (
        <PostContainer>
               <form onSubmit={ onSubmitComment }>
                    <TextField 
                        name = { 'body' }
                        value = { form.body }
                        onChange = { onChange }
                        placeholder={'Comentar'}
                        fullWidth
                        margin={'normal'}
                        required
                        type={"email"}
                        autoFocus
                    />
                    <Button>Enviar</Button>
            </form>
            {loading && <p>Carregando...</p>}
            {post && post.map((detail) => {
                return (
                    <ListComments detail={detail}/>
                )
            }

            )}
        </PostContainer>
    )
}

export default PostPage

