import React from 'react'
import World from './World'
import TheScene from './TheScene'
import Instructions from '../Instructions';
import LRScrollSelection from '../LRScrollSelection';
import { Button } from '@mui/material';

function The3DCanvas() {
    return (
        <div className='theCanvas'>
            <div className="theWorld">
                <World/>
            </div>
            <div className="sceneContainer">
                <LRScrollSelection>
                <div className="theScene glass">
                    <Instructions />
                    <TheScene />
                </div>
                
                </LRScrollSelection>
            </div>
        </div>
    )
}

export default The3DCanvas