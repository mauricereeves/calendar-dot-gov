import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './AvailableSlot.css';

class AvailableSlot extends Component {
    constructor(props) {
        super(props);
        this.state = props.slot;
    }

    slotClicked = () => {
        console.log(this.state);
        this.setState({ ...this.state, isSelected: !this.state.isSelected }, () => {
            console.log(this.state);
        });
    }

    render() {
        const classes = ['available-slot', 'mb-2', 'text-center'];

        if (this.state.isSelected) {
            classes.push('selected');
        }

        return (<Card className={classes.join(' ')} onClick={this.slotClicked}>
            <Card.Body>
                <p className="font-weight-bold">{this.state.start} - {this.state.end}</p>
                <p>{this.state.date.format("dddd, MMMM Do YYYY")}</p>
            </Card.Body>
        </Card>);
    }
}


export default AvailableSlot;