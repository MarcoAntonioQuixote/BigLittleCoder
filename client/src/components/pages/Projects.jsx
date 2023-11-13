import React, { useContext, useState } from 'react';
import { projects } from '../../portfolioData/projectData';
import HoverCard from '../reusable/HoverCard';
import { AppContext } from '../../storeManagement/AppContext';

function Projects() {
    const {app} = useContext(AppContext);
    const {w} = app.dimensions;
    const [index, setIndex] = useState(0);

    const showProjects = projects.map((p,i) => <HoverCard info={p} key={p.name} setSelected={setIndex} hover={index === i} index={i}/>)

    return (
        <>
        <div className='pageInSpeakerWindow aroundOnPage'>
            <div className="projectContainer">
                {showProjects}
            </div>
        </div>
        {/* <div id='arrowTemp' className="arrow arrowHide"></div> */}
        { w > 1975 ? null : <div className="arrow"></div>}
        
        </>
    )
}

export default Projects