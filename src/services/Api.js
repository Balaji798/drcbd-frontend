import axios from "axios";

export default () =>{
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL:"http://52.77.244.89:8080/",
        //"http://52.77.244.89:8080/",
        headers:{
            "Content-Type":"aplication/json",
            authorization:`Bearer ${token}`,
        }
    })
}