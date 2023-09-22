import React, { useContext, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { AppContext } from '../storeManagement/AppContext';
import getText from '../utilities/instructions';

function Instructions() {

    const {app} = useContext(AppContext);
    const instructions = getText(app.instructions);

    let moveToBottom = app.started ? {top: '35vh'} : null;

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