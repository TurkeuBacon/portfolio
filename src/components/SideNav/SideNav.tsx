import React from 'react';
import './SideNav.css'
import hamburger from './hamburger.svg'
import { Link } from 'react-router-dom';
import withPathName from '../WithPathName';

class SideNav extends React.Component {

    render(): React.ReactNode {
        return (
            <div className='SideNav-wrapper'>
                <div className='SideNav-tab'>
                    <img src={hamburger} className="SideNav-tab-icon" alt="logo" />
                </div>
                <div className='SideNav-list'>
                    <Link to="/projects" className={ (this.props as Record<string, any>).pathName === "/projects" ? "active" : ""}>Projects</Link>
                    <Link to="/about" className={ (this.props as Record<string, any>).pathName === "/about" ? "active" : ""}>About</Link>
                    <Link to="/contact" className={ (this.props as Record<string, any>).pathName === "/contact" ? "active" : ""}>Contact</Link>
                </div>
            </div>
        );
    }
}

export default withPathName(SideNav);