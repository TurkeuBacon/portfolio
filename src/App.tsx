import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar/TopBar'
import SideNav from './components/SideNav/SideNav'
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import { Navigate } from 'react-router-dom';
import PermanenceBreakPage from './pages/Projects/PermanenceBreak/PermanenceBreakPage';

function App() {
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
            <Route path='/projects/permanence_break' Component={PermanenceBreakPage}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
