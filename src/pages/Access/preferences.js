
import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button"
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography"
import Header from './header2'
import { withStyles } from '@material-ui/core/styles';
import { Component } from 'react';
import { connect } from "react-redux";
import firebase from '../../Firebase/firebase';
import "./yourstyle.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import { withRouter } from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import Logo from "../../assets/deterge.svg"
import Logo1 from "../../assets/soften.svg"
import Logo2 from "../../assets/clorox.svg"



const useStyles = theme => ({
    paper: {
        position: 'absolute',
        width: 300,
        backgroundColor: "#4caf50",
        border: '1px solid green',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        //textAlign:"center"
        
    },

    background:
    {
        //width: "50%",
        //background: "black",

    },

    pickup: {
        marginTop: '1%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        // background:"red"
    },



    mytext:
    {
        color: "#0052d4",
        textAlign: 'center',
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: "170%"

    },



    root: {
        //flexGrow: 1,
        // display: "flex",
        paddingLeft: "40px",
        paddingRight: "40px",
        background: 'linear-gradient(to right, #9cecfb, #65c7f7, #0052d4)'


    },

    root_1:
    {
        paddingLeft: "40px",
        paddingRight: "40px",
        background: '#9cecfb'
    },

    root_2:
    {
        //paddingLeft: "40px",
        //paddingRight: "40px",
        background: '#018DDC',
        borderRadius: "50px"
    },


    title:
    {
        textAlign: 'center',
        fontSize: "20px",
        paddingTop: "2%"
    },

    alignLeft:
    {
        textAlign: "center",
        //marginLeft: "2%",
        marginTop: "2%",
        color: "rgba(147, 140, 51, 1)",
        fontSize: "20px"
    },
    margin: {
        marginTop: theme.spacing(4),

    },

    textField: {
        width: '25ch',
        color: "rgba(147, 140, 51, 1)"
    }
    ,




    image:
    {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    }
    ,
    modal:
    {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    }
    ,
    submit:
    {
        background: "#9cecfb",
        borderRadius:"40px"
    }
});

class Access extends Component {

    constructor() {
        super();
        this.dbRef = firebase.firestore().collection('orders');
        this.state = {
            adress: '',
            selection: '',
            date: '',
            zipcode: '',
            amount: '',
            comment: '',
            error: '',
            price: "",
            color: ['#018DDC', '#018DDC', '#018DDC', '#018DDC'],
            color_1: ['#018DDC', '#018DDC', '#018DDC', '#018DDC' ],
            color_2: ['#018DDC', '#018DDC', '#018DDC', '#018DDC'],
            detergent: '',
            softener:'',
            clorox: '',
            datePickup: "",
            display: true,
            open: false
        }
    }

    bulkPrint = () => {
        console.log(this.props.adress);
        console.log(this.props.zipcode);
        console.log(this.props.date)
        console.log(this.props.amount);
       

    }

 


    addOrderToDatabase = () => {
        var d = new Date();
        var a = d.toLocaleDateString();
        var b = d.toLocaleTimeString();
        var n= a+ "  "+  b

        console.log(typeof (n))
        this.dbRef.add({
            telephone:this.props.amount,
            zipcode:this.props.zipcode,
            detergent: this.state.detergent,
            softener: this.state.softener,
            clorox:this.state.clorox,
            adress: this.props.adress,     
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            date: n,
            datePickup:this.props.date,
            userId: firebase.auth().currentUser.uid,
            toPay:false,
            price: 0,
            status:"pending"
            
            
        })
       // this.handleClose
            .then(() => this.handleClose())
        

            .catch((err) => {
                console.error("Error found: ", err);
            });


    }


    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.value)

    };

    makeComment = () => {
        if (this.state.display === true)
            this.setState({ display: false })
        else
            this.setState({ display: true })
    }

    changeColor = (evt) => {
        var its;
        var A = []
        var selection = (evt.target).innerHTML;
        console.log((evt.target).innerHTML)
        

        for (var i = 0; i < 4; i++) {
            var j = "id" + i;
            var k = "ida" + i;
            var l = "idb" + i;
            //console.log(j)
            if (evt.target.id == j) {
                A.push('#3f51b5')
                its = 1;
            }
                
            else if (evt.target.id == k)
            {
                A.push('#3f51b5')
                its = 2;

            }
            else if (evt.target.id == l) {
                A.push('#3f51b5')
                its = 3;

            }

            else
                A.push('#018DDC')
        }
      
        if (its == 1) {
            this.setState({ color: A })
            this.setState({detergent:selection})
        }

        else if (its == 2) {
            this.setState({ color_1: A })
            this.setState({ softener : selection })
        }

        else if (its == 3) {
            this.setState({ color_2: A })
            this.setState({ clorox: selection })
        }
   
        
    }

    handleClose = () => {
        if (this.state.open == true) {
            this.setState({ open: false });
            this.props.history.push("/")
        }
          
        else {
            this.setState({ open: true })
        }

    }


    render() {

        if (this.props.amount == "" || this.props.zipcode == "" || this.props.adress == "") {
            this.props.history.push("/makeorder")
        }

        const { classes } = this.props;


        return (
            <div>
                <Header />
                
                        <div className="global">

                    <div style={{ marginBottom: "5%" }} className="thirdcenter">
                        <h2 style={{ textAlign: "center"/*, borderBottom: "1px solid #9cecfb", */, fontSize: "1.5rem", /*paddingBottom: "2%",*/ letterSpacing: "2px" }}> Preferences </h2>
                        <div className="thirdcenter" style={{ textAlign: "center", width: "10%", borderBottom: "3px solid #9cecfb" }} />
                    </div>

                    
                    <Modal
                        className={classes.modal}
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="Thanks for scheduling your pick up"
                        //aria-describedby="One of our representative will call you to confirm the order. Charges are issued after pickup."
                    >
                        
                        <div style={{marginTop:'0', marginBottom:'0', marginLeft:"auto", marginRight:"auto"}} className={(classes.paper)}>
                            <h2 style={{color:"white"}} id="simple-modal-title">Thanks for scheduling your pick up</h2>
                            <p style={{color:"white"}} id="simple-modal-description">
                                One of our representative will call you to confirm the order. Charges are issued after pickup.
                           </p>

                            <Button
                                onClick={this.handleClose}
                                variant="contained"
                                color="primary"
                                size="large"
                                className={classes.submit}
                            >
                                OK
                                 </Button>
                            </div>
                           
                        </Modal>
                       

                            <Grid container className="global"
                                spacing={2}>
                                <Grid item xs={12} md={4} lg={4}>
                            <div className="secondcenter">
                                <img style={{background:"white", padding:"5%", borderRadius:"50%"}} src={Logo} width="20%" />
                            <div style={{ color:"#fff", fontSize:"1.3rem"}}> Detergent </div>
             <div id="id0" onClick={this.changeColor} style={{ backgroundColor: this.state.color[0], color:"#fff" }}  className="underline">Tide </div>
             <div   id="id1" onClick={this.changeColor} style={{ backgroundColor: this.state.color[1], color:"#fff" }}  className="underline">All free & clear </div>
             <div  id="id2" onClick={this.changeColor} style={{ backgroundColor: this.state.color[2], color:"#fff" }} className="underline">Cheer </div>
             <div  id="id3" onClick={this.changeColor} style={{ backgroundColor: this.state.color[3], color:"#fff" }}  className="underline">7th generation</div>
                                   </div>
                                </Grid >


                                <Grid item xs={12} md={4} lg={4}>
                            <div className="secondcenter">
                                <img src={Logo1} style={{ background: "white", padding: "5%", borderRadius: "50%" }}  width="20%" />
                                <div style={{ color: "#fff", fontSize: "1.3rem" }}> Fabric Softener </div>
          <div  id="ida0" onClick={this.changeColor} style={{ backgroundColor: this.state.color_1[0], color:"#fff" }}  className="underline">No softener</div>
           <div id="ida1" onClick={this.changeColor} style={{ backgroundColor: this.state.color_1[1], color:"#fff"}}  className="underline"> Downy</div>
           <div id="ida2" onClick={this.changeColor} style={{ backgroundColor: this.state.color_1[2], color:"#fff" }} className="underline">Vinegar </div>
           <div id="ida3" onClick={this.changeColor} style={{ backgroundColor: this.state.color_1[3], color:"#fff"  }} className="underline">7th generation</div>
           </div>
                                </Grid>

           <Grid item xs={12} md={4} lg={4}>
           <div className="secondcenter">
           <img src={Logo2} style={{ background: "white", padding: "5%", borderRadius: "50%" }}  width="20%" />
                                <div style={{ color: "#fff", fontSize: "1.3rem" }}> Bleach for Whites </div>
           <div  id="idb0" onClick={this.changeColor} style={{ backgroundColor: this.state.color_2[0], color:"#fff" }}  className="underline">
            No bleach</div>
          <div   id="idb1" onClick={this.changeColor} style={{ backgroundColor: this.state.color_2[1], color:"#fff" }} className="underline"> Clorox</div>
         <div  id="idb2" onClick={this.changeColor} style={{ backgroundColor: this.state.color_2[2], color:"#fff" }}className="underline">Oxiclean</div>
           </div>
           </Grid>



                                <div className="thirdcenter" style={{ textAlign: "center", marginTop: "5%" }}>
                                    
                        
                           
                            <div >
                                {/*
                                <Button
                                            onClick={this.onSubmit}
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            className={clsx(classes.margin, classes.submit, classes.root_1)}
                            onClick={this.makeComment} 
                            >
                                    Leave a Comment
                                 </Button>
                                */}
                        </div>

                        <textarea value={this.state.comment}
                            style={this.state.display ? { display: "none" } : { display: "inline" }}
                            onChange={this.onChange} name="comment" className="textarea"> </textarea>


                            <div>

                            <Button
                                onClick={this.addOrderToDatabase}
                                variant="contained"
                                color="primary"
                                size="large"
                                className={clsx(classes.margin,  classes.root_2)}
                                   // onClick={this.bulkPrint}
                                   // addOrderToDatabase
                            >
                                Complete Order
                            </Button>
                                    </div>

                                </div>


                            </Grid>

                </div>
            </div>

        )


    }

}



const mapStateToProps = state => {
    return {

        adress: state.adress,
        selection: state.selection,
        date: state.date,
        zipcode: state.zipcode,
        amount: state.amount,
        comment: state.comment,
        error: state.error,
        price: state.price
    };
};



//export default withStyles(useStyles)(Access);
//export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Access));
export default withRouter(connect(mapStateToProps)(withStyles(useStyles)(Access)))