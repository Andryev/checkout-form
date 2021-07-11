import './App.css';
import {MuiThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles';
import Checkout from "./components/Checkout";
import {
    Switch,
    Route,
} from "react-router-dom";
import React, {Component} from "react";
import PaymentSuccess from "./components/PaymentSuccess";
import Toolbar from "@material-ui/core/Toolbar";
import CameraIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Pricing from "./components/Pricing";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ff4200'
        }
    }
});
const useStyles = theme => ({
    appBar: {
        background: '#262662'
    },
    icon: {
        marginRight: theme.spacing(2),
    },
});
class App extends Component {
    render() {
        const {classes} = this.props;
        return (
                <MuiThemeProvider theme={theme}>
                    <div className="App">
                        <AppBar position="sticky" className={classes.appBar} >
                            <Toolbar>
                                <CameraIcon className={classes.icon} />
                                <Typography variant="h6" color="inherit" noWrap >
                                    <img className="logo" src={process.env.PUBLIC_URL + 'pacesetter-logo-retina.png'} alt=""/>
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <div>
                            <Switch>
                                <Route exact path={["/", "/pricing"]} component={Pricing}/>
                                <Route exact path="/checkout/:productId" component={Checkout}/>
                                <Route exact path="/success" component={PaymentSuccess}/>
                            </Switch>
                        </div>
                    </div>
                </MuiThemeProvider>
        );
    }
}

export default withStyles(useStyles)(App)
