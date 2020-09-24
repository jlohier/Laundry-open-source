import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import { AppBar, Avatar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import myimage from "../../assets/newimage1.jpg"
import myimage1 from "../../assets/background2.png"
import yourimage from "../../assets/veryown.png"
import "./yourstyle.css"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import Header2 from './header2'
import { Container } from '@material-ui/core';







const useStyles = makeStyles((theme) => ({
    background: {
        // marginTop: 140,
        // backgroundImage: "url(" + "https://image.freepik.com/free-vector/realistic-blue-wavy-water-with-air-bubbles_88272-1050.jpg" + ")",
        background: '#9cecfb',
        backgroundImage: `url(${myimage})`,
        
        opacity: 1,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        justifyContent: "center",
        alignItems: "center",
        padding: '7%',
        textDecoration: "bold",
        position:"relative"
    },

    background1: {
        // marginTop: 140,
        // backgroundImage: "url(" + "https://image.freepik.com/free-vector/realistic-blue-wavy-water-with-air-bubbles_88272-1050.jpg" + ")",
        background: '#9cecfb',
       // backgroundImage: `url(${myimage})`,

        opacity: 1,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        justifyContent: "center",
        alignItems: "center",
        padding: '7%',
        textDecoration: "bold"
    },



    pickup: {
        marginTop: '3%',
        display: 'flex',
        paddingLeft: "3%",
        paddingRight:"3%"

    },



    mytext:
    {   //color:"white",
        color: "#0052d4",
        // textAlign: 'center',
        fontFamily:"Verdana",
            //"Helvetica Neue",
        fontWeight: "500",
        fontSize: "30px",
        //padding:"2%"

    },

    margin:
    {
        margin: "5px",
        zIndex: '2',
        position: 'relative'
    }
    ,

    margin1: {
        marginTop: "60%",
        marginLeft: "2%"

        //zIndex: '2',
        // position: 'relative
    },

    buttoncolor:
    {
        background: '#018DDC'
    }




}));




export default function Header() {
    const classes = useStyles();
    let history = useHistory()
    const matches = useMediaQuery('(max-width:1024px)');

    return (

        <div >
            {matches &&
                <div style={{ paddingTop: "50%" }} className="yourbackground">
                   
               
                 
                <Typography style={{ fontSize: "1.5rem", textAlign: "center", marginBottom: "15%"}}  className={classes.mytext}> We care for your Convenience! </Typography>

                    <div style={{marginTop:"2%", marginBottom:"15%"}} className="pickup">
                            <Button
                                className={classes.margin}
                                variant="contained"
                                color="primary"
                                onClick={() => history.push("/makeorder")}
                            >
                                Order a Pick up
                                
            </Button>


                            <Button
                                className={classes.margin}
                                variant="outlined"
                                color="primary"
                                onClick={() => history.push("/pay")}

                            >
                                Pay My Orders
                                
            </Button>
                        </div>

                
                    <svg className="wavy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#FFF" fill-opacity="1" d="M0,96L48,128C96,160,192,224,288,245.3C384,267,480,245,576,213.3C672,181,768,139,864,106.7C960,75,1056,53,1152,74.7C1248,96,1344,160,1392,192L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    </path>
                    </svg>
                    </div>
              

               
             


            }

            

            {!matches &&
                <div className="mybackground">

                <Container>
                 
                <div style={{padding:"3%"}}>
                    <Typography  component="h1" variant="h6" className={classes.mytext} > We will pick up your clothes </Typography>
                        <Typography component="h1" variant="h6" className={classes.mytext} >  Wash & deliver
                    them at your convinience.</Typography>
                        <Typography component="h1" variant="h6" className={classes.mytext}> - Let us care for you! </Typography>
                    </div>
                        <div className={classes.pickup}>
                            <Button
                                className={classes.margin}
                                variant="contained"
                                color="primary"
                                onClick={() => history.push("/makeorder")}
                            >
                                Order a Pick up
                                
            </Button>


                            <Button
                                className={classes.margin}
                                variant="outlined"
                                color="primary"
                                onClick={() => history.push("/pay")}

                            >
                                Pay My Orders
                                
            </Button>
                        </div>
                </Container>
                <svg className="wavy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#FFF" fill-opacity="1" d="M0,96L48,128C96,160,192,224,288,245.3C384,267,480,245,576,213.3C672,181,768,139,864,106.7C960,75,1056,53,1152,74.7C1248,96,1344,160,1392,192L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    </path>
                </svg>

                
                </div>
                
              
            }
         
        </div>
           


    )

}




