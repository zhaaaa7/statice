import React from 'react';
import './AboutUs.css';
import { useWindowWidth } from '../../customHook.js';
import { useWindowScroll } from '../../customHook.js';

import Nav from '../Navigation/index';
import Footer from '../Footer/index';
import Header from './Header/index';

import Partner from './Partners/index';


const AboutUs = (props) => {
    const { windowWidth } = useWindowWidth();
    const windowScroll = useWindowScroll();

    return (
        <div className="aboutus">
            <Nav windowWidth={windowWidth} windowScroll={windowScroll} />
            <Header />
            <Partner />
            <Footer />
        </div>
    );
}

export default AboutUs;
