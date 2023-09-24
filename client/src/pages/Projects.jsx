import React from 'react';
import { projects } from '../portfolioData/projectData';
import HoverCard from '../components/HoverCard';

function Projects() {

    const showProjects = projects.map(p => <HoverCard info={p} key={p.name} />)

    return (
        <div className='page aroundOnPage'>
            {showProjects}
        </div>
    )
}

export default Projects