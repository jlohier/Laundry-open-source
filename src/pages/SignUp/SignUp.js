import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Component } from 'react';
import firebase from '../../Firebase/firebase';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Pure Bubble
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },

    submit: {
        margin: theme.spacing(3, 0, 2),
        background: '#018DDC'
    },

    p:
    {
        color:"red"
    }
});




class SignUpPage extends Component {
    
    constructor() {
        super();

        this.state = {
            adress: '',
            lname: '',
            fname: '',
            username:'',
            email: '',
            password: '',
            error: ''
        }
    }

    onSubmit = event => {
        const { email, password } = this.state

        this.errotType(password)

        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(()=> this.props.history.push("/login"))
            

            .catch(error => {
                console.log(error);
                if (error.code == "auth/weak-password") {
                    error.message =
                        "Your password should contain at least 8 caracters, 1 Capital letter, 1 number and a special character such as *, #, %, &, @, ~ "
                }
                if (error.code == "email-already-exists") {
                    error.message = "This email is already in use by another account "
                }
                /*else if (error.code) {
                    error.message
                }*/

                console.log(error.message)
                this.setState({error: error.message})
                
            })


        event.preventDefault();
        
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.value)
       
       
    };

    errotType = (password) => {
        var regex = /[&*#@%~!?]/;
        //var str = 'hello world';
        var regex1 = /[A-Z]/
        var regex2=/[0-9]/
        var result = regex.test(password);
        var result1 = regex1.test(password);
        var result2 = regex2.test(password);
        console.log("regex is equal to ", result);
        console.log("regex1 is equal to", result1);
        console.log("regex2 is equal to", result2);
    }


  
    render() {

        
        const { classes } = this.props;
        const { email, password, error, fname, lname} = this.state;
        return (
            
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                     </Typography>
                    <Typography component="p" className={classes.p}>
                        {this.state.error}
                     </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                   value={fname}
                                    onChange={this.onChange}
                                    autoComplete="first name"
                                    name="fname"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={this.onChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lname"
                                    autoComplete="last name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={this.onChange}
                                    value={email}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                   onChange={ this.onChange }
                                   value={password}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            onClick={this.onSubmit}
                           //type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                            
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
              </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        );
                
    }
                
}


//export default withStyles(useStyles)(SignUpPage);
export default withRouter(connect()(withStyles(useStyles)(SignUpPage)))