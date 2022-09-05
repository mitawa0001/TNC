import React from 'react'
import "./../Components/header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import rocket from "../Image/rocket.svg";
// import megacreator4 from "../Image/mega-creator-4.svg";


function NavScrollExample() {
  return (
    <>
      <div className="container">
        <p className="text-center fs-6 service">service</p>
        <p className="text-center fs-2 service-footer">Built for all company sizes</p>
        <div className="service-box w3-animate-bottom">
          <div className="service-main-box">
            <div className="col-sm-6 service-single-22">
              <div className="col-12 col-sm-2 service-single-img">
                <img className="img-fluid rounded-start"src={rocket} alt="..." />
              </div>
              <div className="col-12 col-sm-10">
                <div className="card-body">
                  <h5 className="card-title">Qualitative Research</h5>
                  <p className="card-text">It is a long established fact that a reader will be distracted</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 service-single-22">
              <div className="col-12 col-sm-2 service-single-img">
                <img src={rocket} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-12 col-sm-10">
                <div className="card-body">
                  <h5 className="card-title">Social Marketing</h5>
                  <p className="card-text">It is a long established fact that a reader will be distracted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-box w3-animate-bottom">
          <div className="service-main-box">
            <div className="col-sm-6 service-single-22">
              <div className="col-12 col-sm-2 service-single-img">
                <img src={rocket} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-12 col-sm-10">
                <div className="card-body">
                  <h5 className="card-title">Qualitative Research</h5>
                  <p className="card-text">It is a long established fact that a reader will be distracted</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 service-single-22">
              <div className="col-12 col-sm-2 service-single-img">
                <img src={rocket} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-12 col-sm-10">
                <div className="card-body">
                  <h5 className="card-title">Social Marketing</h5>
                  <p className="card-text">It is a long established fact that a reader will be distracted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-box w3-animate-bottom">
          <div className="service-main-box">
            <div className="col-sm-6 service-single-22">
              <div className="col-12 col-sm-2 service-single-img">
                <img src={rocket} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-12 col-sm-10">
                <div className="card-body">
                  <h5 className="card-title">Qualitative Research</h5>
                  <p className="card-text">It is a long established fact that a reader will be distracted</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 service-single-22">
              <div className="col-12 col-sm-2 service-single-img">
                <img src={rocket} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-12 col-sm-10">
                <div className="card-body">
                  <h5 className="card-title">Social Marketing</h5>
                  <p className="card-text">It is a long established fact that a reader will be distracted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavScrollExample;

