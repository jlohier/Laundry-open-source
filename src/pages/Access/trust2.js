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

import Gucci from "../../assets/gucci.jpg"
import "./yourstyle.css"
import Prada from "../../assets/prada.png"
import Versace from "../../assets/versace.jpg"
import LouisVuitton from "../../assets/louis-vuitton.jpg"
import Dior from "../../assets/dior.png"
import Brands from "../../assets/brands.png"
import clothes from "../../assets/newimage2-remove.png"
import {  Paper} from '@material-ui/core'



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
        paddingTop: '3%',
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


        < div  >

            <div style={{ marginBottom: "5%" }} className="thirdcenter">
                <h2 style={{ textAlign: "center"/*, borderBottom: "1px solid #9cecfb", */, fontSize: "1.5rem", /*paddingBottom: "2%",*/ letterSpacing: "2px" }}> WE HANDLE ALL BRANDS </h2>
                <div className="thirdcenter" style={{ textAlign: "center", width: "10%", borderBottom: /*"3px solid #9cecfb"*/  '3px solid #63faff' }} />
            </div>

            <div className="divcenter" style={{ width: "100%", marginTop: "5%" }} >
            <Paper elevatio={0} >
                <Grid container
                    spacing={3}>
                    <Grid item xs={12} md={6} lg={6}>
                        <img src={Brands} width="100%" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <img src={clothes} width="50%" />
                    </Grid>
                </Grid>
                </Paper>
                </div>
             
        </div >
        


    


    );
}