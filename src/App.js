import React from 'react';
import './App.css';
import { HashRouter, BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from './components/Homepage/index';
import Course1 from './components/Course1/index';
import Course2 from './components/Course2/index';
import Course3 from './components/Course3/index';

import AboutUs from './components/AboutUs/index';




function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={Homepage} />
      <Route path="/courses/course1" exact component={Course1} />
      <Route path="/courses/course2" exact component={Course2} />
      <Route path="/courses/course3" exact component={Course3} />

      <Route path="/aboutus" exact component={AboutUs} />
    </HashRouter>
  );
}

export default App;
