import React from 'react'
import "./../Components/contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';



const Officelocation = ()=> {
    return (
        <>
            <div className="container">
                <div className="service-box w3-animate-bottom">
                    <div className="service-main-box">
                        <div className="col-sm-4 main-location">
                            <p className="location-name">paris</p>
                            <p className="align-content-center sector-type ">19 Maypole Crescent Ilford, L6 2UJ</p>
                            <div className="comman-box text-center w-100"><a href="tel:800-000-000">(+91) 800-000-000</a></div>
                        </div>
                        <div className="col-sm-4 main-location">
                            <p className="location-name">New York</p>
                            <p className="align-content-center sector-type ">2866 Oakway Lane, New York, USA</p>
                            <div className="comman-box text-center w-100"><a href="tel:800-000-000">(+91) 800-000-000</a></div>
                        </div>
                        <div className="col-sm-4 main-location">
                            <p className="location-name">Hanoi</p>
                            <p className="align-content-center sector-type ">106 Hoang Quoc Viet, Cau Giay, Hanoi</p>
                            <div className="comman-box text-center w-100"><a href="tel:800-000-000">(+91) 800-000-000</a></div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}
export default Officelocation;

