import React from 'react';
import '../style/TopBar.css'

class TopBar extends React.Component{
    render(): React.ReactNode {
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
}
export default TopBar;