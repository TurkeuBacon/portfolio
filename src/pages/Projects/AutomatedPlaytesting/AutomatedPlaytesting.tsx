import './AutomatedPlaytestingPage.css';
import { useEffect, useState } from 'react';

function AutomatedPlaytestingPage() {

    const textFiles = [
        'roles',
        'overview',
        'goexplore',
        'plans'
    ];
    let [textContents, setTextContents] = useState<string[]>([...textFiles]);

    useEffect(() => {
        fetchDescription();
    });

    return (
        <div className="AutomatedPlaytesting-wrapper">
            <div className='AutomatedPlaytesting-header-wrapper'>
                <div className='AutomatedPlaytesting-title'>
                    Automated Playtesting
                </div>
            </div>
            <div className='PermanenceBreak-roles-wrapper'>
                {textContents[0]}
            </div>
            <a href='https://turkeubacon.github.io/CrispGoExplore/' className='AutomatedPlaytesting-try-it-link'>Try it here!</a>
            <p className='PermanenceBreak-overview-wrapper'>
                {textContents[1]}
            </p>
            <p className='PermanenceBreak-overview-wrapper'>
                My implementation of the Go-Explore algorithm was based off the <a href='https://arxiv.org/pdf/1901.10995'>original research paper</a>{textContents[2]}
            </p>
            <p className='PermanenceBreak-overview-wrapper'>
                {textContents[3]}
            </p>
        </div>
    );

    function fetchDescription(i: number = 0, temp_contents: string[] = []) {
        const textFile = textFiles[i];
        fetch("/project_data/automated_playtesting/autopl_" + textFile + ".txt").then((response) => {
            response.text().then((data) => {
                temp_contents.push(data);
                if(i+1 < textFiles.length) {
                    fetchDescription(i+1, temp_contents);
                } else {
                    setTextContents(temp_contents);
                }
            });
        });
    }
}
export default AutomatedPlaytestingPage