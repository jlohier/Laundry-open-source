import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import logo from "../../assets/logo_size.png"
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { AppBar, Avatar, Divider } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core'
import firebase from '../../Firebase/firebase';
import { withStyles } from '@material-ui/core/styles';
import { Component } from 'react';
import { connect } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
} from "react-router-dom";
import './mystyle.css'
import MediaQuery from 'react-responsive'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Logo from "../../assets/secondconv.svg"
//import "./yourstyle.css"
import { Container } from '@material-ui/core';



function HeaderStatus() {
    const classes = useStyles();
    let history = useHistory()
    
    if (firebase.auth().currentUser != null) {
        return (
            <span className={classes.navbarel}

                color="primary"
                onClick={() => {
                    firebase.auth()
                        .signOut()
                        .then(() => console.log(firebase.auth.currentUser))
                        .then(() => history.push("/login"))
                        .then(() => history.push("/"))

                }}

            > Sign Out</span>

        )

    }

    else {

        return (
            <span className={classes.navbarel}

                color="primary"
                onClick={() => {
                    history.push("/login")


                }}

            > Sign In</span>

        )

    }


}


function HeaderStatus_() {
    const classes = useStyles();
    let history = useHistory()

    if (firebase.auth().currentUser != null) {
        return (
            <span className="navbarel"

                color="primary"
                onClick={() => {
                    firebase.auth()
                        .signOut()
                        .then(() => console.log(firebase.auth.currentUser))
                        .then(() => history.push("/login"))
                        .then(() => history.push("/"))

                }}

            > Sign Out</span>

        )

    }

    else {

        return (
            <span className="navbarel"

                color="primary"
                onClick={() => {
                    history.push("/login")


                }}

            > Sign In</span>

        )

    }


}




const useStyles = makeStyles((theme) => ({
    image:
    {
        width: '30%',
    },



    Button:
    {

        justifyContent: "center",
        alignItems: "center",

    },

    appBar:
    {
        //backgroundColor:"#fff"
            //"#018DDC",
        background:"inherit"



    },

    button1:
    {
        '&:hover': {
            background: "#ebdae3",
        }
        ,
    },


    button2:
    {
        '&:hover': {
            background: "#ebdae3",
        }
        ,
    },

    button3:
    {
        '&:hover': {
            background: "#ebdae3",
        }
        ,
    },

    button4:
    {
        '&:hover': {
            background: "#ebdae3",
        }
        ,
    },

    Menu:
    {
        padding: "2%",
        //width:"30%"
        fontSize: "2.0rem",
        color:'#3f51b5'
    },

    swipe:
    {
        color: "blue"
    },

    drawerPaper: {
        width: 240,
        //background: '#018DDC',
        color: "#018DDC",
        paddingTop:"20px"
       

    }, navbarel:
    {
        marginLeft: theme.spacing(6),
        marginRight: theme.spacing(6),
        fontSize: "1.07rem",
        fontWeight:"600",

        '&:hover': {
            border: "2px solid #3f51b5",
            borderRadius:"5px"
        },
        color: "#3f51b5"
            
   
        
    }
    
}));






export default function Access() {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');
    const [open, setOpen] = useState(false)
    let history = useHistory()

    const toggleDrawer = () => {

        if (open=== true)
            setOpen(false)
        else
            setOpen(true)

    console.log(open)
    }

    return (
          
            <div className={classes.root}>
                <AppBar className={classes.appBar} position="flexible">

                    {matches&&
                        

                   

                <Toolbar variant="dense">
                    
                        
                        <Container>
                        <div className="navbar">
                        
                        
                        <span onClick={() => history.push("/")}
                            className={classes.navbarel}>
                            Home                           
                        </span>

                        <span  onClick={() => history.push("/orders")}
                            className={classes.navbarel}>
                                     My Orders

                                </span >

                        <span  className={classes.navbarel}>
                            Contact

                                </span >
                             

                        <HeaderStatus    />
                              
                            </div>
                        </Container>

                        </Toolbar>
                    }

                {!matches &&

                    <MenuIcon className={classes.Menu}
                    onClick={toggleDrawer}
                />


                }
            </AppBar>
            {!matches &&
                <div>
                    <SwipeableDrawer
                    anchor={"left"}
                    open={open}
                    onClose={toggleDrawer}
                    onOpen={toggleDrawer}
                    className="swipe"
                    classes={{
                        paper: classes.drawerPaper,
                    }}

                >
                        
                    

                    <div className="navbar">

                        
                       
                        <div className="navbarel"
                           // onclick={history.push("/")}
                            onClick={() =>history.push("/")}
                        >
                            Home
                         
                        </div>

                        <hr />

                        <div className="navbarel"
                        onClick={() => history.push("/orders")}
                        >
                            My orders
                        </div>

                        <hr />

                        <div className="navbarel">
                            Contact
                        </div>

                        <hr />

                        <HeaderStatus_ />
                        <hr />

                    </div>
                       
                    
                    </SwipeableDrawer>
                </div>
            }

            </div>
        
        
    );
}





