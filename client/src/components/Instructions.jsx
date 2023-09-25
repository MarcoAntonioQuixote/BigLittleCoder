import React, { useContext } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { AppContext } from '../storeManagement/AppContext';
import useInstructions from '../hooks/useInstructions';

function Instructions() {
    //TODO useInstructions controls too much logic, seperate it!
    useInstructions();
    const {app} = useContext(AppContext);

    let instructions = app.instructions;
    let page = app.status.next?.page;
    let reposition = page === '' ? 'convo' : 'started';

    if (!instructions) return null;

    return (    
        <div className={`instructions ${reposition}`} >
            <Typewriter
                key={instructions}
                words={[instructions]} 
                typeSpeed={20}
            />
        </div>
    )
}

export default Instructions;

//https://www.npmjs.com/package/react-simple-typewriter -- details!