import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import util from "../util/util";

export default class CompanyInfoForm extends Component {

    company = {
        id: null,
        companyName: "",
        businessPhone: "",
        businessAddress: "",
        ownerName: "",
        ownerMail: "",
        ownerPhone: "",
        yearsBusiness: "",
        currentSoftware: ""
    };
    constructor(props) {
        super(props);
        this.company = this.props.company;
        this.setState({
            email_error_text: "Sorry, this is not a valid email"
        });
    }

    handleChange (evt, field) {
        this.company = {
            ...this.company,
            [field]: evt.target.value
        };
        this.props.formRet("company", this.company)
    }

    render() {
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
                            defaultValue={this.props.company.companyName}
                            onChange={(event)=>this.handleChange(event, "companyName")}
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
                            defaultValue={this.props.company.businessPhone}
                            onChange={(event)=>this.handleChange(event, "businessPhone")}
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
                            defaultValue={this.props.company.businessAddress}
                            onChange={(event)=>this.handleChange(event, "businessAddress")}
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
                            defaultValue={this.props.company.ownerName}
                            onChange={(event)=>this.handleChange(event, "ownerName")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            error={!util.validateEmail(this.props.company.ownerMail)}
                            id="ownerMail"
                            name="ownerMail"
                            label="Owner Email"
                            fullWidth
                            variant="outlined"
                            autoComplete="owner mail"
                            helperText={util.validateEmail(this.props.company.ownerMail) ? '' : 'Sorry, this is not a valid email'}
                            defaultValue={this.props.company.ownerMail}
                            onChange={(event)=>this.handleChange(event, "ownerMail")}
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
                            defaultValue={this.props.company.ownerPhone}
                            onChange={(event)=>this.handleChange(event, "ownerPhone")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="yearsBusiness"
                            name="yearsBusiness"
                            label="Years in Business"
                            fullWidth
                            type="number"
                            variant="outlined"
                            autoComplete="owner phone"
                            defaultValue={this.props.company.yearsBusiness}
                            onChange={(event)=>this.handleChange(event, "yearsBusiness")}
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
                            defaultValue={this.props.company.currentSoftware}
                            onChange={(event)=>this.handleChange(event, "currentSoftware")}
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}
