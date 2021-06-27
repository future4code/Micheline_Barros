import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedPage from '../pages/FeedPage/FeedPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import PostPage from '../pages/PostPage/PostPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Header from '../components/Header/Header';

const Router = ({anchorEl, setAnchorEl}) => {
    return(
            <Switch>
                <Route exact path={'/login'}>
                    <LoginPage anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>
                </Route>

                <Route exact path={'/cadastro'}>
                    <SignUpPage />
                </Route>

                <Route exact path={'/'}>
                    <FeedPage />
                </Route>

                <Route exact path={'/post/:id'}>
                    <PostPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>

            </Switch>
        
    )
}

export default Router;