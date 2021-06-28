import React from 'react';
import PostCard from '../../components/PostCard/PostCard';
import  useProtectedPage from '../../hooks/useProtectedPage'
import  useRequestData from '../../hooks/useRequestData'
import { baseURL } from '../../constants/urls';
import { PostContainer, ButtonAddPost } from './styled'
import { useHistory } from 'react-router';
import { goToPost } from '../../routes/coordinator';

const FeedPage = () => {
    useProtectedPage();
    const history = useHistory();

    const posts = useRequestData(`${baseURL}/posts`, [])

    console.log('posts',posts)

    const postPage = (id) => {
        goToPost(history, id)
    }

    const postsFeed = posts.map((post) => { 
        return(
             <PostCard key={post.id}
                 username={post.username}
                 body={post.body}
                 commentCount={post.commentCount}
                 voteSum={post.voteSum}
                 onClick={() => postPage(post.id, post.username)}
             /> 
         )}
     )
    
     
    return(
        <PostContainer>
           {postsFeed}
            <ButtonAddPost />
        </PostContainer>
    )
}

export default FeedPage