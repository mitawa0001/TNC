import React from 'react'
import "./../Components/header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import takeownership from "../Image/take-ownership.png";
import security from "../Image/security.png";


const Section01 = () => {
  return (
    <>
    <div className="box-1 container ">
      <div className="col-12 col-sm-6">
        <button type="button" className="btn btn-warning start-up">startup</button>
        <div className="header-text-container ">The template your startup needed</div>
        <p className="footer-text-container">Awesome product pages. Mobile friendly. Easy.</p>
        <a href="https://sala.uxper.co/contact-01/" target="_blank"><button type="button"
          className="send-msg  btn-primary relative-msg btn-1">Let's talk - Send a message</button></a>
        <div className="text-container-circle"><img className="inner-circle" src="https://sala.uxper.co/wp-content/uploads/2021/10/cicle-s@2x.png" alt="blue-circle" /></div>
      </div>
      <div className="">
        <img className="box-1-img" src="https://sala.uxper.co/wp-content/uploads/2021/10/artwork-4.png" />
      </div>
    </div>
    <div className="container">
    <div className="main-box w3-animate-bottom">
      <div className="col-12 col-sm-4 listing-wrap">
        <div className="col-2"><img src={takeownership}/></div>
        <div className="col-12 col-sm-9 ">
          <div className="three-section-heading">24/7 Support</div>
          <p className="listing-box-footer">Nunc molestie tellus sapien, quis laoreet orci.</p>
        </div>
      </div>
      <div className="col-12 col-sm-4 listing-wrap">
        <div className="col-2 "><img src={security}/></div>
        <div className="col-12 col-sm-9 ">
          <div className="three-section-heading">Take Ownership</div>
          <p className="listing-box-footer">
            Nunc molestie tellus sapien, quis laoreet orci.
          </p>
        </div>
      </div>
      <div className=" col-12 col-sm-4 listing-wrap">
        <div className="col-2"><img src={security}/></div>
        <div className="col-12 col-sm-9 ">
          <div className="three-section-heading">Team Work</div>
          <p className="listing-box-footer">Nunc molestie tellus sapien, quis laoreet orci.</p>
        </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default Section01;

