import React from 'react';
import { projects } from '../portfolioData/projectData';
import ProjectCard from '../components/ProjectCard';


function Projects() {

    const showProjects = projects.map(p => <ProjectCard project={p} key={p.name}/>)

    return (
        <div>
            Your projects here
            {showProjects}
        </div>
    )
}

export default Projects