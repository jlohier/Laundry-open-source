import React from "react";
//import Dashboard from "./pages/Dashboard/Dashboard"
import side from "./pages/SignIn/SignInSide"
import SignIn from "./pages/SignIn/SignIn"
import SignUp from "./pages/SignUp/SignUp"
import Access from "./pages/Access/access"
import firebase from './Firebase/firebase';
import myorders from "./pages/Access/myorders2";
//import MakeOrder from "./pages/Access/makeorder2"
import MakeOrder from "./pages/Access/makeorder4"
import Preference from "./pages/Access/preferences"
//import responsive from "./pages/Access/PaymentForm"
import Pay from "./pages/Access/payform"
import verify from "./pages/SignIn/verify"
import checkout from "./pages/Access/map"
import ordertrial from "./pages/Access/makeorder5"
import Preferences1 from "./pages/Access/preferences1"


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import HomeOne from "./HomeOne";

//import Checkout from "./pages/Dashboard/Checkout";


//import history from "./services/history";
//import Routes from "./routes/index";

//import GlobalStyles from "./styles/global";

function App() {
    return (
        <Router>
            <div>
                
                <Route exact path="/" component={Access} />
                <Route path="/login" component={SignIn} />
                <Route path="/register" component={SignUp} />
                <Route path="/makeorder" component={MakeOrder} />
                <PrivateRoute path="/preference" component={Preference} />
                <PrivateRoute path="/pay" component={Pay} />
                <PrivateRoute path='/orders' component={myorders} />
                <Route exact path="/verify" component={verify} />
                <Route exact path="/home" component={HomeOne} />
                <Route exact path="/checkout" component={checkout}/>
                <Route path="/side" component={side}/>
                <Route path="/ordertrial" component={ordertrial} />
                <Route path="/mypath" component={Preferences1} />
            </div>
        </Router>
    );
}
  



const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            firebase.auth().currentUser !=null? (
                <Component {...props} />
            ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }} />
                )
        }
    />
);

export default App;