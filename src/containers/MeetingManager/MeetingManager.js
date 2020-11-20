import React, { Component } from 'react';
import './MeetingManager.css';
import Meetings from "../../components/Meetings/Meetings";

class MeetingManager extends Component {
    render() {
        console.log(this.props);
        return (
          <div>
              <p>I am the meeting manager</p>
              <Meetings meetings={this.props.meetings} />
          </div>
        );
    }
}

export default MeetingManager;