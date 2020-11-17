import React from 'react';

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
                            <a href="/" className = "nav-link"> Contacts</a>
                        </li>
                        <li className = "nav-item">
                            <a href="/" className = "nav-link"> Add Contact</a>
                        </li>
                        <li className = "nav-item">
                            <a href="/" className = "nav-link"> About</a>
                        </li>
                        <li className = "nav-item">
                            <a href="/" className = "nav-link"> Log Out</a>
                        </li>

                    </ul>   
                </div>
            </div>
        </nav>
    )
}

export default nav;
