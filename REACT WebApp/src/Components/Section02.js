import React from 'react'
import "./../Components/header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import takeownership from "../Image/take-ownership.png";
import women from "../Image/women.webp";

const Section02 = () => {
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
            
        </>

    );

}

export default Section02;

