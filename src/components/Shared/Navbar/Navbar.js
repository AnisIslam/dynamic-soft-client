import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5 text-white" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="#services">Our Services</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="/dashboard">Dashboard</Link>

                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white " href="#review">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white " href="#contact">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white " href="/login">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;