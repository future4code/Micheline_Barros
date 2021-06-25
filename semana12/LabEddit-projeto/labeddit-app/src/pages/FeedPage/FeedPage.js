import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';

const FeedPage = () => {
    useProtectedPage ()

    return(
        <div>
            <h1>FeedPage</h1>
        </div>
    )
}

export default FeedPage