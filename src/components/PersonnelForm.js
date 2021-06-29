import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


export default function PersonnelForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Personnel Info
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="companyName"
                        name="companyName"
                        label="How many Tax preparers are in your firm?"
                        variant="outlined"
                        fullWidth
                        autoComplete="company-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="businessPhone"
                        name="businessPhone"
                        variant="outlined"
                        label="How many Administrative assistants?"
                        fullWidth
                        autoComplete="business-phone"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
