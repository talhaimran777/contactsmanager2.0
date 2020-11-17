import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export class nav extends Component {
    state = {
        showDropdown: false
    }

    collapseHandler = () => {
        const navBarToggler = document.querySelector('.navbar-toggler');
        const navBarCollapse = document.querySelector('.navbar-collapse');
        navBarToggler.classList.add('collapsed');
        navBarCollapse.classList.remove('show');
    };
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-danger p-0 px-2">
            <div className="container">
                <Link className="navbar-brand" to="/">Contacts Manager</Link>
                <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"
                            style = {{fontSize: '16px'}}
                    ></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto px-5">
                        <li className = "nav-item">
                            <Link onClick = {this.collapseHandler} to = "/" className = "nav-link">Contacts</Link>
                        </li>
                        <li className = "nav-item">
                            <Link onClick = {this.collapseHandler} to = "/contact/add" className = "nav-link">Add Contact</Link>
                        </li>
                        <li className = "nav-item">
                            <Link onClick = {this.collapseHandler} to = "/about" className = "nav-link">About</Link>
                        </li>
                        <li className = "nav-item">
                            <Link onClick = {this.collapseHandler} to = "/logout" className = "nav-link">Logout</Link>
                        </li>
                    </ul>   
                </div>
            </div>
        </nav>
        )
    }
}

export default nav;
