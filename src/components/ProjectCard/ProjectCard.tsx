import React from 'react'
import './ProjectCard.css'
import richard from './RichardScaled_3:2.png'

interface ProjectCardProps {
    title: string,
    image: string,
    blurb: string,
    link: string,
}

function ProjectCard({ title="Missing Title", image=richard, blurb="Missing Blurb", link="/projects"}: ProjectCardProps) {
    return (
        <div className='ProjectCard-wrapper'>
            <h3 className='ProjectCard-title'>{title}</h3>
            <hr/>
            <div className='ProjectCard-content-duo'>
                <div className='ProjectCard-image-wrapper'>
                    <img className='ProjectCard-image' src={"project_thumbnails/" + image} alt={title + " Thumbnail"}></img>
                </div>
                <div className='ProjectCard-blurb-wrapper'>
                    <p className='ProjectCard-blurb'>
                        {blurb}
                    </p>
                </div>
            </div>
        </div>
    );
}
export default ProjectCard