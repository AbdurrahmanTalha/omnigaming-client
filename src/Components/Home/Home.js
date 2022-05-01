import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import WhatYouThink from '../WhatYouThink/WhatYouThink';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs></AboutUs>
            <Cards />
            <WhatYouThink></WhatYouThink>
        </div>
    );
};

export default Home;