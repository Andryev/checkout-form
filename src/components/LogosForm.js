import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


export default function LogosForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Logos Info
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="useCompanyName" value="yes" />}
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
                        />
                        <Button
                            className="btn-choose"
                            variant="outlined"
                            color="primary"
                            component="span">
                            Upload Company Logo
                        </Button>
                        <span>   File name.jpg</span>
                    </label>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <label htmlFor="btn-upload">
                        <input
                            id="btn-upload"
                            name="btn-upload"
                            style={{display: 'none'}}
                            type="file"
                        />
                        <Button
                            className="btn-choose"
                            variant="outlined"
                            color="primary"
                            component="span">
                            Upload Company Text
                        </Button>
                        <span>   File name.jpg</span>
                    </label>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <label htmlFor="btn-upload">
                        <input
                            id="btn-upload"
                            name="btn-upload"
                            style={{display: 'none'}}
                            type="file"
                        />
                        <Button
                            className="btn-choose"
                            variant="outlined"
                            color="primary"
                            component="span">
                            Upload Company Favicon
                        </Button>
                        <span>   File name.jpg</span>
                    </label>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
