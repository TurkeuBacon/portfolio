import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import './Projects.css';
import permanence_break from './ProjectData/permanence_break.json'

class Projects extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="Projects-main-content">
                <table className="Projects-projects-table">
                    <tbody className="Projects-projects-tbody">
                    <tr>
                        <td>
                            <ProjectCard {...permanence_break}/>
                        </td>
                        <td>
                            <ProjectCard/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ProjectCard/>
                        </td>
                        <td>
                            <ProjectCard/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ProjectCard/>
                        </td>
                        <td>
                            <ProjectCard/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ProjectCard/>
                        </td>
                        <td>
                            <ProjectCard/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Projects;