import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Inbox from "./Inbox";
import Sent from "./Sent";
import Compose from "./Compose";
import Message from "./Message";
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

function Body() {
    const [messageList, setMessageList] = useState('');
    const [token, removeToken] = useCookies(['mytoken'])
    let history = useHistory()

    API.getMessages(token['mytoken'])
        .then(res => setMessageList(res.data))
        .catch(err => console.log(err));
 
    useEffect(() => {
        if(!token['mytoken']) {
            history.push('/')
        }
    }, [token])


    const logoutBtn = () => {
        console.log(token['mytoken'])
        // removeToken(['mytoken'])
        document.cookie='mytoken=; expires=Thu, 01 1970 00:00:01 GMT;'
    }

    return (
        <div>

            <button onClick={logoutBtn} className="btn btn-primary">Logout</button>

            <h1>BODY</h1>
            {/* <Inbox />
                <Sent /> */}
            <Message messageList={messageList} />
            <Compose />



        </div>
    );
}

export default Body;
