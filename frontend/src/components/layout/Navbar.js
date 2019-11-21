import React from "react";
import { Link } from "react-router-dom";

function Navbar({onLogout}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" id="ournavbar">
        <Link to="/">
        <img class="navlogo" alt="No2ProLogo" src="logo192.png" width="100" height="100" class="d-inline-block align-top" alt="" id="ournavlogo"/>
        </Link>
            <a className= "col px-md-4 navbar-brand" href="#">
            <h2 class="slogan">  From Nogrammer </h2>
            <h2 class="slogan">  to Programmer  </h2>
            </a>
            <button className="col px-md-10 navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/posts" className="nav-link">
                                Posts
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/chat" className="nav-link">
                                How-to
                            </Link>
                        </li>
                </ul>

                <button className="btn btn-outline-info my-2 my-sm-0" id="buttoncolor" onClick={onLogout}>Logout</button>
            </div>
        </nav>
    );
}

export default Navbar;