import React, { useEffect, useState } from "react";
import './About.css';
import gabriel_bacon_picture from "./GabrielBaconPicture.jpg";

interface AboutProps {
}

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
            <div className="About-gabriel-image-wrapper">
                <img src={gabriel_bacon_picture} alt="Gabriel Bacon" className="About-gabriel-image"></img>
            </div>
            <div className="About-text-wrapper">
                <p className="About-text">
                    {aboutInnerHtml}
                </p>
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