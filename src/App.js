import React from 'react';
import './App.css';
import { HashRouter, BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from './components/Homepage/index';
import Courses from './components/Courses/index';
import AboutUs from './components/AboutUs/index';




function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={Homepage} />
      <Route path="/courses" exact component={Courses} />
      <Route path="/aboutus" exact component={AboutUs} />
    </HashRouter>
  );
}

export default App;
