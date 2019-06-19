import React, { lazy, Suspense } from 'react';
import './App.css';
import { HashRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Homepage from './components/Homepage/index';
import Course1 from './components/Course1/index';
import Course2 from './components/Course2/index';
import Course3 from './components/Course3/index';
import AboutUs from './components/AboutUs/index';
import NoMatch from './components/NoMatch';


// const Homepage = React.lazy(() => import('./components/Homepage/index'));
// const Course1 = lazy(() => import('./components/Course1/index'));
// const Course2 = lazy(() => import('./components/Course2/index'));
// const Course3 = lazy(() => import('./components/Course3/index'));
// const AboutUs = lazy(() => import('./components/AboutUs/index'));
// const NoMatch = lazy(() => import('./components/NoMatch'));



function App() {
  return (
    <HashRouter>
      <ScrollToTop>
        {/*<Suspense fallback={<div>Loading...</div>}>*/}
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/courses/course1" exact component={Course1} />
          <Route path="/courses/course2" exact component={Course2} />
          <Route path="/courses/course3" exact component={Course3} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="*" component={NoMatch} />
        </Switch>

        {/* </Suspense>*/}
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;
