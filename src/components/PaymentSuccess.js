import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    }
}));


export default function PaymentSuccess() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
                            Welcome to the Pacesetter App
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            You should have an email in your inbox with login credentials.<br/>
                            Please bookmark the linked page for easy reference.<br/>
                            You will have also received a url link that you can share with your clients so they can easily access the mobile application.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                {/*<Grid item>*/}
                                {/*    <Button variant="contained" color="primary">*/}
                                {/*        Client Login Page*/}
                                {/*    </Button>*/}
                                {/*</Grid>*/}
                                <Grid item>
                                    <Button variant="contained" color="primary" href="https://pacesettertax.com/">
                                        Home
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </React.Fragment>
    );
}
