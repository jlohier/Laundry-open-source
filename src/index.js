import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import reducer from './store/reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { loadStripe } from '@stripe/stripe-js'
import { Elements} from '@stripe/react-stripe-js'
const stripePromise = loadStripe(process.env.REACT_APP_PublishableKey)

const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
    <Elements stripe={stripePromise}>
      <App />
     </Elements>
     </Provider>,
    document.getElementById("root")
);
//registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
