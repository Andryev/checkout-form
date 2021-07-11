import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import CompanyInfoForm from './CompanyInfoForm';
import LogosForm from './LogosForm';
import EmailIntegrationForm from "./EmailIntegrationForm";
import PersonnelForm from "./PersonnelForm";
import PaymentForm from "./PaymentForm";
import Fab from "@material-ui/core/Fab";
import api from "../api";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

let subscription = {
    id: null,
    paymentInfo: "",
    emailIntegration: {
        host: "",
        password: "",
        email: "",
        port: ""
    },
    company: {
        companyName: "",
        businessPhone: "",
        businessAddress: "",
        ownerName: "",
        ownerMail: "",
        ownerPhone: "",
        yearsBusiness: "",
        currentSoftware: ""
    },
    logoFile: {
        id: null,
        companyLogoFile: "",
        companyLogo: [],
        companyTextFile: "",
        companyText: [],
        companyFaviconFile: "",
        companyFavicon: [],
        withoutLogo: false,
    },
    personalInfo: {
        taxPreparersList: [],
        additionalPersonalList: [],
        administrativeAssistantsList: [],
        taxPreparersQuantities: "",
        administrativeQuantities: "",
    }
};
const stripePromise = api.getPublicStripeKey().then(key => loadStripe(key));

const useStyles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 1000,
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
const steps = ['Company Info', 'Email Integration', 'Logos', 'Personnel Info', 'Payment Details'];


class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            companyInfoValid: true,
        };
    }

    getStepContent(state) {
        switch (state.count) {
            case 0:
                return <CompanyInfoForm
                    company={subscription.company}
                    formRet={this.dataRet.bind(this)}/>;
            case 1:
                return <EmailIntegrationForm
                    emailIntegration={subscription.emailIntegration}
                    formRet={this.dataRet.bind(this)}/>;
            case 2:
                return <LogosForm
                    logoFile={subscription.logoFile}
                    formRet={this.dataRet.bind(this)}/>;
            case 3:
                return <PersonnelForm
                    personalInfo={subscription.personalInfo}
                    formRet={this.dataRet.bind(this)}/>;
            case 4:
                this.save(subscription);
                return <Elements stripe={stripePromise}>
                    <PaymentForm subscription={subscription} priceId={this.props.match.params.productId}
                                 formRet={this.dataRet.bind(this)}
                                 update={this.update.bind(this)}
                    />
                </Elements>;
            default:
                throw new Error('Unknown step');
        }
    }

    async save(data) {

        const formData = new FormData();
        if (data.logoFile.companyFaviconFile) {
            formData.append(
                "companyFavicon",
                data.logoFile.companyFaviconFile,
                data.logoFile.companyFaviconFile.name
            );
        }


        if (data.logoFile.companyLogoFile) {
            formData.append(
                "companyLogo",
                data.logoFile.companyLogoFile,
                data.logoFile.companyLogoFile.name
            );
        }


        if (data.logoFile.companyTextFile) {
            formData.append(
                "companyText",
                data.logoFile.companyTextFile,
                data.logoFile.companyFaviconFile.name
            );
        }


        formData.append('subscription', new Blob([JSON.stringify(data)], {type: 'application/json'}));

        api
            .createCompany(formData)
            .then((response) => {
                subscription = response;
            })
            .catch((err) => {
                console.log(err.message);
            });
    }


    dataRet(field, value) {
        subscription[field] = value;
        this.setState({
            companyInfoValid: !Object.values(subscription.company).every(x => (x !== undefined && x !== '' && x !== null))
        });
    }

    update(payment) {
        const formData = new FormData();
        subscription.status = "I";
        subscription.paymentInfo = JSON.stringify(payment).toString();
        formData.append('subscription', new Blob([JSON.stringify(subscription)], {type: 'application/json'}));

        api
            .updateCompany(formData)
            .then((response) => {
                subscription = response;
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    render() {
        const {classes} = this.props;
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
                                    {this.getStepContent(this.state)}
                                    <div className={classes.buttons}>
                                        {this.state.count !== 0 && this.state.count !== 4 && (
                                            <Fab variant="contained"
                                                 size="small"
                                                 onClick={() => this.setState({count: this.state.count - 1})}
                                                 className={classes.button}>
                                                Back
                                            </Fab>
                                        )}
                                        {this.state.count !== 4 && (
                                        <Fab
                                            disabled={this.state.companyInfoValid}
                                            size="small"
                                            variant="contained"
                                            color="primary"
                                            onClick={() => this.setState({count: this.state.count + 1})}
                                            className={classes.button}
                                        >
                                            {this.state.count === steps.length - 1 ? 'Place order' : 'Next'}
                                        </Fab>
                                        )}
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
