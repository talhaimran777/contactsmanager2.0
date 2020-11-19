import React, { Component } from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {firestoreConnect, isLoaded, isEmpty} from 'react-redux-firebase';

import Contact from './contact';
export class contacts extends Component {
    render() {       
        const {contacts} = this.props;

        if(!isLoaded(contacts)){
            return (
                <div className="text-center py-5 my-5">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        }

        if(isEmpty(contacts)){
            return(
                <div className="">
                    <h4 className = "text-secondary font-weight-normal">No contacts found!</h4>
                    <p>Try adding some contacts in your contact list!</p>
                    <Link to = "contact/add" className="btn btn-success btn-sm">Add Contact</Link>
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

