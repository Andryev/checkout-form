import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { CardElement } from "@stripe/react-stripe-js";

export default function PaymentForm() {
    const options = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#aab7c4",
                },
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a",
            },
        },
    };
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField required id="cardName" label="Name on card"
                               fullWidth autoComplete="cc-name"  variant="outlined"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="sr-combo-inputs-row">
                        <CardElement
                            className="sr-input sr-card-element"
                            options={options}
                        />
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
