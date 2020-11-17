import React, { Component } from 'react';

export class contact extends Component {
    constructor(props){
        super(props);

        this.state = {
            showDetails: false
        }
    }

    showDetailsHandler = () => this.setState(state => state.showDetails = !state.showDetails); 
    render() {
        const {firstName, lastName, email, phone} = this.props.contact;
        return (
            <div className = "contact mt-2">
                <div className="col col-md-9 mx-auto">
                    <div className="card">
                        <div className="card-header">

                            <div className="row text-center">
                                <div className="col-6">
                                    <h4>{firstName} {lastName} {' '}
                                        <i
                                            onClick={this.showDetailsHandler} 
                                            className="fas fa-caret-down text-secondary" style = {{cursor: 'pointer'}}>
                                        </i> 
                                    </h4>
                                </div>
                                <div className="col-6">
                                    <i className="fas fa-edit text-success mr-4"
                                        style = {{fontSize: '20px', cursor: 'pointer'}}></i>

                                    <i className="fas fa-trash text-danger"
                                        style = {{fontSize: '20px', cursor: 'pointer'}}></i>
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

export default contact;
