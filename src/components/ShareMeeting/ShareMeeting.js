import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NextButton from "../NextButton/NextButton";
import './ShareMeeting.css';

const ShareMeeting = props =>
    <div>
        <Row className="ml-2 mr-2 font-weight-bold text-left mb-4">
            <Col>
                Share "Review Prototype"
            </Col>
        </Row>
        <Row className="ml-2 mr-2 font-weight-bold text-left mb-3">
            <Col>Add recipients</Col>
        </Row>
        <Row className="ml-2 mr-2 font-weight-bold text-left mb-3">
            <Col>
                <input type="text" placeholder="Recipient email addresses" className="pt-2 pb-2 pl-1" style={ { width: '80%' } } />
            </Col>
        </Row>
        <Row className="ml-4 text-right mb-3 text-center">
            <Col>
                <Button className="btn-primary" style={ { width: '35%' } }>Preview</Button>
            </Col>
        </Row>
        <Row className="ml-2 mr-2 text-left mb-3">
            <Col>Or</Col>
        </Row>
        <Row className="ml-2 mr-2 font-weight-bold text-left mb-3">
            <Col>Copy custom link</Col>
        </Row>
        <Row className="ml-4 mr-4 text-left mb-3 text-center">
            <Col>
                <Button className="btn-primary" style={ { width: '50%' } }>Copy link!</Button>
            </Col>
        </Row>
        <Row className="mt-6">
            <Col>
                <NextButton to="/" text="Done" />
            </Col>
        </Row>
    </div>;

export default ShareMeeting;