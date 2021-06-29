import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CompanyInfoForm from './CompanyInfoForm';
import LogosForm from './LogosForm';
import EmailIntegrationForm from "./EmailIntegrationForm";
import PersonnelForm from "./PersonnelForm";
import PaymentForm from "./PaymentForm";
import Fab from "@material-ui/core/Fab";


const useStyles  = theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
});
const steps = ['Company Info', 'Email Integration', 'Logos', 'Personnel Info', 'Payment Details', 'Review your order'];

function getStepContent(state) {
    switch (state.count) {
        case 0:
            console.log(state.companyInfo);
            return <CompanyInfoForm companyInfo={state.companyInfo}/>;
        case 1:
            console.log(state);
            return <EmailIntegrationForm/>;
        case 2:
            return <LogosForm/>;
        case 3:
            return <PersonnelForm/>;
        case 4:
            return <PaymentForm/>;
        default:
            throw new Error('Unknown step');
    }
}


class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            companyInfo :  {
                companyName: "Andryev",
                businessPhone: "",
                businessAddress: "",
                ownerName: "",
                ownerMail: "",
                ownerPhone: "",
                yearsBusiness: "",
                currentSoftware: ""
            },
        };

    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline/>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            Checkout
                        </Typography>
                        <Stepper activeStep={this.state.count} className={classes.stepper}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <React.Fragment>
                            {this.state.count === steps.length ? (
                                <React.Fragment>
                                    <Typography variant="h5" gutterBottom>
                                        Thank you for your order.
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Your order number is #2001539. We have emailed your order confirmation, and will
                                        send you an update when your order has shipped.
                                    </Typography>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {getStepContent(this.state)}
                                    <div className={classes.buttons}>
                                        {this.state.count !== 0 && (
                                            <Fab variant="contained"
                                                 size="small"
                                                 onClick={() => this.setState({ count: this.state.count - 1 })}
                                                 className={classes.button}>
                                                Back
                                            </Fab>
                                        )}
                                        <Fab
                                            size="small"
                                            variant="contained"
                                            color="primary"
                                            onClick={() => this.setState({ count: this.state.count + 1 })}
                                            className={classes.button}
                                        >
                                            {this.state.count === steps.length - 1 ? 'Place order' : 'Next'}
                                        </Fab>
                                    </div>
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}
export default withStyles(useStyles)(Checkout)
