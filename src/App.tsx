import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar/TopBar'
import SideNav from './components/SideNav/SideNav'
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import { Navigate } from 'react-router-dom';
import PermanenceBreakPage from './pages/Projects/PermanenceBreak/PermanenceBreakPage';
import Resume from './pages/Resume/Resume';
import WritingSample from './pages/WritingSample/WritingSample';
import AutomatedPlaytestingPage from './pages/Projects/AutomatedPlaytesting/AutomatedPlaytesting';

function App() {
  console.log(window.innerWidth);
  if(window.innerWidth >= 1024) {
    console.log("BIG");
    return (
      <Router>
        <div className='App'>
          <TopBar></TopBar>
          <SideNav></SideNav>
          <div className='App-main-content-wrapper'>
            <Routes>
              <Route path="/" element={<Navigate to="/projects"/>} />
              <Route path='/projects' Component={Projects}/>
              <Route path='/about' Component={About}/>
              <Route path='/resume' Component={Resume}/>
              <Route path='/writing_sample' Component={WritingSample}/>
              <Route path='/projects/permanence_break' Component={PermanenceBreakPage}/>
              <Route path='/projects/automated_playtesting' Component={AutomatedPlaytestingPage}/>
              <Route path='/projects/permanence_break' Component={PermanenceBreakPage}/>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
  else {
    console.log("Little");
    return (
      <div className="About-under-construction-wrapper">
          <p className="About-under-construction-text">
              Not yet built for mobile<br/>
              Please visit this website on a computer<br/>
              Or resize your browser and reload the page.
          </p>
      </div>
    );
  }
}

export default App;
