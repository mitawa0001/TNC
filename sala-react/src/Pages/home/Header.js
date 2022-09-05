import React from 'react'
import "./../Components/header.css";
import black from  "../Image/black.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function NavScrollExample() {
    return (
        <div className="navbar">
        <div className="alpha">
            <a className="navbar-brand mobile-logo" href="https://sala.uxper.co/"><img className="for-mobile-use" src="http://sala.uxper.co/wp-content/uploads/2021/08/white.svg" /></a>
            <a className="navbar-brand desktop-hide" href="https://sala.uxper.co/"><img src="http://sala.uxper.co/wp-content/uploads/2021/08/white.svg" /></a>
            <div className="main-box-nav">
                <div className="dropdown">
                    <button className="dropbtn"><span>Demos
                    <FontAwesomeIcon icon="fa-regular fa-list-dropdown" /></span>
                    </button>
                    <div className="dropdown-content">
                        <div className="row">
                            <div className="container column d-flex ">
                                <div className="row col-sm-3 dropdown-header-main-box">
                                    <p className="dropdown-list-header ">Category 1 </p>
                                    <p className="dropdown-list-item"><a href="#">Contact 01</a></p>
                                    <p className="dropdown-list-item"><a href="#">Contact 01 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Contact 01 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Contact 01 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Contact 01 1</a></p>
                                </div>
                                <div className="row col-sm-3 dropdown-header-main-box">
                                    <p className="dropdown-list-header ">Category 2</p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Contact 01 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Contact 01 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Contact 01 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Contact 01 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Contact 01 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                </div>
                                <div className="row col-sm-3 dropdown-header-main-box">
                                    <p className="dropdown-list-header ">Category 3</p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                </div>
                                <div className="row col-sm-3 dropdown-header-main-box">
                                    <p className="dropdown-list-header ">Category 1</p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Contact 01 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Contact 01 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Contact 01 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Contact 01 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Contact 01 1</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn"><span>pages
                            <i className="fa fa-caret-down"></i></span>
                    </button>
                    <div className="dropdown-content">
                        <div className="row">
                            <div className="container column d-flex ">
                                <div className="row col-sm-3 dropdown-header-main-box">
                                    <p className="dropdown-list-header ">Contact</p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                   
                                </div>
                                <div className="row col-sm-3 dropdown-header-main-box">
                                    <p className="dropdown-list-header ">Contact</p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>

                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                </div>
                                <div className="row col-sm-3 dropdown-header-main-box">
                                    <p className="dropdown-list-header ">Category 3</p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                </div>
                                <div className="row col-sm-3 dropdown-header-main-box">
                                    <p className="dropdown-list-header ">Category 1</p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn"><span>Portfolio
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
                                </div>
                                <div className="row col-sm-3 dropdown-header-main-box">
                                    <p className="dropdown-list-header ">Category 2</p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                </div>
                                <div className="row col-sm-3 dropdown-header-main-box">
                                    <p className="dropdown-list-header ">Category 3</p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>

                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                </div>
                                <div className="row col-sm-3 dropdown-header-main-box">
                                    <p className="dropdown-list-header ">Category 1</p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn"><span>Blog
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
                                <div className="row col-sm-3 dropdown-header-main-box">
                                    <p className="dropdown-list-header ">Category 2</p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>

                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                </div>
                                <div className="row col-sm-3 dropdown-header-main-box">
                                    <p className="dropdown-list-header ">Category 3</p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                </div>
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
                    <button className="dropbtn"><span>Shop
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
                                </div>
                                <div className="row col-sm-3 dropdown-header-main-box">
                                    <p className="dropdown-list-header ">Category 2</p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                </div>
                                <div className="row col-sm-3 dropdown-header-main-box">
                                    <p className="dropdown-list-header ">Category 3</p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>

                                    <p className="dropdown-list-item"><a href="#">Link 1y</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                </div>
                                <div className="row col-sm-3 dropdown-header-main-box">
                                    <p className="dropdown-list-header ">Category 1</p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>
                                    <p className="dropdown-list-item"><a href="#">Link 1</a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-box-nav">
                <button className="btn btn-success nav-button for-hide " type="submit">Let's Talk</button>
            </div>
        </div>
    </div>
);
}

export default NavScrollExample;

