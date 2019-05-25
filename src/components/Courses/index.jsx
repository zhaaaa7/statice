import React, { useState, useEffect } from 'react';
import './Courses.css';

import Nav from '../Navigation/index';
import Header from './Header/index';
import CoursePlan from './CoursePlan/index';
import CourseFeature from './CourseFeature/index';
import CourseSyllabus from './CourseSyllabus/index';
import Teachers from './Teachers/index';
import Questions from './Questions/index';
import CourseFeedback from './CourseFeedback/index';
import Promotion from './Promotion/index';
import ContactUs from './ContactUs/index';
import Footer from '../Footer/index';
import SideNav from './SideNav/index';

const Courses = (props) => {
    const { offsetTops, windowScroll, windowWidth } = props;
    // console.log('courses', offsetTops);

    const [sideNavIndex, setSideNavIndex] = useState(window.scrollY);

    useEffect(() => {
        if (offsetTops.length > 0) {
            for (let i = 0; i < offsetTops.length; i++) {
                if (window.scrollY < offsetTops[0]) {
                    setSideNavIndex(0)
                    break;
                } else if (window.scrollY > offsetTops[offsetTops.length - 1]) {
                    setSideNavIndex(offsetTops.length - 1)
                    break;
                } else if (window.scrollY > offsetTops[i] && window.scrollY < offsetTops[i + 1]) {
                    setSideNavIndex(i);
                    break;
                }
            }
        }
    }, [offsetTops, windowScroll]);

    return (
        <div className="courses">
            <SideNav sideNavIndex={sideNavIndex} offsetTops={offsetTops} windowScroll={windowScroll} />

            <Nav windowWidth={windowWidth} windowScroll={windowScroll} />
            <Header />
            <CoursePlan />
            <CourseFeature />
            <CourseSyllabus />
            <Teachers />
            <Questions />
            <CourseFeedback />
            <Promotion />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Courses;