import React, { useContext, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { AppContext } from '../storeManagement/AppContext';
import useInstructions from '../hooks/useInstructions';

function Instructions() {
    useInstructions();
    const {app} = useContext(AppContext);

    let instructions = app.instructions;
    let moveToBottom = app.status.started ? {top: '35vh'} : null;

    if (!instructions) return null;

    return (    
        <div className="instructions" style={moveToBottom}>
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