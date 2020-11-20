import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NextButton from "../NextButton/NextButton";
import './ConfirmMeeting.css';

const getMeetingSlots = meeting => {
    if (meeting === null || meeting === undefined) {
        return (<div className="mt-4">
            <Row>
                <Col className="font-weight-bold text-left ml-4">Friday, November 20, 2020</Col>
                <Col className="text-right mr-2">Edit</Col>
            </Row>
            <Row className="mt-3">
                <ul className="list-unstyled ml-5 text-left">
                    <li className="p-1">12:00pm - 1:00pm ET</li>
                    <li className="p-1">2:30pm - 3:30pm ET</li>
                </ul>
            </Row>

            <Row>
                <Col className="font-weight-bold text-left ml-4">Monday, November 23, 2020</Col>
                <Col className="text-right mr-2">Edit</Col>
            </Row>
            <Row className="mt-3">
                <ul className="list-unstyled ml-5 text-left">
                    <li className="p-1">12:00pm - 1:00pm ET</li>
                    <li className="p-1">2:30pm - 3:30pm ET</li>
                </ul>
            </Row>

            <Row>
                <Col className="font-weight-bold text-left ml-4">Tuesday, November 24, 2020</Col>
                <Col className="text-right mr-2">Edit</Col>
            </Row>
            <Row className="mt-3">
                <ul className="list-unstyled ml-5 text-left">
                    <li className="p-1">10:00am - 11:00am ET</li>
                </ul>
            </Row>
        </div>)
    } else {
        return (<div>Slots go here</div>);
    }
}

const ConfirmMeeting = props =>
    <div>
        <Row className="font-weight-bold text-left ml-2 mr-2 mb-4">
            <Col>Confirm meeting options</Col>
        </Row>
        <Row className="font-weight-bold text-left ml-2 mr-2">
            <Col>
                { props.meeting === undefined ? "Review Prototype" : props.meeting.meetingName }
            </Col>
        </Row>
        { getMeetingSlots(props.meeting) }
        <Row className="font-italic text-center mb-4 ml-2 mr-2 mt-4">
            <Col>Next: share your meeting</Col>
        </Row>
        <Row className="text-center ml-2 mr-2">
            <Col>
                <NextButton to="/share-meeting" />
            </Col>
        </Row>
    </div>;

export default ConfirmMeeting;