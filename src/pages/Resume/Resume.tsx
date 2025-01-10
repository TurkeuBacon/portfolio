import './Resume.css';
import resume_image from './GabrielBaconResume.png'

interface ResumeProps {
}

// eslint-disable-next-line no-empty-pattern
function Resume({}: ResumeProps) {
    
    return (
        <div className="Resume-wrapper">
            <div className='Resume-download-wrapper'>
                <a href="./downloads/GabrielBaconResume.pdf" download="gabriel_bacon_resume" className='Resume-download-button'>Download Resume</a>
            </div>
            <div className="Resume-image-wrapper">
                <img src={resume_image} alt="Gabriel Bacon's Resume"></img>
            </div>
        </div>
    );

}
export default Resume;