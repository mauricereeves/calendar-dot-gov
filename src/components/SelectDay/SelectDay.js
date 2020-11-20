import React from "react";
import './SelectDay.css';
import 'react-calendar/dist/Calendar.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Calendar } from "react-calendar";
import NextButton from "../NextButton/NextButton";

const SelectDay = props =>
    <div>
        <Row>
            <Col className="font-weight-bold text-left mb-3">
                Select day(s)
            </Col>
        </Row>
        <Row className="mb-4">
            <Col className="text-center">
                <Calendar
                    style={{ margin: 'auto', width: '250px' }}
                    className="ml-1 mr-1"
                />
            </Col>
        </Row>
        <Row className="mb-4">
            <Col className="text-left">
                <input type="checkbox" id="chkRecurring" name="recurringMeeting" />
                &nbsp;
                Make this a recurring meeting
            </Col>
        </Row>
        <Row className="mb-4">
            <Col className="text-center font-italic">
                Next: select times
            </Col>
        </Row>
        <Row>
            <Col className="">
                <NextButton to="/select-times" />
            </Col>
        </Row>
    </div>

export default SelectDay;