import React from 'react'
import "./../Components/header.css";
import black from "../Image/black.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import tnclogo from "../Image/tnclogo.png";

function NavScrollExample() {
    return (
        <div className="navbar">
            <div className="alpha">
                <a className="navbar-brand mobile-logo" href="/"><img className="for-mobile-use" src={tnclogo} /></a>
                <a className="navbar-brand desktop-hide" href="/"><img src={tnclogo} /></a>
                <div className="main-box-nav">
                    <div className="dropdown">
                        <button className="dropbtn">
                            <span>
                                <a className='list-item' href="/">Home</a><FontAwesomeIcon icon="fa-regular fa-list-dropdown" />
                            </span>
                        </button>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn"><span><a className="list-item" href="/About">About</a>
                            <i className="fa fa-caret-down"></i></span>
                        </button>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn"><span>careers
                            <i className="fa fa-caret-down"></i></span>
                        </button>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn"><span>services
                            <i className="fa fa-caret-down"></i></span>
                        </button>
                        <div className="dropdown-content">
                            <div className="row">
                                <div className="container column d-flex ">
                                    <div className="row col-sm-3 dropdown-header-main-box">
                                        <p className="dropdown-list-header ">Category 1</p>
                                        <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                        <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                        <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                        <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                        <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn"><span>portfolio
                            <i className="fa fa-caret-down"></i></span>
                        </button>

                    </div>
                    <div className="dropdown">
                        <button className="dropbtn"><span>contact
                            <i className="fa fa-caret-down"></i></span>
                        </button>

                    </div>
                    <div className="dropdown">
                        <button className="dropbtn"><span>products
                            <i className="fa fa-caret-down"></i></span>
                        </button>

                    </div>
                </div>
                <div className="main-box-nav">
                    <button className="btn btn-success nav-button for-hide " type="submit"><a className='for-talk' href="tel:800-000-000">Let's Call</a></button>
                </div>
            </div>
        </div>
    );
}

export default NavScrollExample;

