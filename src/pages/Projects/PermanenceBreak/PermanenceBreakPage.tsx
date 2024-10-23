import './PermanenceBreakPage.css';
import permanence_break_logo from './PermanenceBreakLogo.png'
import { useEffect, useState } from 'react';

function PermanenceBreakPage() {

    const descriptionKeys = ['A', 'B'];
    let [descriptions, setDescriptions] = useState<string[]>([...descriptionKeys]);

    useEffect(() => {
        fetchDescription();
    });

    return (
        <div className="PermanenceBreak-wrapper">
            <div className='PermanenceBreak-title-wrapper'>
                <img className='PermanenceBreak-title-image' src={permanence_break_logo} alt='Permanence Break'/>
            </div>
            <p className='PermanenceBreak-description-A'>
                {descriptions[0]}
            </p>
            <p className='PermanenceBreak-description-A'>
                {descriptions[1]}
            </p>
        </div>
    );

    function fetchDescription(i: number = 0, temp_descs: string[] = []) {
        const descKey = descriptionKeys[i];
        fetch("/project_data/permanence_break/description" + descKey + ".txt").then((response) => {
            response.text().then((data) => {
                temp_descs.push(data);
                if(i+1 < descriptionKeys.length) {
                    fetchDescription(i+1, temp_descs);
                } else {
                    setDescriptions(temp_descs);
                }
            });
        });
    }
}
export default PermanenceBreakPage