import React from 'react'
import "./../Components/header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import blog from "../Image/blog.png";
// import megacreator4 from "../Image/mega-creator-4.svg";

const Blog = () => {
    return (

        <div className="blog-box-top container">
            <p className="text-center fs-2 service-footer">From our blog</p>
            <div className="row row-cols-1 row-cols-md-3 g-4 w3-animate-bottom">
                <div className="col">
                    <div className="card blog-card">
                        <div className="hover01">
                            <figure><img src={blog} /></figure>
                        </div>
                        <div className="card-body hover-margin">
                            <h5 className="card-title"><a href="https://sala.uxper.co/category/resources/">Tutorials</a></h5>
                            <p className="card-text"><a href="https://sala.uxper.co/category/resources/">How much does it cost to start
                                and run a website?</a></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card blog-card">
                        <div className="hover01">
                            <figure><img src={blog} /></figure>
                        </div>
                        <div className="card-body hover-margin">
                            <h5 className="card-title"><a href="https://sala.uxper.co/category/resources/">Tutorials Ui/Ux Design</a></h5>
                            <p className="card-text"><a href="https://sala.uxper.co/category/resources/">How to become a web designer in
                                2021</a></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card blog-card">
                        <div className="hover01">
                            <figure><img src={blog} /></figure>
                        </div>
                        <div className="card-body hover-margin">
                            <h5 className="card-title"><a href="https://sala.uxper.co/category/resources/">Resources Tutorials</a></h5>
                            <p className="card-text"><a href="https://sala.uxper.co/category/resources/">20 best affiliate programs for
                                online creators in 2021</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;

