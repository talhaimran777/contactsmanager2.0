import React, { Component } from 'react';

export class errorPage extends Component {
    render() {
        return (
            <div>
                <h3 className = "text-secondary">404 Error</h3>
                <p>Are you lost? You don't have permission to access this page!</p>
            </div>
        )
    }
}

export default errorPage;
