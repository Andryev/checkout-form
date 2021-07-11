import "../App.css";

import React, {useEffect, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {BiCheckboxSquare} from "react-icons/bi";
import Fab from "@material-ui/core/Fab";
import {useHistory} from "react-router-dom";
import api from "../api";



export default function Pricing() {

    const { push } = useHistory();
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        getAllPlans();
    }, []);

    const getAllPlans = () => {
        api.getPlans().then(plan =>  setPlans(plan));
    };

    let proprietor = null;
    let gold = null;
    let silver = null;
    let unlimited = null;

    proprietor = plans.find(x => x.type === 'PROPRIETOR');
    gold = plans.find(x => x.type === 'GOLD');
    silver = plans.find(x => x.type === 'SILVER');
    unlimited = plans.find(x => x.type === 'UNLIMITED');



    return (
        <React.Fragment >
            <CssBaseline/>
            {/* Hero unit */}
            <Container maxWidth="sm" component="main">
                <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom
                            className="title">
                    <h2 className="title">Pricing</h2>
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
                            {proprietor !== undefined && (
                            <div className="column">
                                <ul className="price">
                                    <li className="header">
                                        {proprietor?.planName}
                                        <br/>
                                        <span className="dollar">{proprietor?.value}</span><span className="month">/Month</span>
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
                                                 onClick={() => {
                                                     push('/checkout/'+unlimited?.priceId);
                                                 }}>
                                                Go {proprietor?.planName} </Fab>
                                        {/*</Link>*/}
                                    </li>
                                </ul>
                            </div>
                            )}
                            {silver !== undefined && (
                            <div className="column">
                                <ul className="price">
                                    <li className="header">
                                        {silver?.planName}
                                        <br/>
                                        <span className="dollar">{silver?.value}</span><span className="month">/Month</span>
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
                                        <Fab variant="extended" color="primary" onClick={() => push('/checkout/' + silver?.priceId)}
                                             className="footer-button"> Go {silver?.planName} </Fab>
                                    </li>
                                </ul>
                            </div>
                            )}
                            {gold !== undefined && (
                            <div className="column">
                                <ul className="price">
                                    <li className="header">
                                        {gold?.planName}
                                        <br/>
                                        <span className="dollar">{gold?.value}</span><span className="month">/Month</span>
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
                                        <Fab variant="extended" color="primary" onClick={() => push('/checkout/' + gold?.priceId)}
                                             className="footer-button"> Go {gold?.planName} </Fab>
                                    </li>
                                </ul>
                            </div>
                            )}
                            {unlimited !== undefined && (
                            <div className="column">
                                <ul className="price">
                                    <li className="header">
                                        {unlimited?.planName}
                                        <br/>
                                        <span className="dollar">{unlimited?.value}</span><span className="month">/Month</span>
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
                                        <Fab variant="extended" color="primary" onClick={() => push('/checkout/' + unlimited?.priceId)}
                                             className="footer-button"> Go {unlimited?.planName} </Fab>
                                    </li>
                                </ul>
                            </div>
                            )}
                        </div>
                    </div>
                </Typography>
            </Container>
            {/* End footer */}
        </React.Fragment>
    );
}
