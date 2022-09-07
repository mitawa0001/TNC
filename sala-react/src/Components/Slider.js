// import React from 'react'
import "../css/Slider.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import footerprofile from "../Image/footerprofile.png";
import footernext from "../Image/footernext.png";


// import takeownership from "../Image/take-ownership.png";
// import security from "../Image/security.png";

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <div className="slider-main">
                <p className="text-center fs-6 service">TESTIMONIAL</p>
                <p className="text-center fs-2 mb-5 service-footer">People who already love us</p>
                <div className="Container">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {/* First */}
                        <Carousel.Item>
                            <div className="slider-main-box container">
                                <div className="slider-sub-box">
                                    <h3>" Amazing support! Totally all over my issues and we were
                                        changing it completely from being a place
                                        directory!  Love this theme"</h3>
                                    <div className="footer-box">
                                        <div className="footer-img">
                                            <img src={footerprofile}></img>
                                        </div>
                                        <div className="slider-footer">

                                            <div className="footer-desc">
                                                <h4>john Doe</h4>
                                                <h5>CTO of Behand</h5>
                                            </div>
                                            <div>
                                                <img className="footernext" src={footernext}></img>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="slider-sub-box block">
                                    <h3>					" I have buyed and tested more then 10 themes, and Sala its perfect for me, i think its the perfect theme !! Great support. Two thumbs up!   </h3>
                                    <div className="footer-box">
                                        <div className="footer-img">
                                            <img src={footerprofile}></img>
                                        </div>
                                        <div className="slider-footer">

                                            <div className="footer-desc">
                                                <h4>john Doe</h4>
                                                <h5>CTO of Behand</h5>
                                            </div>
                                            <div>
                                                <img className="footernext" src={footernext}></img>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Carousel.Item>
                        {/* Second */}
                        <Carousel.Item>
                            <div className="slider-main-box container">
                                <div className="slider-sub-box">
                                    <h3>
                                        " I have buyed and tested more then 10 themes, and Sala its perfect for me, i think its the perfect theme !! Great support. Two thumbs up!   </h3>
                                    <div className="footer-box">
                                        <div className="footer-img">
                                            <img src={footerprofile}></img>
                                        </div>
                                        <div className="slider-footer">

                                            <div className="footer-desc">
                                                <h4>john Doe</h4>
                                                <h5>CTO of Behand</h5>
                                            </div>
                                            <div>
                                                <img className="footernext" src={footernext}></img>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="slider-sub-box block">
                                    <h3>
                                        " Awesome theme! Looks great. Works great. Highly customizable. Excellent support. What more can I say?
                                        Couldn't be happier </h3>
                                    <div className="footer-box">
                                        <div className="footer-img">
                                            <img src={footerprofile}></img>
                                        </div>
                                        <div className="slider-footer">

                                            <div className="footer-desc">
                                                <h4>john Doe</h4>
                                                <h5>CTO of Behand</h5>
                                            </div>
                                            <div>
                                                <img className="footernext" src={footernext}></img>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Carousel.Item>
                        {/* Third */}
                        <Carousel.Item>
                            <div className="slider-main-box container">
                                <div className="slider-sub-box">
                                    <h3>" Amazing support! Totally all over my issues and we were
                                        It is a long established fact that a reader will be distracted
                                        directory!  Love this theme"</h3>
                                    <div className="footer-box">
                                        <div className="footer-img">
                                            <img src={footerprofile}></img>
                                        </div>
                                        <div className="slider-footer">

                                            <div className="footer-desc">
                                                <h4>john Doe</h4>
                                                <h5>CTO of Behand</h5>
                                            </div>
                                            <div>
                                                <img className="footernext" src={footernext}></img>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="slider-sub-box block">
                                    <h3>" It is a long established fact that a reader will be distracted
                                        changing it completely from being a place reader will directory!
                                        Love this theme"</h3>
                                    <div className="footer-box">
                                        <div className="footer-img">
                                            <img src={footerprofile}></img>
                                        </div>
                                        <div className="slider-footer">

                                            <div className="footer-desc">
                                                <h4>john Doe</h4>
                                                <h5>CTO of Behand</h5>
                                            </div>
                                            <div>
                                                <img className="footernext" src={footernext}></img>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    );
}
export default Slider;
