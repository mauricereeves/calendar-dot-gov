import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import {
    Link
} from 'react-router-dom';
import moment from 'moment';

import Meeting from "../components/Meeting/Meeting";
import SelectDay from "../components/SelectDay/SelectDay";
import SelectTime from "../components/SelectTime/SelectTime.js";
import ConfirmMeeting from "../components/ConfirmMeeting/ConfirmMeeting";
import ShareMeeting from "../components/ShareMeeting/ShareMeeting";
import Scheduler from "./Scheduler/Scheduler";
import MeetingManager from "./MeetingManager/MeetingManager";
import CalendarImporter from "./CalendarImporter/CalendarImporter";
import Home from './Home/Home';
import UsdsLogo from "../components/UsdsLogo/UsdsLogo";
import AddToCalendar from "../components/AddToCalendar/AddToCalendar";
import MeetingStatus from "../components/MeetingStatus/MeetingStatus";

class App extends Component {
    state = {
        meetings: [
            {
                id: 0,
                meetingName: 'Review Prototype',
                createdBy: 'Firstname Lastname',
                description: 'Meeting description lorem ipsum dolor sit amet, consectetur adipiscing elit',
                recurring: false,
                canEdit: true,
                availableSlots: [
                    {
                        id: 0,
                        start: '12:00pm',
                        end: '1:00pm',
                        timezone: 'EST',
                        date: moment('11/20/2020'),
                        isSelected: false
                    },
                    {
                        id: 1,
                        start: '2:30pm',
                        end: '3:30pm',
                        timezone: 'EST',
                        date: moment('11/20/2020'),
                        isSelected: false
                    },
                    {
                        id: 2,
                        start: '12:00pm',
                        end: '1:00pm',
                        timezone: 'EST',
                        date: moment('11/23/2020'),
                        isSelected: false
                    },
                    {
                        id: 3,
                        start: '3:30pm',
                        end: '4:30pm',
                        timezone: 'EST',
                        date: moment('11/23/2020'),
                        isSelected: false
                    }
                ],
            },
            {
                id: 1,
                meetingName: 'Hackathon Presentation',
                createdBy: 'Firstname Lastname',
                description: 'Meeting description lorem ipsum dolor sit amet, consectetur adipiscing elit',
                recurring: false,
                canEdit: false,
                availableSlots: [
                    {
                        id: 0,
                        start: '12:00pm',
                        end: '1:00pm',
                        timezone: 'EST',
                        date: moment('11/20/2020'),
                        isSelected: false
                    },
                    {
                        id: 1,
                        start: '2:30pm',
                        end: '3:30pm',
                        timezone: 'EST',
                        date: moment('11/20/2020'),
                        isSelected: false
                    },
                    {
                        id: 2,
                        start: '12:00pm',
                        end: '1:00pm',
                        timezone: 'EST',
                        date: moment('11/23/2020'),
                        isSelected: false
                    },
                    {
                        id: 3,
                        start: '3:30pm',
                        end: '4:30pm',
                        timezone: 'EST',
                        date: moment('11/23/2020'),
                        isSelected: false
                    }
                ],
            }
        ]
    }

    saveMeeting = (meeting) => {
        if (meeting.id === undefined || meeting.id === null) {
            // todo: get id
            const meetings = [ ...this.state.meetings ];
            meetings.push(meeting);
            this.setState({ meetings: meetings });
        } else {
            const meetingIndex = this.state.meetings.findIndex(m => m.id === meeting.id);
            const meetings = [ ...this.state.meetings ];
            meetings[meetingIndex] = meeting;
            this.setState({ meetings: meetings });
        }
    }

    render() {
        return (
            <Router>
                <Card style={{
                    minWidth: '30rem',
                    maxWidth: '40rem',
                    textAlign: 'center',
                    margin: 'auto',
                    marginTop: '3rem'
                }}>
                    <Card.Header>
                        <p>Calendar.gov</p>
                        <UsdsLogo/>
                    </Card.Header>
                    <Card.Body>
                        <Switch>
                            <Route path="/edit-meeting/:meetingId">
                                <Meeting meetings={this.state.meetings} saveMeeting={this.saveMeeting} />
                            </Route>
                            <Route path="/select-days" component={SelectDay} />
                            <Route path="/select-times" component={SelectTime} />
                            <Route path="/confirm-meeting" component={ConfirmMeeting} />
                            <Route path="/share-meeting" component={ShareMeeting} />
                            <Route path="/add-to-calendar" component={AddToCalendar} />
                            <Route path="/meeting-status/:meetingId?">
                                <MeetingStatus meetings={this.state.meetings} />
                            </Route>
                            <Route path="/schedule-a-meeting" component={Scheduler}/>
                            <Route path="/manage-a-meeting">
                                <MeetingManager meetings={this.state.meetings} />
                            </Route>
                            <Route path="/import-a-calendar" component={CalendarImporter}/>
                            <Route path="/">
                                <Home/>
                            </Route>
                        </Switch>
                    </Card.Body>
                    <Card.Footer>
                        <p>The future of scheduling meetings</p>
                        <Link to="/">Home</Link>
                    </Card.Footer>
                </Card>
            </Router>
        );
    }
}

export default App;
