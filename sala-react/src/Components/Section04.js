import React from 'react'
import "./../Components/header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import correct from "../Image/correct.png";
import megacreator4 from "../Image/mega-creator-4.svg";


function NavScrollExample() {
    return (
        <>
            <div className="container">
                <div className="row booking-box">
                    <div className="booking-content">
                        <h3>Subscribe to <mark className="news-footer"> Newsletter</mark></h3>
                        <h4>Uncover, analyze, track, and report on SEO data.</h4>
                        <section className="newsletter w3-animate-bottom">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="content">
                                        <div className="input-group">
                                            <form>
                                                <input type="email" className="form-control your-email" placeholder="Your email address" />
                                                <span className="input-group-btn">
                                                    <button className="btn sub-now" type="submit">Subscribe</button>
                                                </span>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="newsletter-footer w3-animate-bottom ">
                            <div className="d-flex col-sm-5 newsletter-footer-subheader">
                                <div className="col-1 col-sm-2"><img className="currect" alt='currect' src={correct} /></div>
                                <div className="col-10 col-sm-9 needed-things">No credit card required</div>
                            </div>
                            <div className="d-flex col-sm-5 newsletter-footer-subheader">
                                <div className="col-1 col-sm-2"><img className="currect" alt='currect' src={correct} /></div>
                                <div className="col-10 col-sm-9 needed-things">Cancel Anything</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 contact-box-main">
                        <img className="contact-img w3-animate-right" alt='currect' src={megacreator4} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavScrollExample;

