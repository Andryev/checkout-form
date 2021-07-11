import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


export default class LogosForm extends Component {

    logoFile = {
        id: null,
        companyLogoFile: "",
        companyLogo: "",
        companyTextFile: "",
        companyText: "",
        companyFaviconFile: "",
        companyFavicon: "",
        withoutLogo: false,
    };

    constructor(props) {
        super(props);
        this.logoFile  = this.props.logoFile;
    }

    handleChange(evt, field) {
        this.logoFile = {
            ...this.logoFile,
            [field]: evt.target.checked
        };
        this.props.formRet("logoFile", this.logoFile)
    }

    handleFileChange(evt, field) {
        this.logoFile = {
            ...this.logoFile,
            [field]: evt.target.files[0]
        };
        this.props.formRet("logoFile", this.logoFile)
    }

    render() {
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Logos Info
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="useCompanyName"
                                    checked={this.props.logoFile.withoutLogo}
                                    color="primary"
                                    onChange={(event)=>this.handleChange(event, "withoutLogo")}/>}
                            label="Use company name without a logo"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <label htmlFor="btn-upload">
                            <input
                                id="btn-upload"
                                name="btn-upload"
                                style={{display: 'none'}}
                                type="file"
                                onChange={(event)=>this.handleFileChange(event, "companyLogoFile")}
                            />
                            <Button
                                disabled={this.logoFile.withoutLogo}
                                className="btn-choose"
                                variant="outlined"
                                color="primary"
                                component="span">
                                Upload Company Logo
                            </Button>
                            <span>   {this.logoFile.companyLogoFile !== undefined ? this.logoFile.companyLogoFile.name :  ''}</span>
                        </label>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <label htmlFor="btn-upload3">
                            <input
                                id="btn-upload3"
                                name="btn-upload"
                                style={{display: 'none'}}
                                type="file"
                                onChange={(event)=>this.handleFileChange(event, "companyTextFile")}
                            />
                            <Button
                                disabled={this.logoFile.withoutLogo}
                                className="btn-choose"
                                variant="outlined"
                                color="primary"
                                component="span">
                                Upload Company Text
                            </Button>
                            <span>   {this.logoFile.companyTextFile !== undefined ? this.logoFile.companyTextFile.name :  ''}</span>
                        </label>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <label htmlFor="btn-upload2">
                            <input
                                id="btn-upload2"
                                name="btn-upload"
                                style={{display: 'none'}}
                                type="file"
                                onChange={(event)=>this.handleFileChange(event, "companyFaviconFile")}
                            />
                            <Button
                                disabled={this.logoFile.withoutLogo}
                                className="btn-choose"
                                variant="outlined"
                                color="primary"
                                component="span">
                                Upload Company Favicon
                            </Button>
                            <span>   {this.logoFile.companyFaviconFile !== undefined ? this.logoFile.companyFaviconFile.name :  ''}</span>
                        </label>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}
