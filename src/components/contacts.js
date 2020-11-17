import React, { Component } from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect, isLoaded} from 'react-redux-firebase';

export class contacts extends Component {
    render() {       
        const {contacts} = this.props;
        if(!isLoaded(contacts)){
            return (
                <h1>Still Loading!</h1>
            );
        }
        else return (
            <div className = "contacts">
                <h1>These are your contacts!</h1>
            </div>
        )
    }
}

export default compose(
    firestoreConnect(() => ['contacts']),
    connect(state => ({
        contacts: state.firestore.ordered.contacts
    }))
)(contacts);

