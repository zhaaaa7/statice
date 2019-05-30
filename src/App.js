import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from './components/Homepage/index';
import Courses from './components/Courses/index';




function App() {
  return (
    <Router>
      <Route path="/" exact component={Homepage} />
      <Route path="/courses" exact component={Courses} />
    </Router>
  );
}

export default App;
