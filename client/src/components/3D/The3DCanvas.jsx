import React, { useContext } from 'react'
import World from './World'
import TheScene from './TheScene'
import Instructions from '../Instructions';
import LRScrollSelection from '../LRScrollSelection';
import { AppContext } from '../../storeManagement/AppContext';
import SpeakerWindow from '../SpeakerWindow';
import CopyGlass from './CopyGlass';

function The3DCanvas() {

    const {app} = useContext(AppContext);
    const {status} = app;

    let layout;

    switch(status.mode) {
        case 'selection': layout = 'smScene glass';
            break;
        case 'speaker': layout = 'expandedScene';
            break;
    }

    return (
        <>        
        <div className="theWorld">
            <World/>
        </div>
        <div className="sceneContainer">
            <LRScrollSelection>
            <div className={layout}>
                <Instructions />
                <TheScene />
                {app.status.started && <SpeakerWindow />}
                {app.status.started &&
                <CopyGlass />
                }
            </div>
            </LRScrollSelection>
        </div>
        </>
    )
}

export default The3DCanvas