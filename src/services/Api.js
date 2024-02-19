import axios from "axios";

export default () =>{
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL:"https://52.77.244.89:8080/",
        //"https://52.77.244.89:8080/",
        headers:{
            "Content-Type":"aplication/json",
            authorization:`Bearer ${token}`,
        }
    })
}