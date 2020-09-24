import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import img1 from "../../assets/deliveryTruck.jpg"
import palette from "../../assets/creativity.svg"
import "./yourstyle.css"
import img2 from "../../assets/deliveryTruck1.jpg"
import review from "../../assets/review.svg"
import Testimonial1 from "./testimonial1"
import Testimonial2 from "./testimonial2"
import Testimonial3 from "./testimonial3"
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles({
    background: {
        // marginTop: 140,
        // backgroundImage: url('../../assets/newimage8.jpg'),
        //background: '#fff',
        opacity: 1,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        justifyContent: "center",
        alignItems: "center",
        padding: '3%',
        textDecoration: "bold"
    },


    text:
    {
        //fontSize: "20px",
        //textAlign: "center",
        textAlign: "justify"
    },

    roots:
    {
        color: ' #63faff'
            //"#9cecfb",
       
    },

    margin:
{
    marginTop: "2%",
    marginBottom:"2%"
    }
});

export default function MediaCard() {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)');
    let history = useHistory();


    return (

        

           
        < div style={{ paddingBottom: "2%" }} className={classes.background}>
            

                <div style={{ marginBottom: "3%" }} className="thirdcenter">
                    <h2 style={{ textAlign: "center"/*, borderBottom: "1px solid #9cecfb", */, fontSize: "1.5rem", /*paddingBottom: "2%",*/ letterSpacing: "2px" }}> RATINGS</h2>
                <div className="thirdcenter" style={{ textAlign: "center", width: "10%", borderBottom: /*"3px solid #9cecfb"*/  ' 3px solid #63faff' }} />
            </div>

            <div className="divcenter" style={{ marginTop: "5%" }} >
                <h2 style={{ textAlign: "center"/*, borderBottom: "1px solid #9cecfb", */, fontSize: "1.0rem", /*paddingBottom: "2%",*/ letterSpacing: "2px" }}> How Would You rate Our Services?</h2>
           
                
                <img src={review} alt="yes" width={matches? "50%" : "30%"} />
                   <div> <Rating classes={{ root: classes.roots }} name="size-large" defaultValue={1} size="large" /> </div>

                 
                    <div> <a href="#">Take The Survey </a> </div>

                    <Button

                    variant="outlined"
                    color="primary"
                    size="large"
                    className={classes.margin} >
                        Submit
                   </Button>    
               
                   
                    
               
                </div>
            </ div>
           


    );
}