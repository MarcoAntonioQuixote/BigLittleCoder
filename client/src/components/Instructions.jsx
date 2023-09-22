import React, { useContext, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { AppContext } from '../storeManagement/AppContext';

function Instructions() {

    const {app} = useContext(AppContext);
    const instructions = app.scene.instructions;

    useEffect(() => {
        console.log(instructions);
    }, [instructions])

    if (!instructions) return null;

    return (
        <div className="instructions">
            <Typewriter
                key={instructions}
                words={[instructions]} 
                typeSpeed={60}
            />
        </div>
    )
}

export default Instructions;

//https://www.npmjs.com/package/react-simple-typewriter -- details!