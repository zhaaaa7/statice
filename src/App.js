import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from './components/Homepage/index';
import Courses from './components/Courses/index';


function debounce(fn) {
  let timer;
  return () => {
    if (timer) { clearTimeout(timer); }
    timer = setTimeout(() => { fn(); }, 100);
  };
}

const getDimensions = () => {
  const w = window;
  const d = document;
  const documentElement = d.documentElement;
  const body = d.getElementsByTagName('body')[0];
  const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
  const height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

  return { width, height };
};

const getHTMLNodeList = () => {

  let roots = Array.from(document.querySelectorAll('.roots'));
  roots = roots.map(ele => {
    return ele.offsetTop;
  });
  return roots;
};

const getScroll = () => {
  return window.scrollY;
};

const App = () => {

  const [windowSize, getWindowSize] = useState(getDimensions());
  const [offsetTops, setOffSetTops] = useState([]);
  const [scroll, getWindowScroll] = useState(getScroll());

  useEffect(() => {
    const scrollCallback = () => {
      getWindowScroll(getScroll());
      // console.log('scrolltop', window.scrollY);


    };
    window.addEventListener('scroll', scrollCallback);

    return () => { window.addEventListener('scroll', scrollCallback); };

  }, []);

  useEffect(() => {
    setOffSetTops(getHTMLNodeList());

    const resizeCallback = debounce(() => {
      getWindowSize(getDimensions());
      setOffSetTops(getHTMLNodeList());
    });

    window.addEventListener('resize', resizeCallback);
    return () => {
      window.removeEventListener('resize', resizeCallback);
    }
  }, []);

  // console.log('*****app', offsetTops);

  return (
    <Router>
      <Route path="/" exact
        render={() => <Homepage windowWidth={windowSize.width} windowScroll={scroll} />} />
      <Route path="/courses" exact
        render={() => <Courses windowWidth={windowSize.width} offsetTops={offsetTops} windowScroll={scroll} />} />

    </Router>
  );
}

export default App;
