import React from 'react'
import "./../Components/contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';




const Getintouch = () => {
    return (
        <>
            <div className="container">
                <div className="col-12 col-sm-12 w3-animate-bottom sub-box-1">
                    <div className="header-heading">Get in Touch</div>
                    <p className="header-sub-heading">We’re happy to talk to you.</p>
                </div>
                <div className="sub-box">
                    <div className="col-12 col-sm-5 w3-animate-bottom sub-box-1">
                        <p className="contact-header">Let’s talk.</p>
                        <p className="contact-sub-heading">If you have any questions about the subscription or are not sure which plan is
                            right for you, contact our team and let’s schedule a call.</p>
                        <div className="col-12 col-sm-12  w3-animate-bottom comman-box-footer">
                            <div className="col-12 col-sm-6">
                                <div className="common-platform-box">
                                    <div className="common-platform-header">call us</div>
                                    <div className="common-platform-footer"><a href="tel:800-000-000">(+91) 800-000-000</a></div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="common-platform-box email-us">
                                    <div className="common-platform-header">Email us</div>
                                    <div className="common-platform-footer"><a href="mailto:sample@gmail.com">Sample@gmail.com</a></div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 w3-animate-bottom mt-3">
                                <p className="contact-header col-12 col-sm-12">Address </p>
                                <p className="contact-sub-heading col-12 col-sm-12">2866 Oakway Lane, New York, USA</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-5 w3-animate-bottom sub-box-1">
                        <p className="contact-header">Send us a message.</p>
                        <p className="contact-sub-heading">Feel free to contact us with questions, potential partnerships, or media
                            inquiries. </p>
                        <div className="mask d-flex align-items-center  gradient-custom-3">
                            <div className="container h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-12">
                                        <div className="card-11">
                                            <div className="card-body p-3">
                                                <h2 className="register-now">Register to Our Webinar</h2>
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1cg" className="form-control form-control-lg"
                                                        placeholder="Enter Your Full Name" />
                                                </div>
                                                <div className="form-outline date-box">
                                                    <span className="col-12 col-sm-6"><input className="form-control form-control-lg" id="datepicker"
                                                        placeholder="Date" />
                                                    </span>
                                                    <span className="col-12 col-sm-6">
                                                        <input type="time" className="form-control form-control-lg lss"
                                                            id="start_date" placeholder="Time" name="start_date" value="{{ old('start_date') }}" />
                                                    </span>
                                                </div>
                                                <div className="form-outline">
                                                    <input type="Email" id="form3Example4cg" className="form-control form-control-lg"
                                                        placeholder="Your Email" />
                                                </div>
                                                <div className="form-outline ">
                                                    <input type="password" id="form3Example4cdg" className="form-control form-control-lg"
                                                        placeholder="Your Phone" />
                                                </div>
                                                <div className="d-flex justify-content-center mt-4">
                                                    <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Getintouch;

