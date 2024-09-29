import React from 'react';
import './SideNav.css'
import hamburger from './hamburger.svg'

class SideNav extends React.Component{
    render(): React.ReactNode {
        return (
            <div className='SideNav-wrapper'>
                <div className='SideNav-tab'>
                    <img src={hamburger} className="SideNav-tab-icon" alt="logo" />
                </div>
                <div className='SideNav-list'>
                    <a href="#projects" className="active">Projects</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        );
    }
}
export default SideNav;