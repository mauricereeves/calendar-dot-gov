import React from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import AvailableSlot from "../AvailableSlot/AvailableSlot";

const Meeting = props => {
    let meeting = {};
    let availableSlots = null;
    let meetingIdParams = useParams();
    const meetingId = parseInt(meetingIdParams.meetingId);

    if (props.meetings === null || props.meetings === undefined) {
        return (<div>
            <Row className="mb-2">
                <Col className="text-left font-weight-bold">
                    Name your meeting
                </Col>
            </Row>
            <Row className="mb-4">
                <Col className="text-left">
                    <input type="text" placeholder="Meeting name" className="p-2" style={{ width: '75%' }} />
                </Col>
            </Row>
            <Row className="mb-2">
                <Col className="text-left font-weight-bold">Add description (optional)</Col>
            </Row>
            <Row className="mb-3">
                <Col className="text-left">
                    <input type="text" placeholder="Meeting description" className="p-2" style={{ width: '75%' }} />
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>&nbsp;</Col>
            </Row>
            <Row className="mb-2">
                <Col className="text-center font-italic">
                    Next: select days
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/select-days">
                        <Button className="btn-primary">Next</Button>
                    </Link>
                </Col>
            </Row>
        </div>);
    } else {
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
                            <AvailableSlot key={slot.id} slot={slot}/>
                        )
                    }
                </div>
            );
        }

        return (<div>
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
            <Row>
                <Col className="text-left font-weight-bold mb-3">
                    Please select a meeting time from the options below
                </Col>
            </Row>
            <Row>
                <Col>{ availableSlots }</Col>
            </Row>
        </div>);
    }
}


export default Meeting;