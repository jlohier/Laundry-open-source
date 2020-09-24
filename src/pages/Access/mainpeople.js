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
import People1 from "./thepeople1"
import People2 from "./thepeople2"
import People3 from "./thepeople3"


const useStyles = makeStyles({
    background: {
        // marginTop: 140,
        // backgroundImage: "url(" + "https://image.freepik.com/free-vector/realistic-blue-wavy-water-with-air-bubbles_88272-1050.jpg" + ")",
        background: '#fff',
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
    }
});

export default function MediaCard() {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)');
    let history = useHistory();


    return (


        < div className={classes.background} >

            <div>
                <div style={{ marginBottom: "5%" }} className="thirdcenter">
                    <h2 style={{ textAlign: "center"/*, borderBottom: "1px solid #9cecfb", */, fontSize: "1.5rem", /*paddingBottom: "2%",*/ letterSpacing: "2px" }}> THE TEAM </h2>
                    <div className="thirdcenter" style={{ textAlign: "center", width: "10%", borderBottom: "3px solid #9cecfb" }} />
                </div>

                <Grid container
                    spacing={1}
                    direction="row"
                    alignItems="center"
                    justify="center"
                >

                    <Grid item xs={6} md={4} lg={4}>
                        <People1/>
                    </Grid>

                    <Grid item xs={6} md={4} lg={4}>
                        <People2 />
                    </Grid>

                    <Grid item xs={6} md={4} lg={4}>
                        <People3 />
                    </Grid>




                </Grid>
            </div>


        </div >


    );
}