import React from 'react'
import "./../Components/header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import rocket from "../Image/rocket.svg";
// import megacreator4 from "../Image/mega-creator-4.svg";


function NavScrollExample() {
    return (
        <>
            <footer>
                <div className="container text-start text-md-start mt-5">
                    <div className="row mt-3 text-start">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <img src="http://sala.uxper.co/wp-content/uploads/2021/08/white.svg" />
                            </h6>
                            <p className="footer-dis">
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto ">
                            <p>
                                <a href="#!" className="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Laravel</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto ">


                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto ">

                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
                            <p className="footer-dis">
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                            <form action="#">
                                <div className=" col-12">
                                    <input className="col-8 col-md-7 input-field btn btn-lg button-margin-input" name="email" id="email"
                                        type="email" placeholder="Your Email" required />
                                    <button className="col-4 col-md-5 submit-field btn btn-info btn-lg button-margin"
                                        type="submit">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <div className="lower-footer">
                    <div className="container">
                        <div className="text-left p-4" style="background-color: rgba(0, 0, 0, 0.05);">
                            © 2021 Copyright:
                            <a className="text-reset float-end" href="https://mdbootstrap.com/">© 2021 Uxper. All rights reserved
                            </a>
                        </div>
                    </div>
                </div> */}
            </footer>
        </>
    );
}
export default NavScrollExample;

