import React from 'react';
import PostCard from '../PostCard/PostCard';


const ListComments = (props) => {

    return(
        <PostCard key={props.detail.id} hideComment
        title={props.detail.title}
        username={props.detail.username}
        body={props.detail.body}
        voteSum={props.detail.voteSum}
        length={props.detail.length}
    />
    )
}

export default ListComments;