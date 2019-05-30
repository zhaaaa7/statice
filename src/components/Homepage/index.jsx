import React from 'react';
import './Homepage.css';
import { useWindowWidth } from '../../customHook.js';
import { useWindowScroll } from '../../customHook.js';

import Nav from '../Navigation/index';
import Header from './Header/index';
import Courses from './Courses/index';
import Teachers from './Teachers/index';
import Comments from './Comments/index';
import Footer from '../Footer/index';
import ContactUs from './ContactUs/index';

const Homepage = (props) => {
    const { windowWidth } = useWindowWidth();
    const windowScroll = useWindowScroll();

    return (
        <div className="homepage">
            <Nav windowWidth={windowWidth} windowScroll={windowScroll} />
            <Header />
            <Courses />
            <Teachers />
            <Comments />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default Homepage;
