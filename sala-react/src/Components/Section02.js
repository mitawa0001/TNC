import React from 'react'
import "./../Components/header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// import takeownership from "../Image/take-ownership.png";
import women from "../Image/women.webp";


function NavScrollExample() {
    return (
        
        <>
            <section className="main-box-4 container-fluid">
                <div className="container inner-box-4">
                    <div className="box-3-contant col-6">
                        <div className="box-4-sub-header">COMPANY’S VISION</div>
                        <div className="header-box-4">The story behind how our company was founded</div>
                        <p className="footer-text-container-4">Lorem ipsum dolor sit amet consectetur adipiscing elit eque ipsum odio justo amet urna auctor. At congue vulputate augue praesent mauris eu posuere pretium tellus. Viverra volutpat a est
                            quis egestas id risus cursus venenatis.</p>
                        <a href="https://sala.uxper.co/contact-01/" target="_blank"><button type="button" className="read-more btn btn-primary">Read more story</button></a>
                    </div>
                    <div className="col-6 img-remover">
                        <img className="box-4-img" src={women} />
                    </div>
                </div>
            </section>
            {/* <div className="shape-11">
                <div className="elementor-shape elementor-shape-bottom" data-negative="false">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" d="M0 0L2600 0 2600 69.1 0 0z"></path>
                        <path className="elementor-shape-fill" style="opacity:0.5" d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
                        <path className="elementor-shape-fill" style="opacity:0.25" d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
                    </svg>
                </div>
            </div> */}
           
        </>
        
    );
    
}

export default NavScrollExample;

