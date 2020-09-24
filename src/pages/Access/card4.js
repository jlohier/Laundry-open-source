import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import img1 from "../../assets/financialpork.jpg"
import img2 from "../../assets/financialpork1.png"
import Logo from "../../assets/svg/049-delivery truck.svg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import "./yourstyle.css"


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
        paddingBottom: '3%',
        textDecoration: "bold"
    },

    text:
    {
        //fontSize: "20px",
        //textAlign: "center",
        textAlign: "justify"
    },

    float: {
        float: 'right'
    },
    pickup:
    {
        //background: "#44d5fe",
        borderRadius: "15px"

    }
});

export default function MediaCard() {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)');
    let history = useHistory();


    return (


        < div className={classes.background} >
            {
            }

            {
                <div>
                    <div className="thirdcenter" >
                        <img src={Logo} alt="img" width="20%" />
                    </div>

                    <h2 style={{ textAlign: 'center', fontSize: "1.2rem" }}>PICKUP- DROP OFF </h2>

                    <div /*style={matches ? { textAlign: "center", width: "70%" } : { textAlign: "center", width: "30%"}}*/ className="thirdcenter">



                        <Typography style={{ fontSize: "1.0rem", textAlign: "center", lineHeight: "24px", marginRight: "10%", marginLeft: "10%", color:"#a8aeb4" }} className={classes.text} variant="body2" color="textPrimary" component="p">
                            After scheduling a pickup, two respectful agents will come to your place to gather your clothes.
                            It is required that an adult be present during the pick up.
          </Typography>




                        <Button style={{ marginTop: "20px" }}
                            variant="outlined"
                            color="primary"
                            onClick={() => history.push("/makeorder")}
                            className={classes.pickup}
                        >
                            Schedule a Pickup
                            
                        </Button>
                        



                    </div>





                </div>
            }
        </div >


    );
}