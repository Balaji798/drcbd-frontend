import axios from "axios";

export default () =>{
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL:"https://drcbd-backend-zgqu.onrender.com/",
        //"https://drcbd-backend-zgqu.onrender.com/",
        headers:{
            "Content-Type":"aplication/json",
            authorization:`Bearer ${token}`,
        }
    })
}