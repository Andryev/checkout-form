import './App.css';
import Pricing from "./components/Pricing";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {loadStripe} from "@stripe/stripe-js";
import Checkout from "./components/Checkout";
import api from "./api";
import {
    Switch,
    Route,
    Link,
    BrowserRouter as Router
} from "react-router-dom";
import React, {Component} from "react";
import Fab from "@material-ui/core/Fab";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ff4200'
        }
    }
});

const stripePromise = api.getPublicStripeKey().then(key => loadStripe(key));

class App extends Component {
    render() {
        return (
                <MuiThemeProvider theme={theme}>
                    <div className="App">
                        <div>
                            <Switch>
                                <Route exact path={["/", "/pricing"]} component={Pricing}/>
                                <Route exact path="/checkout" component={Checkout}/>
                            </Switch>
                        </div>
                    </div>
                </MuiThemeProvider>
        );
    }
}

export default App;
