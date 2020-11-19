import React from 'react';

import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';

import {store} from './store/store';
import {rrfProps} from './store/store';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// Components
import Contacts from './components/contacts';
import Nav from './components/nav';
import AddContact from './components/addContact';
import EditContact from './components/editContact';
import AboutPage from './components/aboutPage';
import ErrorPage from './components/errorPage';
function app() {
    return (

        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <Router>
                    <Nav/>
                    <Switch>
                        <div className="container mt-2">
                            <h2 className = "text-secondary mb-4">Contacts <span className = "text-danger font-weight-normal">Manager App</span> </h2>
                            <Route exact path="/" component={Contacts}/>

                            <Route exact path="/contact/add" component={AddContact}/>

                            <Route exact path="/contact/edit/:id" component={EditContact}/>

                            <Route exact path="/about" component = {AboutPage}/>
                            
                        </div>
                    </Switch>
                </Router>
            </ReactReduxFirebaseProvider>
        </Provider>
    )
}

export default app
