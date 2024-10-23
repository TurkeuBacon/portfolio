import React from 'react';
import './TopBar.css'

interface TopBarProps {
}

// eslint-disable-next-line no-empty-pattern
function TopBar({}: TopBarProps) {
    return (
        <div className="TopBar-wrapper">
            <div className="TopBar-name-bubble">
                <div className="TopBar-name-text">
                    Gabriel Bacon
                </div>
            </div>
            <div className="TopBar-profession-bubble">
                <div className="TopBar-profession-text">
                    Game Developer
                </div>
            </div>
        </div>
    );
}
export default TopBar;