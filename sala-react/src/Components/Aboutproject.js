import React from 'react'
import "./../Components/about.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// import rocket from "../Image/rocket.svg";
// import megacreator4 from "../Image/mega-creator-4.svg";


function NavScrollExample() {
    return (
        <>
            <div className="container">
                <div className="service-box w3-animate-bottom">
                    <div className="service-main-box">
                        <div className="col-sm-3 service-single">
                            <p className="counting-header"><span className="value-sign" id='0103'>2015</span></p>
                            <p className="align-content-center sector-type">Year founded</p>
                        </div>
                        <div className="col-sm-3 service-single">
                            <p className="counting-header"><span className="value-sign" id='0101'>60</span><span className="value-sign">+</span></p>
                            <p className="align-content-center sector-type">Projects</p>
                        </div>
                        <div className="col-sm-3 service-single">
                            <p className="counting-header"><span className="value-sign" id='0102'>10</span><span className="value-sign">+</span></p>
                            <p className="align-content-center sector-type">awwarts</p>
                        </div>
                        <div className="col-sm-3 service-single">
                            <p className="counting-header"><span className="value-sign" id='0104'>50</span><span className="value-sign">+</span></p>
                            <p className="align-content-center sector-type">Team members</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" allowfullscreen></iframe>
                </div>
            </div>

        </>
    );
}
export default NavScrollExample;

