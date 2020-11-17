import React from 'react';
import {Link} from 'react-router-dom';
function nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-danger p-0 px-2">
            <div className="container">
                <a className="navbar-brand" href="#">Contacts Manager</a>
                <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"
                            style = {{fontSize: '16px'}}
                    ></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto px-5">
                        <li className = "nav-item">
                        <Link to = "/" className = "nav-link">Contacts</Link>
                        </li>
                        <li className = "nav-item">
                            <Link to = "/contact/add" className = "nav-link">Add Contact</Link>
                        </li>
                        <li className = "nav-item">
                            <Link to = "/about" className = "nav-link">About</Link>
                        </li>
                        <li className = "nav-item">
                            <Link to = "/logout" className = "nav-link">Logout</Link>
                        </li>

                    </ul>   
                </div>
            </div>
        </nav>
    )
}

export default nav;
