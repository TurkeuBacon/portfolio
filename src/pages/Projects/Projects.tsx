import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import './Projects.css';
import projects_json from './ProjectData/project_cards.json'

interface ProjectsProps {
}

function Projects({}: ProjectsProps) {

    const FORCE_EMPTY: boolean = true;

    interface ProjectJSONType {
        title: string,
        image: string,
        blurb: string,
        link: string,
    }
    let projects_list: Array<ProjectJSONType> = projects_json.projects;

    function buildProjectsTable(): Array<React.ReactNode> {
        let table_rows: Array<React.ReactNode> = [];
        for(let i: number = 0; i < projects_list.length; i+=2) {
            table_rows.push(
                <tr key={i}>
                    <td>
                        <ProjectCard {...projects_list[i]}/>
                    </td>
                    <td>
                        { i+1 < projects_list.length &&
                        <ProjectCard {...projects_list[i+1]}/>}
                    </td>
                </tr>
            );
        }
        return table_rows;
    }
    
    return (
        <div className="Projects-main-content">
            { projects_list.length > 0 && !FORCE_EMPTY ?
            <table className="Projects-projects-table">
                <tbody className="Projects-projects-tbody">
                    { buildProjectsTable() }
                </tbody>
            </table>:
            <div className="Projects-under-construction-wrapper">
                <p className="Projects-under-construction-text">
                    This page is currently under construction!<br/>
                    I appreciate your patience
                </p>
            </div>
            }
        </div>
    );
}
export default Projects;