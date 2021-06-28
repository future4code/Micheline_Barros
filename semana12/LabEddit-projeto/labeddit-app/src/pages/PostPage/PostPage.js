import React from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from '../../constants/urls';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import PostCard from '../../components/PostCard/PostCard';
import { PostContainer } from './styled';

const PostPage = () => {
    useProtectedPage ()
    const params = useParams();
    const {data, loading} = useRequestData(`${baseURL}/posts/${params.id}/comments`, [])

     const post = data;
    
     

    

    return(
        <PostContainer>
            {loading && <p>Carregando...</p>}       
            {post && post.map((comment) => { 
               return(
                    <PostCard key={comment.id}
                        username={comment.username}
                        body={comment.body}
                        voteSum={comment.voteSum}
                        length={post.length}
                    /> 
                )}
                
            )}
            
            
        </PostContainer>
    )
}

export default PostPage