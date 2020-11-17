import React, { Component } from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect, isLoaded} from 'react-redux-firebase';

import Contact from './contact';
export class contacts extends Component {
    render() {       
        const {contacts} = this.props;
        if(!isLoaded(contacts)){
            return (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        }
        else{
            return contacts.map(contact => (
                <Contact key = {contact.id} contact={contact}/>
            ));
        }
    }
}

export default compose(
    firestoreConnect(() => ['contacts']),
    connect(state => ({
        contacts: state.firestore.ordered.contacts
    }))
)(contacts);

