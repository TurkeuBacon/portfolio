import React from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar'
import SideNav from './components/SideNav/SideNav'

function App() {
  return (
    <div className='App'>
      <TopBar></TopBar>
      <SideNav></SideNav>
    </div>
  );
}

export default App;
