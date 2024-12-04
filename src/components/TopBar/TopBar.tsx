import React from 'react';
import './TopBar.css'

interface TopBarProps {
}

// eslint-disable-next-line no-empty-pattern
function TopBar({}: TopBarProps) {
    return (
        <div className="TopBar-wrapper">
            <div className="TopBar-name-wrapper">
                <p>Gabriel Bacon</p>
            </div>
            <div className="TopBar-job-wrapper">
                <p>Game Developer</p>
            </div>
        </div>
    );
}
export default TopBar;