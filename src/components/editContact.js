import React, { Component } from 'react';
import {firestoreConnect, isLoaded} from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';

export class editContact extends Component {
    state = {
        firstName:'',
        lastName:'',
        email:'',
        phone:''
    }
    render() {
        const {contact} = this.props;
        const urlId = this.props.match.params.id;
        console.log(contact);
        if(isLoaded(contact)){

            const {id, firstName, lastName, email, phone} = contact;
            if(id === urlId){
                return (
                    <div className="col-md-8 mx-auto">
                        <form onSubmit = {this.onSubmitHandler} className = "mt-4">
                            <div className="form-group">
                                <label htmlFor= "firstName">Enter First Name</label>
                                <input className = "form-control"
                                    type="text"
                                    name = "firstName"
                                    defaultValue = {firstName}
                                    placeholder = "Enter First Name..."
                                    onChange={this.onChangeHandler}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor= "lastName">Enter Last Name</label>
                                <input className = "form-control"
                                    type="text"
                                    name = "lastName"
                                    defaultValue = {lastName}
                                    placeholder = "Enter Last Name..."
                                    onChange={this.onChangeHandler}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor= "email">Enter Email</label>
                                <input className = "form-control"
                                    type="text"
                                    name = "email"
                                    defaultValue = {email}
                                    placeholder = "Enter Email..."
                                    onChange={this.onChangeHandler}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor= "phone">Enter Phone No</label>
                                <input className = "form-control"
                                    type="text"
                                    name = "phone"
                                    defaultValue = {phone}
                                    placeholder = "Enter Phone No..."
                                    onChange={this.onChangeHandler}
                                    required
                                />
                            </div>
            
                            <button type = "submit" className="btn btn-outline-success btn-block">
                                Submit
                            </button>
                        </form>
                    </div>
                )
            }
            else{
                return (
                    <div className="text-center py-5 my-5">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                );
            }
        }
        else{
            return (
                <div className="text-center py-5 my-5">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        }
    }
}

export default compose(
    firestoreConnect(props => [{
        collection: 'contacts',
        storeAs: 'contact',
        doc: props.match.params.id
    }]),
    connect((state) => ({
        contact: state.firestore.ordered.contact && state.firestore.ordered.contact[0] 
    }))
)(editContact);
