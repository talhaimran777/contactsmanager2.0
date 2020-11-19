import React, { Component } from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {firestoreConnect, isLoaded, isEmpty} from 'react-redux-firebase';

import Contact from './contact';
import Spinner from './spinner/spinner';
export class contacts extends Component {
    render() {       
        const {contacts} = this.props;

        if(!isLoaded(contacts)){
            return (
                <Spinner/>
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

