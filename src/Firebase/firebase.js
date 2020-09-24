import * as firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/performance";



firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
})




// ... before export default statemen


export default firebase;
//export const analytics = firebase.analytics();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const performance = firebase.performance();