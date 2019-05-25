import React from 'react';
import './Homepage.css';
import Nav from '../Navigation/index';
import Header from './Header/index';
import Courses from './Courses/index';
import Teachers from './Teachers/index';
import Comments from './Comments/index';
import Footer from '../Footer/index';
import ContactUs from './ContactUs/index';

const Homepage = (props) => {
    // console.log('homepage', props.windowWidth);
    return (
        <div className="homepage">
            <Nav windowWidth={props.windowWidth} windowScroll={props.windowScroll} />
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
