import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


export default function EmailIntegrationForm() {
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
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="port"
                        name="port"
                        variant="outlined"
                        label="Port"
                        fullWidth
                        autoComplete="port"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="email"
                        name="email"
                        label="E-mail"
                        fullWidth
                        variant="outlined"
                        autoComplete="email mail"
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
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
