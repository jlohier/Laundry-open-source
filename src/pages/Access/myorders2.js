import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import firebase from '../../Firebase/firebase';
import Button from "@material-ui/core/Button"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography, Checkbox } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Header from "./header2"
import "./yourstyle.css"
import CheckoutForm from './CheckoutForm'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import clsx from 'clsx';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import HomeIcon from '@material-ui/icons/Home';



const useStyles = theme => ({

    background: {
        marginTop: 140,
        backgroundImage: "url(" + "https://image.freepik.com/free-vector/realistic-blue-wavy-water-with-air-bubbles_88272-1050.jpg" + ")",
        background: 'rgba(0, 0, 0, 0.8)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        justifyContent: "center",
        alignItems: "center",
        padding: '7%',
        textDecoration: "bold"
    },

    submit: {
        marginTop: "2%",
        marginBottom: "2%",
        background: '#018DDC',
        borderRadius: "50px"

    },

    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },

    title:
    {

        textAlign: 'center',
        fontSize: "150%",
        paddingTop: "2%",
        color: '#fff'



    },

    paper: {
        margin: "1%",
        padding: "2%"
    },




    dateTitle:
    {
        fontSize: "1.5rem"
    },

    date:
    {
        fontSize: "0.9rem",
        textAlign: "center"
    },

    titleHead:
    {
        fontWeight: 600,
        textAlign: "center"
        //color: '#fff'
        //marginLeft:"2.5%"
    },

    margin:
    {
        marginLeft: "2%"
    }






});




class Order extends Component {


    constructor() {
        super();
        this.user = firebase.auth().currentUser;
        this.firestoreRef = firebase.firestore().collection('orders').orderBy("datePickup").where('userId', '==', this.user.uid)
        //.where('toPay', '==', true)
        this.state = {
            isLoading: true,
            userArr: []
        };
        this.balance = 0;
    }

    componentDidMount() {
        this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    getCollection = (querySnapshot) => {

        const userArr = [];
        querySnapshot.forEach((res) => {
            const { adress, zipcode, amount, price, comment, selection, date, toPay, status } = res.data();
            userArr.push({
                key: res.id,
                adress,
                zipcode,
                amount,
                selection,
                price,
                comment,
                date,
                toPay,
                status

            });
        });
        console.log(userArr)

        this.calculateBalance(userArr)
        this.setState({
            userArr,
            isLoading: false,
        });

    }

    calculateBalance = (userArr) => {
        var balance = 0;
        var balanceSheet
        if ((userArr.length) != 0) {
            for (var i = 0; i < userArr.length; i++) {
                balance = balance + userArr[i]["balance"];
                console.log(balance);
            }
        }

        console.log(balance)
    }


    render() {
        const { classes } = this.props;
        if (this.state.isLoading) {
            return (
                <div className={classes.root}>
                    <LinearProgress />

                </div>
            )
        }

        if (this.state.userArr.length == 0 && this.state.isLoading == false) {
            return (
                <div>
                    <Header />
                    <div className={classes.root}>

                        <Typography style={{ marginTop: "5%", fontSize: "1rem", color:"#fff", textAlign: "center" }}>No orders have been made on this account </Typography>
                    </div>
                </div>
            )
        }
        else {

            return (

                <div>
                    <Header />
                    <div style={{}} className="thirdcenter">
                        <h2 style={{ textAlign: "center"/*, borderBottom: "1px solid #9cecfb", */, fontSize: "1.5rem", /*paddingBottom: "2%",*/ letterSpacing: "2px" }}> My Orders </h2>
                        <div className="thirdcenter" style={{ textAlign: "center", width: "10%", borderBottom: "3px solid #9cecfb" }} />
                    </div>
                    <Typography className={classes.title}> My Orders</Typography>
                    {
                        this.state.userArr.map((item, i) => {
                            if (item.toPay == false || item.toPay == null) {
                                var balance = false
                            }

                            else if (item.toPay == true) {
                                var balance = true
                            }
                            return (

                                <React.Fragment>
                                    <div style={{ marginBottom: "5%", marginLeft: "5%", marginRight: "5%"  }} >
                                        <Card variant= "outlined" elevation={1}>
                                        <CardActionArea>
                                                <CardContent>
                                                    <div style={{background:"#fafafa"}}>
                                                    <div className="thirdcenter" > <span className={classes.titleHead} >Ordered On : </span>
                                         <span style={{ fontSize: "0.90rem" }} >{item.date}</span> </div>
                                                        <div style={{ fontSize: "0.90rem", color: '#3f51b5' /*"rgb(251, 174, 156)"*/, fontWeight: "500", textAlign: "center" }}> Price :  ${item.price}</div>
                                                        </div>

                                    

                                   
                                        <div style={{marginTop:"1%"}}>
                                                        <div style={{ fontSize: "0.90rem", marginBottom:"0.3rem" }}> <span className={clsx(classes.titleHead, classes.margin)} >  Adress  :  </span>  <span> {item.zipcode}, {item.adress} </span> </div>

                                                        <div style={{ fontSize: "0.90rem", marginBottom: "0.3rem" }}> <span className={clsx(classes.titleHead, classes.margin)}>Order Amount : </span> <span> {item.amount} pounds</span> </div>

                                        <div>
                                                            <div style={{ fontSize: "0.90rem", marginBottom: "0.3rem"}}> <span className={clsx(classes.titleHead, classes.margin)}> Detergent : </span> <span> {item.selection} </span> </div>

                                                            <div style={{ fontSize: "0.90rem", marginBottom: "0.3rem" }}> <span className={clsx(classes.titleHead, classes.margin)}> Status : </span> <span> {item.status} </span> </div>
                                                        </div>

                                        <div className="thirdcenter">
                                           
                                        </div>
                                        </div>

                                        </CardContent>
                                                </CardActionArea>
                                        <CardActions>
                                                    {balance &&
                                                        <Button
                                                            onClick={this.onSubmit}
                                                            variant="contained"
                                                            color="primary"
                                                            size="large"
                                                            className={classes.submit}

                                                            onClick={() => this.props.history.push("/pay")}
                                                        >
                                                            Pay Now
                                       </Button>

                                                    }
                                        </CardActions>
                                        </Card>
                                        </div >
                                        
                                    </React.Fragment>


                                





                            );
                        })
                    }

                </div>
            );
        }
    }
}



//export default withStyles(useStyles)(Order);
//export default
export default withRouter(connect()(withStyles(useStyles)(Order)))


