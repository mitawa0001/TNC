import React from 'react'
import "./../Components/header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import correct from "../Image/correct.png";
import megacreator4 from "../Image/mega-creator-4.svg";


const Section03 = ()=> { 
  return (
    <>
    <section className="box-3">
    <div className="box-1 container container">
      <div className="box-3-contant">
        <div className="box-3-sub-header">Who We Are</div>
        <div className="header-box-3">We specialize in UI/UX, web development, digital marketing.</div>
        <p className="footer-text-container">It is a long established fact that a reader will be distracted by the readable
          content</p>
        <div className="box-3-footer-ul">
          <div className="col-12 d-flex mt-4">
            <div className="col-1"><img className="currect" src={correct}/></div>
            <div className="col-11 box-3-footer-text">Vivamus ac elementum urna.</div>
          </div>
          <div className="col-12 d-flex mt-4">
            <div className="col-1"><img className="currect" src={correct}/></div>
            <div className="col-11 box-3-footer-text">Feugiat metus suscipiti.</div>
          </div>
        </div>
        <a href="https://sala.uxper.co/contact-01/" target="_blank"><button type="button"
            className="send-msg btn btn-primary mt-4 common-button">Get in touch</button></a>
      </div>
      <div className="w3-animate-right">
        <img className="comman-box-img" src={megacreator4}/>
      </div>
    </div>
  </section>
    </>
  );
}

export default Section03;

