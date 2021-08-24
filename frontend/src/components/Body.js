import React, { Component } from "react";
import API from "../utils/API";
// import Inbox from "./Inbox";
// import Sent from "./Sent";

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
        console.log(this.state.messageList)
        return (
            <div>
                <h1>BODY</h1>
                {/* <Inbox />
                <Sent /> */}
                {/* <Message messageList={this.messageList} /> */}


                {this.state.messageList && this.state.messageList.map(message => {
                    console.log(message)
                    return (
                        <div key={message.id}>
                            <p>{message.sender}</p>
                            <p>{message.title}</p>

                            <div className="row">
                                <div className="col-md-1">
                                    <button className="btn btn-danger">Delete</button>
                                </div>
                            </div>

                        </div>
                    )
                })}


            </div>
        );
    }
}

export default Body;
