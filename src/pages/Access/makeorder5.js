import React from 'react';
import clsx from 'clsx';
import { Button, Paper, AppBar, Toolbar } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Header from './header2'
import { withStyles } from '@material-ui/core/styles';
import { Component } from 'react';
import { connect } from "react-redux";
import firebase from '../../Firebase/firebase';
import "./yourstyle.css"
import Logo from "../../assets/svg/049-delivery truck.svg"
import { bounce } from "react-animations"
import { headShake } from "react-animations"
import { pulse } from "react-animations"
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import styled, { keyframes } from "styled-components"
import Radium, { StyleRoot } from 'radium';
import Dialog from '@material-ui/core/Dialog';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import { withRouter } from "react-router-dom";
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid"
import Map from "./map1"
import Image from "../../assets/newimage1.jpg"

const styles = {
    bounce: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounce, 'bounce')
    }
}

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}



const useStyles = theme => ({

    margin:
    {
        marginLeft: "2%",
        marginRight:"2%"
    },

    root: {
        marginTop: "2%",
        background:'#44d5fe'
            //"#44d5fe"
    }


});

const Bounce = styled.div`animation: 1s ${keyframes`${bounce}`} 1`;
const Shake = styled.div`animation: 3s ${keyframes`${headShake}`} infinite`;
const Pulse = styled.div`animation: 3s ${keyframes`${pulse}`} infinite`;




class Access extends Component {


    constructor() {
        super();
        this.dbRef = firebase.firestore().collection('orders');
        this.state = {
            adress: '',
            selection: '',
            date: '',
            zipcode: '',
            amount: "",
            comment: '',
            error: '',
            price: "",
            error: "",
            isDateChanged: false,

        }
    }

    


    addOrderToDatabase = () => {
        var d = new Date();
        var n = d.toString();

        //console.log(typeof (n))
        this.dbRef.add({
            //here goes all the database nested logic
            // adress: this.state.adress,
            //amountof: this.state.amountof,
            selection: this.state.selection,
            zipcode: this.state.zipcode,
            comment: this.state.comment,
            amount: this.state.amount,
            date: n,
            userId: firebase.auth().currentUser.uid,
            //balance:5
        })

            .catch((err) => {
                console.error("Error found: ", err);
            });


    }


    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.value)



    };




    sendToPreference = () => {

        var date = new Date(new Date().toDateString())


        if (date > this.props.date) {
            this.setState({ error: "Please  pick a future date" })
            console.log("date is", date);
            console.log("this.props.date is", this.props.date);
        }

        else if (this.props.amount == "" || this.props.adress == "" || this.props.zipcode == "") {
            this.setState({ error: "Please fill out all the fields" })
        }



        else {
            this.props.history.push("/preference")

        }

    }



    render() {

        const { classes } = this.props;
        // const { amount, password, error, fname, lname } = this.state;


        return (



            <MuiPickersUtilsProvider utils={DateFnsUtils}>
               
                <div >
                    <Header />
                   
                        <div style={{ marginBottom: "5%" }} className="thirdcenter">
                            <h2 style={{ textAlign: "center"/*, borderBottom: "1px solid #9cecfb", */, fontSize: "1.5rem", /*paddingBottom: "2%",*/ letterSpacing: "2px" }}> Place Order </h2>
                        <div className="thirdcenter" style={{ textAlign: "center", width: "10%", borderBottom: "3px solid #9cecfb" }} />
                        </div>

                    <div className="divcenter" style={{ width:"80%", marginTop:"5%" }} >

                        <Typography component="p" className={classes.p}>
                            {this.state.error}
                        </Typography>
              
                     
                        <Paper elevation={24} variant="outlined" >
                        <div>
                               
                        </div>
                            <Grid container
                                spacing={3}>

                                <Grid item xs={12} md={6} lg={6}>
                                    <img src={Image} width="100%" />
                                </Grid>

                                <Grid item xs={12} md={6} lg={6}>
                                    <div className={classes.margin}>
                                                               

                                    <div>
                                        <TextField

                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="phone"
                                            label="Phone Number"
                                            name="phone"
                                            autoFocus
                                            value={this.props.amount}
                                            onChange={this.props.UPDATE_AMOUNT}
                                        />
                                    </div>

                                    <div >
                                        <TextField

                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="pickup"
                                            label="Pick Up Adress"
                                            name="pickup"
                                            value={this.props.adress}
                                           onChange={this.props.UPDATE_ADRESS}  
                                            
                                        />
                                        </div>

                                        <div >
                                            <TextField

                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="zid"
                                                label="Zip code"
                                                name="zip"
                                                //autoComplete="email"
                                                value={this.props.zipcode}
                                                onChange={this.props.UPDATE_ZIPCODE}
                                            />
                                        </div>

                                        <div >
                                <KeyboardDatePicker
                                           
                                           
                                            inputVariant="outlined"
                                            fullWidth
                                            required
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Please select a date"
                                            format="MM/dd/yyyy"
                                            value={this.props.date}
                                            onChange={this.props.UPDATE_DATE}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',

                                            }}
                                           
                                        />


                                    </div>

                                        <div >
                                            <Pulse>
                                            <Button
                                                fullWidth
                                              onClick={this.sendToPreference}
                                                variant="contained"
                                                color="primary"
                                                size="large"
                                              className={clsx( classes.root)}
                                          
                                            >
                                                    Submit Order
                                         </Button>
                                        </Pulse>
                                        </div>
                                        </div>
                                </Grid>

                               

                                
                            </Grid>


                        </Paper>
                   
                    


                    </div>
                    </div>

            </MuiPickersUtilsProvider>

        )






    }

}


//export default withStyles(useStyles)(Access);
const mapStateToProps = state => {
    return {

        adress: state.adress,
        selection: state.selection,
        date: state.date,
        zipcode: state.zipcode,
        amount: state.amount,
        comment: state.comment,
        error: state.error,
        price: state.price
    };
};

const mapDispatchToProps = dispatch => {
    return {
        UPDATE_ADRESS: (evt) => {
            console.log(evt.target.value)
            const action = { type: "UPDATE_ADRESS", text: evt.target.value };
            dispatch(action)
        },

        UPDATE_ZIPCODE: (evt) => {
            console.log(evt.target.value)
            const action = { type: "UPDATE_ZIPCODE", text: evt.target.value };
            dispatch(action)
        },

        UPDATE_DATE: (evt) => {
            console.log(evt)
            const action = { type: "UPDATE_DATE", text: evt };
            dispatch(action)
        },

        UPDATE_AMOUNT: (evt) => {
            console.log(evt.target.value)
            const action = { type: "UPDATE_AMOUNT", text: evt.target.value };
            dispatch(action)
        }

    }

};




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Access)))




