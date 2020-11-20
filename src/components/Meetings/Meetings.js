import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const getLink = meeting => {
    if (meeting.canEdit) {
        return <Link to={`/edit-meeting/${meeting.id}`}>Edit Meeting</Link>
    } else {
        return <Link to={`/meeting-status/${meeting.id}`}>Review Meeting</Link>
    }
}

const Meetings = props => {
    console.log(props);
    return (
        <div>
            {
                props.meetings.map((meeting, index) =>
                    <div key={meeting.id}>
                        <Row>
                            <Col>{meeting.meetingName}</Col>
                            <Col>
                                { getLink(meeting) }
                            </Col>
                        </Row>
                    </div>
                )
            }
        </div>
    )
}

export default Meetings;