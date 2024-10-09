import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import './Projects.css';
import projects_json from './ProjectData/project_cards.json'

class Projects extends React.Component {

    projects_list: Array<object>;

    constructor(props: Record<string, any>) {
        super(props);
        this.projects_list = projects_json.projects;
    }

    buildProjectsTable(): Array<React.ReactNode> {
        let table_rows: Array<React.ReactNode> = [];
        for(let i: number = 0; i < this.projects_list.length; i+=2) {
            table_rows.push(
                <tr key={i}>
                    <td>
                        <ProjectCard {...this.projects_list[i]}/>
                    </td>
                    <td>
                        { i+1 < this.projects_list.length &&
                        <ProjectCard {...this.projects_list[i+1]}/>}
                    </td>
                </tr>
            );
        }
        return table_rows;
    }

    render(): React.ReactNode {
        return (
            <div className="Projects-main-content">
                { this.projects_list.length > 0 ?
                <table className="Projects-projects-table">
                    <tbody className="Projects-projects-tbody">
                        { this.buildProjectsTable() }
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
}
export default Projects;