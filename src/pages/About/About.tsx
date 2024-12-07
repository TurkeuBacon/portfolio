import React, { useEffect, useState } from "react";
import './About.css';
import gabriel_bacon_picture from "./GabrielBaconPicture.jpg";
import linkedin_icon from "./linkedin.png";
import github_icon from "./github_icon.png";

interface AboutProps {
}

// eslint-disable-next-line no-empty-pattern
function About({}: AboutProps) {

    let [aboutText, setAboutText] = useState("Default About Text");
    let [aboutInnerHtml, setAboutInnerHtml] = useState<JSX.Element[]>();

    useEffect(() => {
        fetch("/AboutText.txt").then((response) => {
          response.text().then((data) => {
            setAboutText(data);
            setAboutInnerHtml(createAboutInnerHtml(aboutText, false));
          });
        });
    });
    
    return (
        // <div className="About-under-construction-wrapper">
        //     <p className="About-under-construction-text">
        //         This page is currently under construction!<br/>
        //         I appreciate your patience
        //     </p>
        // </div>
        <div className="About-wrapper">
            <div className="About-group-layout">
                <div className="About-image-layout">
                    <img src={gabriel_bacon_picture} alt="Gabriel Bacon" className="About-gabriel-image"></img>
                </div>
                <div className="About-text-contact-layout">
                    <div className="About-text-layout">
                        <div className="About-text-wrapper">
                            <p className="About-text">
                                {aboutInnerHtml}
                            </p>
                        </div>
                    </div>
                    <div className="About-contact-layout">
                        <div className="About-contact-wrapper">
                            <h1>Contact</h1>
                            <hr></hr>
                            <div className='About-contact-links'>
                                <div className="About-contact-link-wrapper">
                                    <h2 className="About-contact-link-header">Phone:</h2>
                                    <a href='tel:8059015944' className="About-contact-link">(805) 901-5944</a>
                                </div>
                                <div className="About-contact-link-wrapper">
                                    <h2 className="About-contact-link-header">Email:</h2>
                                    <a href='mailto:turkeubacon@gmail.com' className="About-contact-link">turkeubacon@gmail.com</a>
                                </div>
                                <a href="https://www.linkedin.com/in/gabriel-bacon-7a3309241/" className="About-contact-link-icon-wrapper">
                                    <img src={linkedin_icon} alt="Linkedin" className="About-contact-link-icon"></img>
                                </a>
                                <a href="https://github.com/TurkeuBacon" className="About-contact-link-icon-wrapper">
                                    <img src={github_icon} alt="GitHub" className="About-contact-link-icon"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    function createAboutInnerHtml(text: string, useNewLine: boolean = true): JSX.Element[] {
        const lines = text.split('\n');
        return lines.map((line: string, index: number) => (
            <React.Fragment key={index}>
                {line + (useNewLine ? "" : " ")}
                {useNewLine && <br/>}
            </React.Fragment>
        ));
    }

}
export default About;