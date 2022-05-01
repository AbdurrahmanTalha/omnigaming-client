import React from 'react';
import "./AboutUs.css"
const AboutUs = () => {
    return (
        <div className="my-5 ">
            <h2 className="mb-3 text-center d-flex justify-content-center align-items-center">What We Do</h2>
            <div className="row mx-auto my-5 container d-flex justify-content-center align-items-center">
                <div className="col-md-5">
                    <div className="about-detail w-75 mx-auto d-flex justify-content-center align-items-center mt-5">
                        <p className="text">Hello There! I am Talha. In this Website We sell you Computes. We make the best computers possible. This is the best site to buy Computers!</p>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="about-img">
                        <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/01/about-us-page-examples-1-61fd8f9784626-sej-1520x800.jpg" className=" img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;