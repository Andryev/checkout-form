import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import util from "../util/util";


export default class EmailIntegrationForm extends Component {

    emailIntegration = {
        id: null,
        host: "",
        password: "",
        email: "",
        port: ""
    };
    constructor(props) {
        super(props);
        this.emailIntegration  = this.props.emailIntegration;
    }

    handleChange(evt, field) {
        this.emailIntegration = {
            ...this.emailIntegration,
            [field]: evt.target.value
        };
        this.props.formRet("emailIntegration", this.emailIntegration)
    }

    render() {
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    SMTP server info
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="host"
                            name="host"
                            label="Host"
                            variant="outlined"
                            fullWidth
                            autoComplete="host"
                            defaultValue={this.props.emailIntegration.host}
                            onChange={(event)=>this.handleChange(event, "host")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="port"
                            name="port"
                            variant="outlined"
                            label="Port"
                            type="number"
                            fullWidth
                            autoComplete="port"
                            defaultValue={this.props.emailIntegration.port}
                            onChange={(event)=>this.handleChange(event, "port")}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            error={!util.validateEmail(this.props.emailIntegration.email)}
                            id="email"
                            name="email"
                            label="E-mail"
                            fullWidth
                            variant="outlined"
                            autoComplete="email mail"
                            defaultValue={this.props.emailIntegration.email}
                            helperText={util.validateEmail(this.props.emailIntegration.email) ? '' : 'Sorry, this is not a valid email'}
                            onChange={(event)=>this.handleChange(event, "email")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            fullWidth
                            variant="outlined"
                            type="password"
                            autoComplete="password"
                            defaultValue={this.props.emailIntegration.password}
                            onChange={(event)=>this.handleChange(event, "password")}
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}
