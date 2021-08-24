import React, { Component } from "react";
import API from "../utils/API";
import Inbox from "./Inbox";
import Sent from "./Sent";
import Compose from "./Compose";
import Message from "./Message";

class Body extends Component {
    state = {
        messageList: [],
    };

    componentDidMount = () => {
        API.getMessages()
            .then(res => this.setState({ messageList: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>BODY</h1>
                {/* <Inbox />
                <Sent /> */}
                <Message messageList={this.state.messageList} />
                <Compose />



            </div>
        );
    }
}

export default Body;
