import './WritingSample.css';
import WritingSample_image_1 from './WritingSample-1.png'
import WritingSample_image_2 from './WritingSample-2.png'

interface WritingSampleProps {
}

// eslint-disable-next-line no-empty-pattern
function WritingSample({}: WritingSampleProps) {
    
    return (
        <div className="WritingSample-wrapper">
            <div className='WritingSample-download-wrapper'>
                <a href="./downloads/GabrielBaconWritingSample.pdf" download="gabriel_bacon_writing_sample" className='WritingSample-download-button'>Download Writing Sample</a>
            </div>
            <div className="WritingSample-image-wrapper">
                <img src={WritingSample_image_1} alt="Gabriel Bacon's Writing Sample Page 1"></img>
                <img src={WritingSample_image_2} alt="Gabriel Bacon's Writing Sample Page 2"></img>
            </div>
        </div>
    );

}
export default WritingSample;