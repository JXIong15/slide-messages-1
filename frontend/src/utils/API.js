import axios from 'axios';



export default {
    getMessages: function () {
        return axios.get('http://127.0.0.1:8000/api/messages/')
    }

}