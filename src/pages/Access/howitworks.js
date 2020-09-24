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
import "./yourstyle.css"
import img2 from "../../assets/deliveryTruck1.jpg"
import Card from "./card4"
import Prices from "./prices4"
import Status from "./status4"


const useStyles = makeStyles({
    background: {
        // marginTop: 140,
        // backgroundImage: "url(" + "https://image.freepik.com/free-vector/realistic-blue-wavy-water-with-air-bubbles_88272-1050.jpg" + ")",
        background: '#fff',
       // background: '#4f75ff14',

        opacity: 1,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        justifyContent: "center",
        alignItems: "center",
        paddingTop: '1%',
        textDecoration: "bold"
    },


    text:
    {
        //fontSize: "20px",
        //textAlign: "center",
        textAlign: "justify"
    }
});

export default function MediaCard() {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)');
    let history = useHistory();


    return (


        < div className={classes.background} >
           
            <div>
                <div style={{ }} className="thirdcenter">
                    <h2 style={{ textAlign: "center"/*, borderBottom: "1px solid #9cecfb", */, fontSize: "1.5rem", /*paddingBottom: "2%",*/ letterSpacing: "2px" }}> SERVICES</h2>
                    <div className="thirdcenter" style={{ textAlign: "center", width: "10%", borderBottom:/* "3px solid #9cecfb"*/ "3px solid  #63faff "}} />
                </div>

                    <Grid container
                        spacing={2}>

                    <Grid style={{ marginTop: "5%" }} item xs={12} sm={4} md={4} lg={4}>
                    <Status/>
                     </Grid>
                        
                    <Grid style={{ marginTop: "5%" }} item xs={12} sm={4} md={4} lg={4}>
                     <Card />
                    </Grid>

                    <Grid style={{ marginTop: "5%" }} item xs={12} sm={4} md={4} lg={4}>
                    <Prices/>
                    </Grid>




                    </Grid>
                </div>
            

        </div >


    );
}