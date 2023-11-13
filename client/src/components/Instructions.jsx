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
    let type = app.dimensions.type;
    let reposition;
    let setMobile; //TODO remove later!
    let smallerFont = ''
    
    switch(page) {
        case '': reposition = 'convo';
            break;
        // case 'MarkAnthony': reposition = 'portfolio';
        //     break;
        case 'contact' : reposition = 'noInstructions';
            break;
        case 'TechStack':
        case 'Coaching':
        case 'Projects':
        case 'MarkAnthony':
        case 'cohorts':
        case '1-on-1':
            if (type === 'standard') {
                reposition = 'started';
            }
            if (type === 'mobile') {
                setMobile = true;
            }
            if (type === 'long') {
                smallerFont = 'smallerFont';
            }            
            break;
        default: reposition = 'started';
            setMobile = true;
    }

    if (!instructions) return null;

    return (    
        <div className={`instructions ${reposition} ${smallerFont}`} id='instructions'>
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