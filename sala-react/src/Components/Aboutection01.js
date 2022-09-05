import React from 'react'
import "./../Components/about.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// import rocket from "../Image/rocket.svg";
// import megacreator4 from "../Image/mega-creator-4.svg";


function NavScrollExample() {
    return (
        <>
            <div class="box-1 container ">
                <div class="col-12 col-sm-6 w3-animate-bottom">
                    <div class="col-12 top-sub-heading">about company</div>
                    <div class="header-text-container ">We help small businesses with big hearts make meaningful hires.</div>
                    <a href="https://sala.uxper.co/contact-01/"><button type="button" class="send-msg  btn-primary mt-4">Get in
                        touch</button></a>
                </div>
                <div class="w3-animate-right">
                    <img class="box-1-img" src="https://sala.uxper.co/wp-content/uploads/2021/10/artwork-4.png"/>
                </div>
            </div>
            <div class="container">
                <div class="main-box w3-animate-bottom">
                    <div class="col-12 col-sm-6 listing-wrap">
                        <div class="heading-top">Our Mission</div>
                        <div class="col-12 col-sm-9">
                            <p class="listing-box-footer">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Curabitur nec vehicula arcu.</p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 listing-wrap">
                        <div class="col-12 col-sm-9 ">
                            <p class="listing-box-footer-2">
                                Vestibulum vitae orci et nisi iaculis commodo vitae eu velit.
                                Nullam id erat in orci consequat aliquam at sed nisi. Nullam consequat leo at justo consectetur,
                                vel vehicula odio consequat. Aliquam accumsan dictum leo sed dignissim.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default NavScrollExample;

