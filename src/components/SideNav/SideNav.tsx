import React from 'react';
import './SideNav.css'
import hamburger from './hamburger.svg'
import { Link, useLocation } from 'react-router-dom';

interface SideNavProps {
}

// eslint-disable-next-line no-empty-pattern
function SideNav({}: SideNavProps) {
    let pathName = useLocation().pathname;
    return (
        <div className='SideNav-wrapper'>
            <div className='SideNav-tab'>
                <div className='SideNav-tab-swoop'>
                    <div></div>
                </div>
                <img src={hamburger} className="SideNav-tab-icon" alt="logo" />
            </div>
            <div className='SideNav-list'>
                <Link to="/projects" className={ pathName === "/projects" ? "active" : ""}>Projects</Link>
                <Link to="/about" className={ pathName === "/about" ? "active" : ""}>About</Link>
                <Link to="/resume" className={ pathName === "/resume" ? "active" : ""}>Resume</Link>
                <Link to="/writing_sample" className={ pathName === "/writing_sample" ? "active" : ""}>Writing Sample</Link>
                <div className='SideNav-list-swoop'>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default SideNav;