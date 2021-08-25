import axios from 'axios';

export default {
    // Messages APIs
    getMessages: function(token) {
        return axios.get('http://127.0.0.1:8000/api/messages/', {
            headers:{
                authorization:`Token ${token}`
            }
        })
    },
    getOneMessage: function(id, token) {
        return axios.get(`http://127.0.0.1:8000/api/messages/${id}`, {
            headers:{
                authorization:`Token ${token}`
            }
        })
    },
    newMessage: function(message, token) {
        return axios.post("http://127.0.0.1:8000/api/messages/", message, {
            headers:{
                authorization:`Token ${token}`
            }
        })
    },
    deleteMessage: function(id, token) {
        return axios.delete(`http://127.0.0.1:8000/api/messages/${id}`, {
            headers:{
                authorization:`Token ${token}`
            }
        })
    },


    // user APIs
    loginUser: function(user) {
        return axios.post('http://127.0.0.1:8000/auth/', user)
    },
    registerUser(user) {
        return axios.post('http://127.0.0.1:8000/api/users/', user)
    }
}