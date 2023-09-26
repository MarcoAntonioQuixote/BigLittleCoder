import React, { useContext } from 'react'
import World from './World'
import TheScene from './TheScene'
import Instructions from '../Instructions';
import LRScrollSelection from '../LRScrollSelection';
import { AppContext } from '../../storeManagement/AppContext';
import SpeakerWindow from '../SpeakerWindow';
import ShowBalls from './ShowBalls';

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
            </div>
            </LRScrollSelection>
        </div>
        { app.showBalls && <ShowBalls /> }
    </>
    )
}

export default The3DCanvas