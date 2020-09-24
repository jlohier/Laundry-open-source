import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { makeStyles } from '@material-ui/core/styles';
import Split from "./newpayment"
    //'./splitform'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,

    useHistory
} from "react-router-dom";

const useStyles = makeStyles({

    submit:
    {
        paddingLeft: "40px",
        paddingRight: "40px",
        background: '#018DDC',
        marginTop:"2%"
    },
});


/*export default function PaymentForm() {
    let history = useHistory();
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className="thirdcenter" style={{ textAlign: "center", marginTop:"1%"}}>
                
                <Split price={10}
                onSuccessfulCheckout={() => history.push("/")}
                />


            <Button
                //onClick={this.onSubmit}
                variant="contained"
                color="primary"
                size="large"
                className={classes.submit}
                //className={clsx(classes.margin, classes.submit, classes.root_2)}
                //onClick={this.addOrderToDatabase}
            >
                    Pay Balance
            </Button>
                </div>
        </React.Fragment>
    );
}*/


/*import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class TakeMoney extends React.Component {
    onToken = (token) => {
    console.log("token")
    }

    // ...

    render() {
        return (
            // ...
            <StripeCheckout
                token={this.onToken}
                stripeKey="pk_test_qPWwxnLIQoPG7PYwih0BiGha00Fh0tHtOk"
                amount={1000000} // cents
                currency="USD"
            />
        )
    }
}*/




/*export default class Checkout extends React.Component {
    onToken = (token, addresses) => {
        // TODO: Send the token information and any other
        // relevant information to your payment process
        // server, wait for the response, and update the UI
        // accordingly. How this is done is up to you. Using
        // XHR, fetch, or a GraphQL mutation is typical.
    };

    render() {
        return (
            <StripeCheckout
                stripeKey="pk_test_qPWwxnLIQoPG7PYwih0BiGha00Fh0tHtOk"
                token={this.onToken}
            />
        )
    }
}*/