import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import img1 from "../../assets/financialpork.jpg"
import img2 from "../../assets/financialpork1.png"
import Logo from "../../assets/faces3.jpg"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import "./yourstyle.css";
import { useState } from 'react';
import Quote from "../../assets/closingQuote.svg";
import Quote1 from "../../assets/openingQuote.svg";
import Box from '@material-ui/core/Box';


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
        background: '#9cecfb',
        //'rgb(0, 230, 230)',
        color: "#fff"
    }
});

export default function MediaCard() {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)');
    const [open, setOpen] = useState(false)

    function mouseOver() {
        if (open === true) {
            setOpen(false)
        }

        else {
            setOpen(true)
        }
    }

    return (


        < div style={{ marginLeft: "5%", marginRight: "5%" }}  className={classes.background} >

            <div>


                <div className="thirdcenter">


                    <Card
                        onMouseEnter={mouseOver}
                        onMouseLeave={mouseOver}
                        raised={open}

                        className={classes.root}>
                        <CardContent>
                            <span>
                                <Avatar alt="Remy Sharp" src={Logo} className={classes.large} />
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                   Patricia White
                                    </Typography>
                            </span>
                           
                            <Typography variant="body2" component="p">
                                <Box fontStyle="italic">
                                <span >  <img src={Quote} alt="img" width="5%" /> </span> 
                                Excellent service, wonderful vibe, very friendly great hospitality high recommendation from Edlyne Bellanton. I will definitely 
                                use the service again.
                                  <span >  <img src={Quote1} alt="img" width="5%" /> </span> 
                                    </Box>
                                    </Typography>
                        </CardContent>

                    </Card>


                </div>

            </div>


        </div >


    );
}