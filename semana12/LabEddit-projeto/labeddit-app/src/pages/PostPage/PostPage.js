import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from '../../constants/urls';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { PostContainer } from './styled'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import useForm from '../../hooks/useForm';
import ListComments from '../../components/ListComments/ListComments'
import {commentary} from '../../services/posts'


const PostPage = (props) => {
    useProtectedPage()
    const params = useParams();
    const { data, loading, listcomments } = useRequestData(`${baseURL}/posts/${params.id}/comments`, [])
    const post = data;

    const [ form, onChange, clear ] = useForm({body:''});

    const onSubmitComment = (e) => {
        commentary(form, clear, params)
        console.log('clicou')
        e.preventDefault()
    }

    useEffect(() => {
        listcomments(`${baseURL}/posts/${params.id}/comments`)
    }, [form])

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
                        autoFocus
                    />
                    <Button type={'submit'}>Enviar</Button>
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

