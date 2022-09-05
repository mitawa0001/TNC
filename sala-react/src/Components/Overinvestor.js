import React from 'react'
import "./../Components/about.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import rocket from "../Image/rocket.svg";
// import megacreator4 from "../Image/mega-creator-4.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'
//   import { faGithub } from '@fortawesome/free-solid-svg-icons'



function NavScrollExample() {
    return (
        <>
            <div className="over-invester-box">
                <div className="container">
                    <p className="service11">Our investors </p>
                    <p className="service-footer11">We’re lucky to be joined on this journey by some of the best investors in the game.</p>
                    <div className="container">
                        <div className="service-box w3-animate-bottom">
                            <div className="service-main-box">
                                <div className="col-sm-2 col-5 service-single-investor">
                                    <p className="counting-header-investor"><FontAwesomeIcon icon={faCoffee} size="5x" /></p>
                                </div>
                                <div className="col-sm-2 col-5 service-single-investor">
                                    <p className="counting-header-investor"><FontAwesomeIcon icon={faCoffee} size="5x" /></p>
                                </div>
                                <div className="col-sm-2 col-5 service-single-investor">
                                    <p className="counting-header-investor"><FontAwesomeIcon icon={faCoffee} size="5x" /></p>
                                </div>
                                <div className="col-sm-2 col-5 service-single-investor">
                                    <p className="counting-header-investor"><FontAwesomeIcon icon={faCoffee} size="5x" /></p>
                                </div>
                                <div className="col-sm-2 col-5 service-single-investor">
                                    <p className="counting-header-investor"><FontAwesomeIcon icon={faCoffee} size="5x" /></p>
                                </div>
                                <div className="col-sm-2 col-5 service-single-investor">
                                    <p className="counting-header-investor"><FontAwesomeIcon icon={faCoffee} size="5x" /></p>
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

