import axios from "axios";

export default () =>{
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL:"https://drcbd-backend.onrender.com/",
        headers:{
            "Content-Type":"aplication/json",
            authorization:`Bearer ${token}`,
        }
    })
}