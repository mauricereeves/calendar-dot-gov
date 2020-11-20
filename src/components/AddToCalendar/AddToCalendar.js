import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './AddToCalendar.css';

const AddToCalendar = props =>
    <div>
        <Row className="text-left font-weight-bold ml-2 mr-2 mb-3">
            <Col>Review Prototype</Col>
        </Row>
        <Row className="text-left ml-2 mr-2 mb-3">
            <Col>Created by Firstname Lastname</Col>
        </Row>
        <Row className="text-left ml-2 mr-2 mb-3">
            <Col>Thanks for selecting a meeting time! The meeting organizer has been notified.</Col>
        </Row>
        <Row className="text-left ml-2 mr-2 mb-3 pt-2 font-weight-bold">
            <Col>Friday, November 20, 2020</Col>
        </Row>
        <Row className="text-left ml-2 mr-2 mb-3">
            <Col>2:30pm - 3:30pm ET</Col>
        </Row>
        <Row className="text-center mt-4 pt-3">
            <Col>
                <Button className="btn-primary p-3 col-sm-4">Add to calendar</Button>
            </Col>
        </Row>
    </div>;

export default AddToCalendar;