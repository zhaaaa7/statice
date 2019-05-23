import React from 'react';
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


const Courses = () => {
    return (
        <div className="courses">
            <Nav />
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