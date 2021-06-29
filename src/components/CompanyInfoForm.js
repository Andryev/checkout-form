import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Fab from "@material-ui/core/Fab";
import {makeStyles} from "@material-ui/core";


export default class CompanyInfoForm extends Component {

    constructor(props) {
        super(props);
        console.log(props.companyInfo);
    }
    handleChange (evt, field) {
        // check it out: we get the evt.target.name (which will be either "email" or "password")
        // and use it to target the key on our `state` object with the same name, using bracket syntax
        this.setState({ [field]: evt.target.value });
    }



    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Company Info
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="companyName"
                            name="companyName"
                            label="Company Name"
                            variant="outlined"
                            fullWidth
                            autoComplete="company-name"
                            defaultValue={this.props.companyInfo.companyName}
                            onChange={(event)=>this.handleChange(event, "count")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="businessPhone"
                            name="businessPhone"
                            variant="outlined"
                            label="Business Phone number"
                            fullWidth
                            autoComplete="business-phone"
                            value={this.props.businessPhone}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="businessAddress"
                            name="businessAddress"
                            label="Business address"
                            fullWidth
                            variant="outlined"
                            autoComplete="shipping address-line1"
                            value={this.props.businessAddress}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="ownerName"
                            name="ownerName"
                            label="Owner Name"
                            fullWidth
                            variant="outlined"
                            autoComplete="owner name"
                            value={this.props.ownerName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="ownerMail"
                            name="ownerMail"
                            label="Owner Email"
                            fullWidth
                            variant="outlined"
                            autoComplete="owner mail"
                            value={this.props.ownerMail}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="ownerPhone"
                            name="ownerPhone"
                            label="Owner phone number"
                            fullWidth
                            variant="outlined"
                            autoComplete="owner phone"
                            value={this.props.ownerPhone}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="yearsBusiness"
                            name="yearsBusiness"
                            label="Years in Business"
                            fullWidth
                            variant="outlined"
                            autoComplete="owner phone"
                            value={this.props.yearsBusiness}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="currentSoftware"
                            name="currentSoftware"
                            label="Current Tax Software"
                            fullWidth
                            variant="outlined"
                            autoComplete="current software"
                            value={this.props.currentSoftware}
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}
