import React, { Component } from 'react';
import {firestoreConnect} from 'react-redux-firebase';

export class addContact extends Component {
    state = {
        firstName:'',
        lastName:'',
        email:'',
        phone:''
    }

    onChangeHandler = (e) => this.setState({[e.target.name]:e.target.value});
    onSubmitHandler = (e) => {
        e.preventDefault();
        const contact = this.state;
        const {firestore, history} = this.props;
        firestore.add({collection: 'contacts'}, contact);
        history.push('/');
    };
    render() {
        const {firstName, lastName, email, phone} = this.state;
        return (
            <div className="col-md-8 mx-auto">
                <form onSubmit = {this.onSubmitHandler} className = "mt-4">
                    <div className="form-group">
                        <label htmlFor= "firstName">Enter First Name</label>
                        <input className = "form-control"
                            type="text"
                            name = "firstName"
                            value = {firstName}
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
                            value = {lastName}
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
                            value = {email}
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
                            value = {phone}
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
}

export default firestoreConnect()(addContact);
