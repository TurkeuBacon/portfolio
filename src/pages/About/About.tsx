import React from "react";
import './About.css';

interface AboutProps {
}

function About({}: AboutProps) {
    return (
        <div className="About-under-construction-wrapper">
            <p className="About-under-construction-text">
                This page is currently under construction!<br/>
                I appreciate your patience
            </p>
        </div>
    );
}
export default About;