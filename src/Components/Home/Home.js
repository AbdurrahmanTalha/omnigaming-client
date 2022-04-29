import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs></AboutUs>
            <Cards />
            <Contact />
        </div>
    );
};

export default Home;