import React from "react"
import { withStyles } from '@material-ui/core/styles';
import { Component } from 'react';
import { connect } from "react-redux";
import Header2 from './header2'
import AboutUS2 from './aboutUS5'
import Prices2 from './prices4'
import Card2 from "./card4"
import Status2 from "./status4"
import Footer from "./footer"
import HowItWorks from "./howitworks"
import Testimonial from "./mainTestimonial"
import Trust from "./trust2"
import People from "./mainpeople"
import Ratings from "./ratings"
import { AppBar, Toolbar } from "@material-ui/core";
import Logo from "../../assets/logo_size.png";
import { Container } from '@material-ui/core';



const useStyles = theme => ({
  
    background: {
        marginTop:140,
        backgroundImage: "url(" + "https://image.freepik.com/free-vector/realistic-blue-wavy-water-with-air-bubbles_88272-1050.jpg" + ")",
        background: 'rgba(0, 0, 0, 0.8)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        justifyContent: "center",
        alignItems: "center",
        padding: '7%',
        textDecoration:"bold"
    },

 
  
    pickup:{
        marginTop:'4%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
       // background:"red"
},

interior:
   {
    flexDirection: 'column',
    marginTop: theme.spacing(2),
   
    },

    mytext:
    {    
        color:"#0052d4",
        textAlign: 'center',
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize:"170%"
        
    }, 

    stepper:
    {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginTop:"2.5%"
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
        background: 'linear-gradient(to right, #9cecfb, #65c7f7, #0052d4)'
      
        
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    roots:
    {
        background:"white"
    }

 


   
});




class Access extends Component {

    constructor() {
        super();

        this.state = {
            adress: '',
            lname: '',
            fname: '',
            username: '',
            email: '',
            password: '',
            error: ''
        }
    }

   


 
    render() {


        const { classes } = this.props;
        const { email, password, error, fname, lname } = this.state;

        
            return (

               
                <div>

                    {/*<AppBar className={classes.roots} position="flexible">
                        <Toolbar variant="dense">
                            <div className="thirdcenter">
                                <img src={Logo} alt="medium" width="20%" />
                            </div>
                        </Toolbar>
                    </AppBar>
                    */}
                    
                    <Header2  />
                    
                        <AboutUS2 />
                  
                    <Container>
                    {/*<Prices2 />

                        <Status2 />

                        <Card2 />
                        */}
                    <HowItWorks />

                    <Testimonial />

                    {/*<People />
                     */}
                   

                    <Trust />

                    <Ratings/>

                    
                    </Container>
                    <Footer />
                  
                   

                </div>
                    
            )

              

        
       

    }

}


//export default withStyles(useStyles)(Access);
const mapStateToProps = state => {
    return {
        a: state.a
    };
};

const mapDispatchToProps = dispatch => {
    return {
        UPDATE_1: () => dispatch({ type: "UPDATE_1", value: 1 }),
        UPDATE_2: () => dispatch({ type: "UPDATE_1", value: 2 }),
        UPDATE_3: () => dispatch({ type: "UPDATE_1", value: 3 }),
        NO_UPDATE: () => dispatch({ type: "UPDATE_1", value: 0 }),
    };
};

//export default withStyles(useStyles)(Access);
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Access));
