import React, {useEffect, useState} from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
    CardCvcElement,
    CardNumberElement,
    CardExpiryElement,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";
import StripeInput from './StripeInput'
import {makeStyles} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import api from "../api";
import Fab from "@material-ui/core/Fab";
import {render} from "@testing-library/react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {useHistory} from "react-router-dom";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

export default function PaymentForm(props) {
    const classes = useStyles();
    const stripe = useStripe();
    const history = useHistory();
    const elements = useElements();
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [product, setProduct] = React.useState(null);

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = () => {
        api.getProduct(props.priceId).then((prod) => {
            setProduct(prod);
        }).catch((err) => {
            console.log(err);
        });

        api.createCustomer(props.subscription.company.ownerMail).then((customer) => {

            let postBody = {
                priceId: props.priceId,
                customerId: customer.id
            };

            api.createPaymentIntent(postBody).then((data) => {
                setClientSecret(data.clientSecret);
            }).catch((err) => {
                console.log(err.message);
            });

        }).catch((err) => {
            console.log(err.message);
        });
    };

    const handleSubmit = (stripe, elements) => async () => {

        setProcessing(true);
        const cardElement = elements.getElement(CardCvcElement);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: props.subscription.company.ownerName,
                },
            }
        }).catch((err) => {
            console.log(err);
            setProcessing(false);
        });
        //
        if (payload.error) {
            setProcessing(false);
            console.log("[error]", payload.error);
            if (payload.error.type === 'validation_error') {
                setOpen(true);
                setErrorMessage("Incomplete or invalid credit card details");
            }
            if (payload.error.code === 'payment_intent_authentication_failure') {
                setOpen(true);
                setErrorMessage("Two-factor authentication failed");
            }
            if (payload.error.code === 'card_declined') {
                setOpen(true);
                setErrorMessage("Insufficient funds");
            }
            if (payload.error.code === 'expired_card') {
                setOpen(true);
                setErrorMessage("Expired credit card");
            }
            if (payload.error.code === 'incorrect_cvc') {
                setOpen(true);
                setErrorMessage("Incorrect CVC code");
            }
        } else {
            props.update(payload.paymentIntent);
            navigate('/success');
        }
    };

    const navigate = path => {
        history.push(path);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    render()
    {
        return <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                <ListItem className={classes.listItem} key={product?.planName}>
                    <ListItemText primary={product?.planName}/>
                    <Typography variant="body2">${product?.value}/Month</Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>{props.subscription.company.companyName}</Typography>
                    <Typography gutterBottom>{props.subscription.company.businessAddress}</Typography>
                </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <br/>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Credit Card Number"
                        name="ccnumber"
                        variant="outlined"
                        required
                        fullWidth
                        InputProps={{
                            inputComponent: StripeInput,
                            inputProps: {
                                component: CardNumberElement
                            },
                        }}
                        InputLabelProps={{shrink: true}}
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <TextField
                        label="Expiration Date"
                        name="ccexp"
                        variant="outlined"
                        required
                        fullWidth
                        InputProps={{
                            inputProps: {
                                component: CardExpiryElement
                            },
                            inputComponent: StripeInput
                        }}
                        InputLabelProps={{shrink: true}}
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <TextField
                        label="CVC"
                        name="cvc"
                        variant="outlined"
                        required
                        fullWidth
                        InputProps={{
                            inputProps: {
                                component: CardCvcElement
                            },
                            inputComponent: StripeInput
                        }}
                        InputLabelProps={{shrink: true}}
                    />
                </Grid>

            </Grid>
            <React.Fragment>
                <div className={classes.buttons}>
                    <Fab
                        disabled={processing}
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit(stripe, elements)}
                        className={classes.button}
                    >
                        Place order
                    </Fab>
                </div>
            </React.Fragment>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}
                      anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                <Alert onClose={handleClose} severity="error">
                    {errorMessage}
                </Alert>
            </Snackbar>
        </React.Fragment>;


    }
}
