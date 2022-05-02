import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const WhatYouThink = () => {
    return (
        <div className="border w-50 mx-auto p-5 mb-5">
            <h2>What do you Think Of us?</h2>
            <Form className="mx-auto w-50 mb-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control type="name" className="form-control" placeholder="Enter Name" />

                </Form.Group>

                <FloatingLabel controlId="floatingTextarea" label="Your Review" className="mb-3">
                    <Form.Control as="textarea" className="form-control" placeholder="Your Review" />
                </FloatingLabel>

                <Button variant="primary" type="submit" className="w-100">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default WhatYouThink;