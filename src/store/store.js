// setup for react-redux-firebase
// setup to work with firebase in react-redux project

import firebase from 'firebase/app';
//import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux';

import {
  firebaseReducer
} from 'react-redux-firebase';


 import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore

const fbConfig = {
    apiKey: "AIzaSyCXgeuAIoyW43ECAzfKSi4FzVIxu1EO15U",
    authDomain: "react-contacts-manager.firebaseapp.com",
    databaseURL: "https://react-contacts-manager.firebaseio.com",
    projectId: "react-contacts-manager",
    storageBucket: "react-contacts-manager.appspot.com",
    messagingSenderId: "557926274458",
    appId: "1:557926274458:web:73b11cbb3d82e5ab40d623",
    measurementId: "G-RQSMD82ZEZ"
}

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
 firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}
export const store = createStore(rootReducer, initialState,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
}