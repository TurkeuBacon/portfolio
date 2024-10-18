import React from 'react';
import './SideNav.css'
import hamburger from './hamburger.svg'
import { Link, useLocation } from 'react-router-dom';

interface SideNavProps {
}

function SideNav({}: SideNavProps) {
    let pathName = useLocation().pathname;
    return (
        <div className='SideNav-wrapper'>
            <div className='SideNav-tab'>
                <img src={hamburger} className="SideNav-tab-icon" alt="logo" />
            </div>
            <div className='SideNav-list'>
                <Link to="/projects" className={ pathName === "/projects" ? "active" : ""}>Projects</Link>
                <Link to="/about" className={ pathName === "/about" ? "active" : ""}>About</Link>
                <Link to="/contact" className={ pathName === "/contact" ? "active" : ""}>Contact</Link>
            </div>
        </div>
    );
}

export default SideNav;