import React, { Component } from 'react';
import {firebaseConnect} from 'react-redux-firebase';
export class login extends Component {
    state = {
        email: '',
        password: ''
    }

    onChangeHandler = (e) => this.setState({[e.target.name]: e.target.value});
    onSubmitHandler = (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        const {firebase, history} = this.props;
        if(email !== '' && password !== ''){
            const credentials = {
                email,
                password
            }
            firebase.login(credentials)
            .then(history.push('/'));
        }
    }
    render() {
        return (
            <div className="login mt-5">
                <div className="row justify-content-center">
                    <div className="col-10 col-sm-9 col-md-8 col-lg-5">
                        <div className="card">
                            <div className="card-header text-center">
                                <h3 className = "text-uppercase text-danger">Login <i className="fas fa-lock ml-1"></i></h3>
                            </div>

                            <div className="card-body">
                                <form onSubmit = {this.onSubmitHandler}>
                                    <div className="form-group">
                                        <label htmlFor="email">Enter Email</label>
                                        <input className = "form-control" 
                                            type="text"
                                            placeholder = "Email..."
                                            name = "email"
                                            value = {this.state.email}
                                            required
                                            onChange = {this.onChangeHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Enter Password</label>
                                        <input className = "form-control" 
                                            type="password"
                                            placeholder = "Password..."
                                            name = "password"
                                            value = {this.state.password}
                                            required
                                            onChange = {this.onChangeHandler}/>
                                    </div>

                                    <button className="btn btn-outline-danger btn-block">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default firebaseConnect()(login);
