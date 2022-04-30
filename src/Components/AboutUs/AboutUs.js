import React from 'react';
import "./AboutUs.css"
const AboutUs = () => {
    return (
        <div>
            <h2 className="mb-3 text-center d-flex justify-content-center align-items-center">About us</h2>
            <div className="row my-5 container">
                <div className="col-md-5">
                    <div className="about-detail w-50 mx-auto d-flex justify-content-center align-items-center mt-5">
                        <p className="text">Hello There! I am Talha. Im a almost a full stack developer. Im 11 years old and I want to become one of the biggest full stack developers to ever exist.</p>
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