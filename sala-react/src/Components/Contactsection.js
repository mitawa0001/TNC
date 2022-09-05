import React from 'react'
import "./../Components/contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';




function NavScrollExample() {
    return (
       
            <div className="box-1 container ">
                <div className="col-12 col-sm-6 w3-animate-bottom sub-box-1">
                    <div className="col-12 top-sub-heading">contact us</div>
                    <div className="header-text-container ">Get in touch today!</div>
                    <p className="listing-box-footer-2">Vestibulum vitae orci et nisi iaculis commodo vitae eu velit.Nullam id erat in
                        orci consequat aliquam at sed nisi.
                    </p>
                    <div className="comman-box"><a href="tel:800-000-000">(+91) 800-000-000</a></div>
                    <div className="comman-box"><a href="mailto:webmaster@example.com">webmaster@example.com</a></div>
                    <div className="social-links">
                        <ul>
                            <li><a href="#"><i className="fa fa-instagram" style="font-size:18px"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" style="font-size:18px"></i></a></li>
                            <li><a href="#"><i className="fa fa-facebook" style="font-size:18px"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" style="font-size:18px"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="w3-animate-right sub-box-1">
                    <img className="box-1-img" src="./img/mega-creator-4.svg"/>
                </div>
            </div>

       
    );
}
export default NavScrollExample;

