import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Inbox from "./Inbox";
import Sent from "./Sent";
import Compose from "./Compose";
import Message from "./Message";
import { useCookies } from 'react-cookie';

function Body() {
    const [messageList, setMessageList] = useState('');
    const [token] = useCookies(['mytoken'])

    API.getMessages(token['mytoken'])
        .then(res => setMessageList(res.data))
        .catch(err => console.log(err));


    return (
        <div>
            <h1>BODY</h1>
            {/* <Inbox />
                <Sent /> */}
            <Message messageList={messageList} />
            <Compose />



        </div>
    );
}

export default Body;
