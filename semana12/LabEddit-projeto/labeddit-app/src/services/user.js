import axios from 'axios';
import {baseURL} from '../constants/urls';
import { goToFeed } from '../routes/coordinator'


export const login = (body, clear, history) => {
    axios.post(`${baseURL}/users/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear();
        goToFeed(history)
    }).catch((err) => console.log(err))
}

export const SignUp = (body, clear, history) => {
    axios.post(`${baseURL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear();
        goToFeed(history)
    }).catch((err) => console.log(err))
}