import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import { AppBar, Avatar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';







const useStyles = makeStyles((theme) => ({
    background: {
        // marginTop: 140,
        // backgroundImage: "url(" + "https://image.freepik.com/free-vector/realistic-blue-wavy-water-with-air-bubbles_88272-1050.jpg" + ")",
        background:  ' #63faff',
        
        //#9cecfb'
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
        margin: '4%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',

    },



    mytext:
    {
        color: "#0052d4",
        textAlign: 'center',
        fontFamily: "Helvetica Neue",
        fontWeight: "500",
        fontSize: "30px"

    },

    margin:
    {
        margin: "5px"
    }
    ,

    title:

    {
        fontWeight:"500"
    },

    marginIcon:
    {
        margin:"10px"
    },
    root:
    {
        color:"#3f51b5"
    }






}));




export default function Header() {
    const classes = useStyles();
    let history = useHistory()

    return (



        <div className={classes.background}>
            <div className={classes.content}>

                <Grid container
                    spacing={2}

                >
                    <Grid item xs={12} md={4} lg={4}>

                        <div className={classes.title}>Pure Bubbles </div>
                        <div>Get Help </div>
                        <div>Blog</div>


                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <div className={classes.title}>Products </div>
                        <div>Prices</div>
                        <div>Terms and conditions </div>
                       
                        
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <div className={classes.title}>Contact US</div>
                        <div>Call +1 (929) 200 0158 </div>
                        <div>Email: purebubblecorp@gmail.com</div>
                        {/*<textarea placeholder="type your message">
                        </textarea>
                       
                            <div>
                                <input placeholder="Enter your name" type="text" name="name" />

                        </div>
                       
                        }
                        <div>
                        <Button
                            size="small"
                            className={classes.margin}
                            variant="outlined"
                            color="primary"
                            onClick={() => history.push("/")}

                        >
                                Send
                                 
                          </Button>
                        </div>
                         */}


                        <div>
                            <a style={{ textDecoration: "none" }} href='#'>  < YouTubeIcon classes={{root:classes.root}} className={classes.marginIcon}/> </ a>
                            <a style={{ textDecoration: "none" }} href='https://www.instagram.com/purebubblecorp/'> < InstagramIcon classes={{ root: classes.root }}  className={classes.marginIcon} /> </a>
                            <a style={{ textDecoration: "none" }} href='https://twitter.com/CorpBubble'> <TwitterIcon classes={{ root: classes.root }} className={ classes.marginIcon}/> </a>
                            <a style={{ textDecoration: "none" }}
                                href='https://www.facebook.com/pages/category/Business-Service/Pure-bubble-113390813642325/'> < FacebookIcon classes={{ root: classes.root }} className={classes.marginIcon} /> </a>
                        </div>
                    </Grid>
                </Grid>

            </div>
        </div>


    )

}

