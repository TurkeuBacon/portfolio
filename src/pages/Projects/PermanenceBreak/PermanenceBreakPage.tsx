import './PermanenceBreakPage.css';
import permanence_break_logo from './PermanenceBreakLogo.png'
import permanence_break_header_demo from './PermanenceBreakHeaderDemo.gif'
import permanence_break_custom_render_demo from './PermanenceBreakCustomRenderPassDemo.gif'
import permanence_break_render_pass_chart from './PermanenceBreakCustomRenderPassChart.png'
import { useEffect, useState } from 'react';

function PermanenceBreakPage() {

    const textFiles = [
        'roles',
        'overview',
        'customRenderPass',
        'renderPassDemo',
        'renderPassChart'
    ];
    let [textContents, setTextContents] = useState<string[]>([...textFiles]);

    useEffect(() => {
        fetchDescription();
    });

    return (
        <div className="PermanenceBreak-wrapper">
            <table className='PermanenceBreak-header-wrapper'>
                <tr>
                    <td className='PermanenceBreak-title-wrapper'>
                        <img className='PermanenceBreak-title-image' src={permanence_break_logo} alt='Permanence Break'/>
                    </td>
                    <td className='PermanenceBreak-demo-wrapper'>
                        <img className='PermanenceBreak-header-demo' src={permanence_break_header_demo} alt="Permanence Break Demo"></img>
                    </td>
                </tr>
            </table>
            <div className='PermanenceBreak-roles-wrapper'>
                {textContents[0]}
            </div>
            <p className='PermanenceBreak-overview-wrapper'>
                {textContents[1]}
            </p>
            <p className='PermanenceBreak-customRenderPass-wrapper'>
                {textContents[2]}
            </p>
            <table className='PermanenceBreak-image-text-pair'>
                <tr>
                    <td className='PermanenceBreak-image-text-pair-image'>
                        <img className='PermanenceBreak-table-image-end' src={permanence_break_custom_render_demo} alt='Permanence Break Render Pass Texture Demo'/>
                    </td>
                    <td className='PermanenceBreak-image-text-pair-text'>
                        <p className='PermanenceBreak-customRenderPassDemo-wrapper'>
                            {textContents[3]}
                        </p>
                    </td>
                </tr>
            </table>
            <p className='PermanenceBreak-customRenderPass-wrapper'>
                {textContents[4]}
            </p>
            <img className='PermanenceBreak-render-pass-chart' src={permanence_break_render_pass_chart} alt="Permanence Break Render Pass Chart"></img>
        </div>
    );

    function fetchDescription(i: number = 0, temp_contents: string[] = []) {
        const textFile = textFiles[i];
        fetch("/project_data/permanence_break/prmbrk_" + textFile + ".txt").then((response) => {
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
export default PermanenceBreakPage