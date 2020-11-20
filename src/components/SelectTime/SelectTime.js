import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NextButton from "../NextButton/NextButton";
import './SelectTime.css';

const getTimeSelectors = meeting => {
    if (meeting === undefined || meeting === null) {
        return (<div className="mt-4">
            <Row className="text-left font-weight-bold ml-4">
                <Col>
                    Friday, November 20, 2020
                </Col>
            </Row>
            <Row className="text-left ml-4 mb-3">
                <Col>
                    A time picker at some point
                </Col>
            </Row>

            <Row className="text-left font-weight-bold ml-4">
                <Col>
                    Monday, November 23, 2020
                </Col>
            </Row>
            <Row className="text-left ml-4 mb-3">
                <Col>
                    A time picker at some point
                </Col>
            </Row>

            <Row className="text-left font-weight-bold ml-4">
                <Col>
                    Tuesday, November 23, 2020
                </Col>
            </Row>
            <Row className="text-left ml-4 mb-3">
                <Col>
                    A time picker at some point
                </Col>
            </Row>
        </div>);
    } else {
        return (<div>Date pickers go here!</div>);
    }
}

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

            { getTimeSelectors(props.meeting) }

            <Row>
                <Col>
                    <NextButton to="/confirm-meeting" />
                </Col>
            </Row>
        </div>;

export default SelectTime;