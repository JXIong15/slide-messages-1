import axios from 'axios';



export default {
    // Messages APIs
    getMessages: function() {
        return axios.get('http://127.0.0.1:8000/api/messages/')
    },
    newMessage: function(message) {
        return axios.post("http://127.0.0.1:8000/api/messages/", message)
    },
    deleteMessage: function(id) {
        return axios.delete(`http://127.0.0.1:8000/api/messages/${id}`)
    },


    // user APIs
    loginUser: function(username, password) {
        return axios.post('http://127.0.0.1:8000/auth/', username, password)
    }
}