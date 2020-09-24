import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Mycard from './card.js';
import Mystatus from './status.js'
import Prices from './prices'







const useStyles = makeStyles((theme) => ({


    stepper:
    {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginTop: "2.5%"
    }
    ,

    stepperText:
    {
        fontSize: 35,
        fontFamily: 'Apple Color Emoji'
    },

    root: {
        flexGrow: 1,
        display: "flex",
        margin: "2%",
       // background: 'linear-gradient(to right, #9cecfb, #65c7f7, #0052d4)'


    },





}));




export default function Header() {
    const classes = useStyles();

    return (

        <div>
            <div className={classes.stepper}>
                <Typography className={classes.stepperText}> How It Works </Typography>
            </div>

            <div className={classes.root}>



                <div className={classes.root}>
                    <Grid container
                        spacing={2}

                    >
                        <Grid item xs={12} md={4} lg={4}>

                            <Mycard />

                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Mystatus />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Prices />
                        </Grid>
                    </Grid>

                </div>

            </div>
        </div>

    )

}




