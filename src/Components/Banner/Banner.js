
import React from 'react';
import { Carousel } from 'react-bootstrap';
const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://htmldemo.net/hmart/p2/img/hmart/slide-two.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>Omni Gaming</h2>
                    <h2>Best Omni Gaming Computer Market</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;