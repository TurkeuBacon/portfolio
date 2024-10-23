import React from "react";
import './Contact.css';

interface ContactProps {
}

// eslint-disable-next-line no-empty-pattern
function Contact({}: ContactProps) {
    return (
        <div className="Contact-under-construction-wrapper">
            <p className="Contact-under-construction-text">
                This page is currently under construction!<br/>
                I appreciate your patience
            </p>
        </div>
    );
}
export default Contact;