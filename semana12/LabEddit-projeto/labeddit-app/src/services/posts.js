import axios from 'axios';
import {baseURL} from '../constants/urls';

export const commentary = (body, clear, params) => {
    const header={
        headers:

        {Authorization: localStorage.getItem("token")}
    }
    
    axios.post(`${baseURL}/posts/${params.id}/comments`, body, header)
    .then((res) => {
        console.log('comentário criado')
        clear();
        
    }).catch((err) => {
        
            alert(err.response)
    
    })
}