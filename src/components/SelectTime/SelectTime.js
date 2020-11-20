import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NextButton from "../NextButton/NextButton";
import './SelectTime.css';

const SelectTime = props =>
        <div>
            <Row className="font-weight-bold text-left ml-2 mr-2">
                <Col>
                    Select times for "Review Prototype" meeting
                </Col>
            </Row>
            <Row className="pt-2 pb-2 text-left ml-2 mr-2">
                <Col>
                    <input type="checkbox" />
                    &nbsp;
                    Use same times across multiple days
                </Col>
            </Row>
            <Row className="pt-2 pb-2 text-left ml-2 mr-2">
                <Col>
                    <input type="checkbox" />
                    &nbsp;
                    Customize times for each day
                </Col>
            </Row>
            <Row>
                <Col>
                    <NextButton to="/confirm-meeting" />
                </Col>
            </Row>
        </div>;

export default SelectTime;