import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AvailableSlot from "../AvailableSlot/AvailableSlot";
import './MeetingStatus.css';
import {useParams} from "react-router-dom";

const getResponses = index => {
    switch (index) {
        case 1:
            return (<div className="font-italic mb-4">3 responses</div>);
        case 2:
        case 3:
            return (<div className="font-italic mb-4">1 response</div>);
        default:
            return (<div>&nbsp;</div>);
    }
}

const MeetingStatus = props => {
    let meeting = {};
    let availableSlots = null;
    let meetingIdParams = useParams();
    const meetingId = parseInt(meetingIdParams.meetingId);

    const meetings = props.meetings.filter(meeting =>
        meeting.id === meetingId
    );

    if (meetings.length === 0) {
        return <div>No meeting found for {meetingId}</div>
    } else {
        meeting = meetings[0];

        availableSlots = (
            <div>
                {
                    meeting.availableSlots.map((slot, index) =>
                        <div>
                            <AvailableSlot key={slot.id} slot={slot} />
                            { getResponses(index) }
                        </div>
                    )
                }
            </div>
        );
    }

    return (
        <div>
            <Row className="mb-2">
                <Col className="text-left font-weight-bold">{meeting.meetingName}</Col>
            </Row>
            <Row className="mb-2">
                <Col className="text-left">
                    Created By {meeting.createdBy}
                </Col>
            </Row>
            <Row className="mb-2">
                <Col className="text-left font-italic">
                    {meeting.description}
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>&nbsp;</Col>
            </Row>

            <Row className="mb-3 text-left font-weight-bold font-italic">
                <Col>Awaiting 2 of 7 responses</Col>
            </Row>

            <Row className="mb-3">
                <Col>&nbsp;</Col>
            </Row>
            <Row>
                <Col>{ availableSlots }</Col>
            </Row>
        </div>
    );
}

export default MeetingStatus;