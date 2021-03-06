import React, { Component } from 'react';
import {firestoreConnect} from 'react-redux-firebase';
import {Link} from 'react-router-dom';
export class contact extends Component {
    constructor(props){
        super(props);

        this.state = {
            showDetails: false
        }
    }

    showDetailsHandler = () => this.setState(state => state.showDetails = !state.showDetails);
    
    deleteContactHandler = (e) => {
        e.preventDefault();
        const {firestore, contact} = this.props;
        const {id} = contact;

        firestore.delete({collection: 'contacts', doc: id});
    }
    render() {
        const {id, firstName, lastName, email, phone} = this.props.contact;
        return (
            <div className = "contact mt-2">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header">

                            <div className="row">
                                <div className="col-8">
                                    <h4>{firstName} {lastName} {' '}
                                        <i
                                            onClick={this.showDetailsHandler} 
                                            className="fas fa-caret-down text-secondary" style = {{cursor: 'pointer'}}>
                                        </i> 
                                    </h4>
                                </div>
                                <div className="col-4 text-right">
                                    <Link to = {`contact/edit/${id}`}>
                                        <i className="fas fa-edit text-success mr-4"
                                        style = {{fontSize: '20px', cursor: 'pointer'}}></i>
                                    </Link>

                                    <i className="fas fa-trash text-danger"
                                        style = {{fontSize: '20px', cursor: 'pointer'}}
                                        onClick = {this.deleteContactHandler}></i>
                                </div>
                            </div>
                        </div>

                        {this.state.showDetails ? (
                            <div className="card-body">
                                <div className=" card card-body">
                                    <p className = "strong"> <strong className = "mr-3 text-muted">Email: </strong>{email}</p>
                                </div>
                                <div className="card card-body">
                                    <p className = "strong"> <strong className = "mr-3 text-muted">Phone: </strong>{phone}</p>  
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default firestoreConnect()(contact);
