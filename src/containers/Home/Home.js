import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import './Home.css';
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Scheduler from "../Scheduler/Scheduler";

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/scheduler">
                                    <Button className="btn-primary navigation-button">Schedule new meeting</Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/manage-schedule">
                                    <Button className="btn-primary navigation-button">Manage existing meeting</Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/calendar-import">
                                    <Button className="btn-primary navigation-button">Import calendar</Button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/scheduler">
                            <Redirect to="/schedule-a-meeting" />
                        </Route>
                        <Route path="/manage-schedule">
                            <Redirect to="/manage-a-meeting" />
                        </Route>
                        <Route path="/calendar-import">
                            <Redirect to="/import-a-calendar" />
                        </Route>
                        <Route exact path="/">
                            <div>&nbsp;</div>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Home;
