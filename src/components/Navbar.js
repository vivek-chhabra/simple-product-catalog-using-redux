import { NavLink } from "react-router-dom";
import "./Navbar.css";
import React from "react";

export default function Navbar() {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <a className="navbar-brand bold" href="#">
                        Redux Toolkit
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <NavLink to={'/'} className="nav-link active" aria-current="page" href="#">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/cart'} className="nav-link active" href="#">
                                    Cart
                                    <span className="cart-items">0</span>
                                </NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 shadow-none" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
