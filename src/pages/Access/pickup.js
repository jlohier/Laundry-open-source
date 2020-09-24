import React, { Component } from "react"
import Header from "./header2"
import Typography from "@material-ui/core/Typography"
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid"


const useStyles = theme => ({

  
    root:
    {
        color: "#fff",
      
    },

    floatingLabelFocusStyle: {
        color: "#fff"
    }


});




class Pickup extends Component {
   

    render () {
        const { classes } = this.props;
        return (
            <React.Fragment>

                <Header />
                

                <h1 style={{textAlign:'center'}} className={classes.root}>Order Pickup</h1>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={5} md={5} lg={5} >

                    <div className="thirdcenter">
                            <TextField
                    fullWidth
                    InputProps={{
                        className: classes.root,

                    }}

                    InputLabelProps={{
                        className: classes.root,
                    }}
                    id="standard-basic" label="Enter Adress" classes={{ root: classes.root }} />


                     <TextField
                    fullWidth
                    InputProps={{
                        className: classes.root,

                    }}

                    InputLabelProps={{
                        className: classes.root,
                    }}

                    id="standard-basic" label="Phone Number" />

                <div>
                    <TextField
                    fullWidth
                    InputProps={{
                        className: classes.root,

                    }}

                    InputLabelProps={{
                        className: classes.root,
                    }}
                id="standard-basic" label="Zip Code" />
                </div>
                
                            <TextField
                     fullWidth
                    InputProps={{
                        className: classes.root,                      

                    }}
                    
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    //className={classes.textField}
                    InputLabelProps={{
                        className: classes.root,
                    }}

                    Input
                    
                            />
                    </div>
                    </Grid>
                    </Grid>
        </React.Fragment>

        )
}

    
}

export default withRouter(connect()(withStyles(useStyles)(Pickup)))