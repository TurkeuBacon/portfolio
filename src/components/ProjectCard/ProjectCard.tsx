import React from 'react'
import './ProjectCard.css'
import richard from './RichardScaled_3:2.png'

class ProjectCard extends React.Component {

    title: string;
    image: string;
    blurb: string;

    constructor(props: Record<string, any>) {
        super(props);
        this.title = props.title;
        this.image = props.image;
        this.blurb = props.blurb;
        if(!this.title) {
            this.title = "NEEDS A TITLE :D";
        }
        if(!this.image) {
            this.image = richard;
        }
        if(!this.blurb) {
            this.blurb = "This is a project that did a lot of really impressive stuff. Please hire me, also this is debugging text so hopefully noone sees this. Bunger Bunger Bunger Bunger Bunger Bunger Bunger Bunger Bunger Bunger Bunger Bunger Bunger.";
        }
    }

    render(): React.ReactNode {
        return (
            <div className='ProjectCard-wrapper'>
                <h3 className='ProjectCard-title'>{this.title && this.title}</h3>
                <hr/>
                <div className='ProjectCard-content-duo'>
                    <div className='ProjectCard-image-wrapper'>
                        <img className='ProjectCard-image' src={this.image} alt={this.title + " Thumbnail"}></img>
                    </div>
                    <div className='ProjectCard-blurb-wrapper'>
                        <p className='ProjectCard-blurb'>
                            {this.blurb}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProjectCard