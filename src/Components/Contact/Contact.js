import React from 'react';
import "./Contact.css"
const Contact = () => {
    return (
        <div className="py-5">
            <div className="w-50 p-5 mx-auto contact ">
                <h2>CONTACT US</h2>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="mb-3 me-5" >
                        <input className="contact-form mr-3" type="email" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                        <input className="contact-form" type="password" placeholder="Password" />
                    </div>
                </div>
                <textarea className="form-control mb-5 w-50 mx-auto contact-textarea" placeholder="Your Message"></textarea>
                <button className="btn btn-primary">Submit</button>
            </div>
        </div>
    );
};

export default Contact;