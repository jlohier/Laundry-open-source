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
import PaymentForm from './PaymentForm'
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import { toast } from "react-toastify";
import Dialog from '@material-ui/core/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';



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
        paddingTop: "2%"

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
        fontWeight: 500
    },
    p:
    {
        color:'red'
    }

});




/*async function handleToken(token, addresses) {

   var  product = {
        name: "Tesla Roadster",
        price: 150,
        description: "Cool car"
    }
    const response = await axios.post(
        "https://xj9bd.sse.codesandbox.io/checkout",
        { token, product}
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    console.log(token)
    if (status === "success") {
        toast("Success! Check email for details", { type: "success" });
        console.log("success")
    } else {
        toast("Something went wrong", { type: "error" });
        console.log("failure")
    }
}
*/






class Order extends Component {


    constructor() {
        super();
        this.user = firebase.auth().currentUser;
        this.firestoreRef = firebase.firestore().collection('orders').where('userId', '==', this.user.uid).where('toPay', '==',true)
        this.state = {
            isLoading: true,
            userArr: [],
            //this.balance = 0;
            open :false,
            error :""
        };
        this.balance = 0;
      /*  this.open =false;
        this.error=""*/
     
    }

    componentDidMount() {
        this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);

    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    getCollection = (querySnapshot) => {
        //A=[]
        const userArr = [];
        querySnapshot.forEach((res) => {
            const { amount, price, date, } = res.data();
            userArr.push({
                key: res.id,
                
                amount,
                
                price,
                
                date,
               

            });
        });
        console.log(userArr)
        
        var balance= this.calculateBalance(userArr)
        this.setState({
            userArr,
            isLoading: false,
            balance: balance,
            open: false,
            error:""
            
        });

    }

    calculateBalance = (userArr) => {
        var balance = 0;
        var balanceSheet
        if ((userArr.length) != 0) {
            for (var i = 0; i < userArr.length; i++) {
                balance = balance + userArr[i]["price"];
                console.log(balance);
            }
        }

        return (balance)
    }

    onToken = (token) => {
        console.log("div")
        
    }

    handleToken = async (token, addresses) => {
    this.setState({ open: true })
    var product = {
        name: "Laundry ",
        price: this.state.balance,
        description: "Pay For Laundry"
    }
    const response = await axios.post(
        "https://hgjb0.sse.codesandbox.io/checkout",
        
        { token, product }
         );
    
    const { status } = response.data;
    console.log("Response:", response.data);
    console.log(token)
    if (status === "success") {
        for (var i = 0; i < this.state.userArr.length; i++) {
            //balance = balance + userArr[i]["price"];
            //console.log(balance);
           firebase.firestore().collection('orders').doc(this.state.userArr[i]["key"]).update({ toPay: false, paid:true, status:"completed" })
            //console.log()
        }
        this.setState({open:false})
        console.log("success")

    } else {
        //toast("Something went wrong", { type: "error" });
        console.log("failure")
        this.setState({error:"Your Payment has not been processed, Please Try Again"})
    }
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
                    <Typography component="p" className={classes.p}>
                        {this.error}
                    </Typography>

                <div className={classes.root}>
                        <Typography style={{fontSize:"1rem", textAlign:"center",marginTop:"5%" }}>You do not have a balance on this account</Typography>
                    </div>
                </div>
            )
        }
        else {

            return (

                <div>
                    <Dialog fullScreen open={this.state.open} >
                        
                        <CircularProgress style={{marginTop:"20%"}} className="thirdcenter" size="15%" thickness="1.5"/>
                        <Typography style={{ marginTop: "10%" }} className={classes.title}> Payment is currently being processed</Typography>
                        
                    </Dialog>
                    <Header />
                    <div style={{}} className="thirdcenter">
                        <h2 style={{ textAlign: "center"/*, borderBottom: "1px solid #9cecfb", */, fontSize: "1.5rem", /*paddingBottom: "2%",*/ letterSpacing: "2px" }}> Pay Order</h2>
                        <div className="thirdcenter" style={{ textAlign: "center", width: "10%", borderBottom: "3px solid #9cecfb" }} />
                    </div>
                    {
                        this.state.userArr.map((item, i) => {
                          
                            return (

                                <div className="contain">
                                    <div className="dateContainer">
                                        <div style={{ fontSize: "0.90rem" }} > <span className={classes.titleHead} >Ordered On : </span>
                                            <span >{item.date}</span> </div>
                                        
                                        <div> <span className={classes.titleHead}>Order Amount : </span> <span> {item.amount} pounds</span> </div>
                                        <div style={{ color: '#3f51b5' /*"rgb(251, 174, 156)"*/, fontWeight: "500"
                                            }}> Balance : $ {item.price}</div>
                                    </div>

                                </div>





                            );
                        })
                    }
                    <div className="thirdcenter" style={{
                        color: '#3f51b5' /*"rgb(251, 174, 156)"*/, fontWeight: "800", fontSize:"2.0rem",
                        textAlign: "center", marginTop: "2%"
                    }}>Total : $ {this.state.balance}</div>
                    {/* <Typography style={{marginTop:"5%", textAlign:"center"}} className={classes.titleHead}> Securely Pay With Card</Typography>*/}

                    <div className="thirdcenter" style={{marginTop:"5%"}}>
                    <StripeCheckout
                            stripeKey="pk_test_qPWwxnLIQoPG7PYwih0BiGha00Fh0tHtOk"
                            token={this.handleToken}
                            amount={this.state.balance*100}
                            currency="USD"
                            name="Laundry Item"
                            billingAddress
                            shippingAddress
                        />
                    </div>

                    

                </div>
            );
        }
    }
}



export default withStyles(useStyles)(Order);




