import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactMail from '@material-ui/icons/ContactMail';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from "@material-ui/core/Fab";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import util from "../util/util";

let personalInfo = {
    taxPreparersList: [],
    additionalPersonalList: [],
    administrativeAssistantsList: [],
    taxPreparersQuantities: "",
    administrativeQuantities: "",
};

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '60.50%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    }
});

class PersonnelForm extends Component {
    state = {
        expanded: null,
        personalInfo: {
            taxPreparersList: [],
            additionalPersonalList: [],
            administrativeAssistantsList: [],
            taxPreparersQuantities: "",
            administrativeQuantities: "",
        },
        taxPreparers: {
            name: "",
            mail: ""
        },
        administrativeAssistants: {
            name: "",
            mail: ""
        },
        additionalPersonal: {
            name: "",
            mail: ""
        },
    };

    constructor(props) {
        super(props);
        personalInfo = {
            ...this.props.personalInfo
        };
        this.setState({
            personalInfo: personalInfo
        });
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
        this.props.formRet("personalInfo", personalInfo)
    };

    handleChangeInput (evt, field) {
        personalInfo = {
            ...personalInfo,
            [field]: evt.target.value
        };
        this.setState({
            personalInfo: personalInfo
        });
    };

    addTaxPreparersList() {
        const found = this.state.personalInfo.taxPreparersList.some(el => el.mail === this.state.taxPreparers.mail);
        if (!found) {
            personalInfo.taxPreparersList.push(this.state.taxPreparers);
            this.setState({
                personalInfo: personalInfo
            });
        }
        const taxPreparers = {
            name: "",
            mail: ""
        };
        this.setState({
            taxPreparers: taxPreparers
        });
    }

    addAdditionalPersonalList() {
        const found = this.state.personalInfo.additionalPersonalList.some(el => el.mail === this.state.additionalPersonal.mail);
        if (!found) {
            personalInfo.additionalPersonalList.push(this.state.additionalPersonal);
            this.setState({
                personalInfo: personalInfo
            });
        }
        const additionalPersonal = {
            name: "",
            mail: ""
        };
        this.setState({
            additionalPersonal: additionalPersonal
        });
    }

    addAdministrativeAssistants() {
        const found = this.state.personalInfo.administrativeAssistantsList.some(
            el => el.mail === this.state.administrativeAssistants.mail);
        if (!found) {
            personalInfo.administrativeAssistantsList.push(this.state.administrativeAssistants);
            this.setState({
                personalInfo: personalInfo
            });
        }
        const administrativeAssistants = {
            name: "",
            mail: ""
        };
        this.setState({
            administrativeAssistants: administrativeAssistants
        });
    }

    removeTaxPreparersList(mail) {
        this.state.personalInfo.taxPreparersList.splice(this.state.personalInfo.taxPreparersList.findIndex(function (i) {
            return i.mail === mail;
        }), 1);
        this.setState({
            personalInfo: personalInfo
        });
    }

    removeAdditionalPersonal(mail) {
        this.state.personalInfo.additionalPersonalList.splice(this.state.personalInfo.additionalPersonalList.findIndex(function (i) {
            return i.mail === mail;
        }), 1);
        this.setState({
            personalInfo: personalInfo
        });
    }


    removeAddAdministrativeAssistants(mail) {
        this.state.personalInfo.administrativeAssistantsList.splice(this.state.personalInfo.administrativeAssistantsList.findIndex(function (i) {
            return i.mail === mail;
        }), 1);
        this.setState({
            personalInfo: personalInfo
        });
    }


    handleChangeTaxPreparers(evt, field) {
        const taxPreparers = {
            ...this.state.taxPreparers,
            [field]: evt.target.value
        };
        this.setState({
            taxPreparers: taxPreparers
        });
    }

    handleChangeAdditionalPersonal(evt, field) {
        const additionalPersonal = {
            ...this.state.additionalPersonal,
            [field]: evt.target.value
        };
        this.setState({
            additionalPersonal: additionalPersonal
        });
    }

    handleChangeAdministrativeAssistants(evt, field) {
        const administrativeAssistants = {
            ...this.state.administrativeAssistants,
            [field]: evt.target.value
        };
        this.setState({
            administrativeAssistants: administrativeAssistants
        });
    }

    render() {
        const {classes} = this.props;
        const {expanded} = this.state;

        return (
            <div className={classes.root}>
                <Accordion expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography className={classes.heading}>How many Tax preparers are in your firm?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={2}>
                                <TextField
                                    required
                                    type="number"
                                    id="taxPreparersQuantities"
                                    name="taxPreparersQuantities"
                                    label="Quantities ?"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="quantities"
                                    defaultValue={this.props.personalInfo.taxPreparersQuantities}
                                    onChange={(event)=>this.handleChangeInput(event, "taxPreparersQuantities")}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    id="taxPreparersName"
                                    name="taxPreparersName"
                                    variant="outlined"
                                    label="Name"
                                    value={this.state.taxPreparers.name}
                                    fullWidth
                                    autoComplete="tax Preparers name"
                                    onChange={(event) => this.handleChangeTaxPreparers(event, "name")}
                                />
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <TextField
                                    required
                                    error={!util.validateEmail(this.state.taxPreparers.mail)}
                                    id="taxPreparersMail"
                                    name="taxPreparersMail"
                                    variant="outlined"
                                    label="E-mail"
                                    value={this.state.taxPreparers.mail}
                                    fullWidth
                                    helperText={util.validateEmail(this.state.taxPreparers.mail) ? '' : 'Sorry, this is not a valid email'}
                                    autoComplete="tax Preparers mail"
                                    onChange={(event) => this.handleChangeTaxPreparers(event, "mail")}
                                />
                            </Grid>
                            <Grid item xs={12} sm={1}>
                                <Fab
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    onClick={() => this.addTaxPreparersList()}
                                    className={classes.button}
                                >
                                    Add
                                </Fab>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <div className={classes.root}>
                                    <List
                                        component="nav"
                                        subheader={<ListSubheader component="div">Contacts</ListSubheader>}
                                    >
                                        {this.props.personalInfo.taxPreparersList.map((tax) =>
                                            <ListItem button key={tax.mail}>
                                                <ListItemIcon>
                                                    <ContactMail/>
                                                </ListItemIcon>
                                                <ListItemText inset primary={tax.name}/>
                                                <ListItemText inset primary={tax.mail}/>
                                                <ListItemSecondaryAction >
                                                    <IconButton edge="end" aria-label="delete"
                                                                onClick={() => this.removeTaxPreparersList(tax.mail)}>
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        )}
                                    </List>
                                </div>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography className={classes.heading}>How many Administrative assistants?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={2}>
                                <TextField
                                    required
                                    type="number"
                                    id="administrativeQuantities"
                                    name="administrativeQuantities"
                                    label="Quantities ?"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="quantities"
                                    defaultValue={this.props.personalInfo.administrativeQuantities}
                                    onChange={(event)=>this.handleChangeInput(event, "administrativeQuantities")}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    id="taxPreparersName"
                                    name="taxPreparersName"
                                    variant="outlined"
                                    label="Name"
                                    value={this.state.administrativeAssistants.name}
                                    fullWidth
                                    autoComplete="tax Preparers name"
                                    onChange={(event) => this.handleChangeAdministrativeAssistants(event, "name")}
                                />
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <TextField
                                    required
                                    error={!util.validateEmail(this.state.administrativeAssistants.mail)}
                                    id="taxPreparersMail"
                                    name="taxPreparersMail"
                                    variant="outlined"
                                    label="E-mail"
                                    value={this.state.administrativeAssistants.mail}
                                    helperText={util.validateEmail(this.state.administrativeAssistants.mail) ? '' : 'Sorry, this is not a valid email'}
                                    fullWidth
                                    autoComplete="tax Preparers mail"
                                    onChange={(event) => this.handleChangeAdministrativeAssistants(event, "mail")}
                                />
                            </Grid>
                            <Grid item xs={12} sm={1}>
                                <Fab
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    onClick={() => this.addAdministrativeAssistants()}
                                    className={classes.button}
                                >
                                    Add
                                </Fab>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <div className={classes.root}>
                                    <List
                                        component="nav"
                                        subheader={<ListSubheader component="div">Contacts</ListSubheader>}
                                    >
                                        {this.props.personalInfo.administrativeAssistantsList.map((adm) =>
                                            <ListItem button key={adm.mail}>
                                                <ListItemIcon>
                                                    <ContactMail/>
                                                </ListItemIcon>
                                                <ListItemText inset primary={adm.name}/>
                                                <ListItemText inset primary={adm.mail}/>
                                                <ListItemSecondaryAction >
                                                    <IconButton edge="end" aria-label="delete"
                                                                onClick={() => this.removeAddAdministrativeAssistants(adm.mail)}>
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        )}
                                    </List>
                                </div>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography className={classes.heading}>Additional personal to add?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={5}>
                                <TextField
                                    required
                                    id="taxPreparersName"
                                    name="taxPreparersName"
                                    variant="outlined"
                                    label="Name"
                                    value={this.state.additionalPersonal.name}
                                    fullWidth
                                    autoComplete="tax Preparers name"
                                    onChange={(event) => this.handleChangeAdditionalPersonal(event, "name")}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    error={!util.validateEmail(this.state.additionalPersonal.mail)}
                                    id="taxPreparersMail"
                                    name="taxPreparersMail"
                                    variant="outlined"
                                    label="E-mail"
                                    value={this.state.additionalPersonal.mail}
                                    fullWidth
                                    helperText={util.validateEmail(this.state.additionalPersonal.mail) ? '' : 'Sorry, this is not a valid email'}
                                    autoComplete="tax Preparers mail"
                                    onChange={(event) => this.handleChangeAdditionalPersonal(event, "mail")}
                                />
                            </Grid>
                            <Grid item xs={12} sm={1}>
                                <Fab
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    onClick={() => this.addAdditionalPersonalList()}
                                    className={classes.button}
                                >
                                    Add
                                </Fab>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <div className={classes.root}>
                                    <List
                                        component="nav"
                                        subheader={<ListSubheader component="div">People</ListSubheader>}
                                    >
                                        {this.props.personalInfo.additionalPersonalList.map((per) =>
                                            <ListItem button key={per.mail}>
                                                <ListItemIcon>
                                                    <ContactMail/>
                                                </ListItemIcon>
                                                <ListItemText inset primary={per.name}/>
                                                <ListItemText inset primary={per.mail}/>
                                                <ListItemSecondaryAction >
                                                    <IconButton edge="end" aria-label="delete"
                                                                onClick={() => this.removeAdditionalPersonal(per.mail)}>
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        )}
                                    </List>
                                </div>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }
}

export default withStyles(styles)(PersonnelForm);
