import React from 'react'
import "./../Components/about.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Overteam = () => {
  return (
    <>
      <div className="container">
        <p className="text-center service">MEET OUR TEAM</p>
        <p className="text-center service-footer">Take a closer look at us</p>
        <div className="service-box w3-animate-bottom">
          <div className="service-main-box">
            <div className="col-12 col-sm-4 profile-card text-center p-4 rounded-3">
              <div className="profile-photo ">
                <img src="./img/mem-3.png" alt="profile Photo" className="img-fluid" />
              </div>
              <h3 className="pt-3 profile-name">Rajnish Kumar</h3>
              <p className="text-secondary-1">CEO</p>
              <div className="social-links ">
                <ul>
                  <li><a href="#"><i className="fa fa-instagram" style="font-size:18px"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter" style="font-size:18px"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-4 profile-card text-center p-4 rounded-3">
              <div className="profile-photo">
                <img src="./img/mem-4.png " alt="profile Photo" className="img-fluid" />
              </div>
              <h3 className="pt-3 profile-name">Atena Stak</h3>
              <p className="text-secondary-1">UI/UX Designer</p>
              <div className="social-links">
                <ul>
                  <li><a href="#"><i className="fa fa-twitter" style="font-size:18px"></i></a></li>
                  <li><a href="#"><i className="fa fa-instagram" style="font-size:18px"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-4 profile-card text-center p-4 rounded-3">
              <div className="profile-photo ">
                <img src="./img/mem-8.webp" alt="profile Photo" className="img-fluid" />
              </div>
              <h3 className="pt-3 profile-name">Susana Medy</h3>
              <p className="text-secondary-1">Developer</p>
              <div className="social-links">
                <ul>
                  <li><a href="#"><i className="fa linkedin" style="font-size:18px"></i></a></li>
                  <li><a href="#"><i className="fa fa-instagram" style="font-size:18px"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div className="view-all-team">
          <a href="https://sala.uxper.co/contact-01/"><button type="button" className="send-msg btn-primary common-button">View
            all team</button></a>
        </div>
      </div>
    </>
  );
}
export default Overteam;

