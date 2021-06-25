import axios from 'axios';
import {baseURL} from '../constants/urls';
import { goToFeed } from '../routes/coordinator'


export const login = (body, clear, history) => {
    axios.post(`${baseURL}/users/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear();
        goToFeed(history)
    }).catch((err) => {
        if(err.response.data.errors){
            if(err.response.data.errors[0].password === 'too_small'){
                alert(`${err.response.data.message} password muito pequeno!` )
            }
        }  else {
            alert(err.response.data)
        }
    })
}

export const SignUp = (body, clear, history) => {
    axios.post(`${baseURL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear();
        goToFeed(history)
    }).catch((err) => {
        if(err.response.data.errors){
            if(err.response.data.errors[0].password === 'too_small'){
                alert(`${err.response.data.message} password muito pequeno!` )
            }
        }  else {
            alert(err.response.data)
        }
    })
}