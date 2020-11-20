import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NextButton from "../NextButton/NextButton";
import './ConfirmMeeting.css';

const ConfirmMeeting = props =>
    <div>
        <Row className="font-weight-bold text-left ml-2 mr-2 mb-4">
            <Col>Confirm meeting options</Col>
        </Row>
        <Row className="font-weight-bold text-left ml-2 mr-2">
            <Col>
                Review Prototype
            </Col>
        </Row>
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