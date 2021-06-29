import "../App.css";

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {BiCheckboxSquare} from "react-icons/bi";
import Fab from "@material-ui/core/Fab";
import Checkout from "./Checkout";
import {useHistory} from "react-router-dom";

function goCheckout() {
            return <Checkout />;
}

export default function Pricing() {
    const { push } = useHistory()

    return (
        <React.Fragment >
            <CssBaseline/>
            {/* Hero unit */}
            <Container maxWidth="sm" component="main">
                <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom
                            className="title">
                    <h2>Pricing</h2>
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="xl" >
                <Typography component="div" variant="div" align="center"
                            style={{height: '80%', align: 'center', marginLeft: '10%'}} >
                    <div className="table centered" align="center">
                        <div className="row">
                            <div className="column">
                                <ul className="price">
                                    <li className="header">
                                        Features List
                                    </li>
                                    <li>Users</li>
                                    <li>Clients</li>
                                    <li>Calendar</li>
                                    <li>Appointment tracking</li>
                                    <li>Client Import</li>
                                    <li>Task Management</li>
                                    <li>Status Tracking</li>
                                    <li>Email Management</li>
                                    <li>Messaging</li>
                                    <li>Document Storage</li>
                                    <li>Dashboard</li>
                                    <li>Mobile Application</li>
                                    <li>Invoicing</li>
                                    <li>Annual Appointment Rollover</li>
                                    <li>Appointment Autonotification</li>
                                    <li>Custom Appointment Services</li>
                                    <li>Internal Review</li>
                                    <li>Office locations</li>
                                    <li>Automated notifications</li>
                                    <li>KPI integration</li>
                                    <li>Custom Metrics</li>
                                </ul>
                            </div>

                            <div className="column">
                                <ul className="price">
                                    <li className="header">
                                        Sole Proprietor
                                        <br/>
                                        <span className="dollar">145</span>
                                        <br/>
                                        <br/>
                                    </li>
                                    <li>
                                        1
                                    </li>
                                    <li>
                                        250
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="red"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="red"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="red"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="red"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="red"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="red"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="red"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="red"/>
                                    </li>
                                    <li className="footer">
                                        {/*<Link to="/checkout" >*/}
                                            <Fab variant="extended" color="primary" className="footer-button"
                                                 onClick={() => push('/checkout')}>
                                                Go Sole Proprietor </Fab>
                                        {/*</Link>*/}
                                    </li>
                                </ul>
                            </div>

                            <div className="column">
                                <ul className="price">
                                    <li className="header">
                                        Silver
                                        <br/>
                                        <span className="dollar">205</span>
                                        <br/>
                                        <br/>
                                    </li>
                                    <li>
                                        10
                                    </li>
                                    <li>
                                        2500
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="red"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="red"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="red"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="red"/>
                                    </li>
                                    <li className="footer">
                                        <Fab variant="extended" color="primary" onClick={() => push('/checkout')}
                                             className="footer-button"> Go Silver </Fab>
                                    </li>
                                </ul>
                            </div>

                            <div className="column">
                                <ul className="price">
                                    <li className="header">
                                        Gold
                                        <br/>
                                        <span className="dollar">250</span>
                                        <br/>
                                        <br/>
                                    </li>
                                    <li>
                                        20
                                    </li>
                                    <li>
                                        10000
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li className="footer">
                                        <Fab variant="extended" color="primary" onClick={() => push('/checkout')}
                                             className="footer-button"> Go Gold </Fab>
                                    </li>
                                </ul>
                            </div>
                            <div className="column">
                                <ul className="price">
                                    <li className="header">
                                        Unlimited
                                        <br/>
                                        <span className="dollar">345</span>
                                        <br/>
                                        <br/>
                                    </li>
                                    <li>
                                        Unlimited
                                    </li>
                                    <li>
                                        Unlimited
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li>
                                        <BiCheckboxSquare color="green"/>
                                    </li>
                                    <li className="footer">
                                        <Fab variant="extended" color="primary" onClick={() => push('/checkout')}
                                             className="footer-button"> Go Unlimited </Fab>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Typography>
            </Container>
            {/* End footer */}
        </React.Fragment>
    );
}
