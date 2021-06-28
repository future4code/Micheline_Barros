import React from 'react';
import { CardActionArea } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { PostContainer, CardPost } from './styled'

const PostCard = (props) => {
     return(
         <PostContainer onClick = {props.onClick}>
             <CardActionArea>
                 <CardPost>
                    <div>
                        <Typography align={'center'}>
                            {props.username}
                        </Typography>
                        <hr />
                    </div>
                    <div>body: {props.body}</div>
                    <div>{props.commentCount}</div>
                    <div>voteSum: {props.voteSum}</div>
                    <div>comment:{props.length}</div>
                </CardPost> 
             </CardActionArea>
         </PostContainer>
     )
}

export default PostCard;
