import React, { useContext } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { AppContext } from '../storeManagement/AppContext';
import useInstructions from '../hooks/useInstructions';

function Instructions() {
    //TODO useInstructions controls too much logic, seperate it!
    useInstructions();
    const {app} = useContext(AppContext);

    let instructions = app.instructions;
    let page = app.status.currentPage;
    let reposition;
    let setMobile; //TODO remove later!
    
    switch(page) {
        case '': reposition = 'convo';
            break;
        case 'MarkAnthony': reposition = 'portfolio';
            break;
        case 'contact' : reposition = 'noInstructions';
            break;
        default: reposition = 'started';
            setMobile = true;
    }

    if (!instructions) return null;

    return (    
        <div className={`instructions ${reposition}`} id={setMobile ? 'instructions' : null}>
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