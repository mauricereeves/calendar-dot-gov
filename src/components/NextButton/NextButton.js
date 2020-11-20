import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const NextButton = props =>
    <Link to={props.to}>
        <Button className="btn-primary">{ props.text === undefined ? "Next" : props.text }</Button>
    </Link>

export default NextButton;