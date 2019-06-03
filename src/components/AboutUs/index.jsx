import React from 'react';
import './AboutUs.css';
import { useWindowScroll } from '../../customHook.js';

import Nav from '../Navigation/index';
import Footer from '../Footer/index';
import Header from './Header/index';
import Partner from './Partners/index';


const AboutUs = (props) => {
    const windowScroll = useWindowScroll();

    return (
        <div className="aboutus">
            <Nav windowScroll={windowScroll} />
            <Header />
            <Partner />
            <Footer />
        </div>
    );
}

export default AboutUs;
