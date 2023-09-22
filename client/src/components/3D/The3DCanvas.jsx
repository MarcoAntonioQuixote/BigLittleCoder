import React, { useContext } from 'react'
import World from './World'
import TheScene from './TheScene'
import Instructions from '../Instructions';
import LRScrollSelection from '../LRScrollSelection';
import { AppContext } from '../../storeManagement/AppContext';
import SpeakerWindow from '../SpeakerWindow';

function The3DCanvas() {

    const {app} = useContext(AppContext);
    const {mode} = app;

    let layout;

    switch(mode) {
        case 'selection': layout = 'theScene glass';
            break;
        case 'start': layout = 'expandedScene';
            break;
    }

    //REALLY GOOD CHANCE theCANVAS IS NOT NEEDED... TESTING WITHOUT

    return (
        <div className='theCanvas'>
            <div className="theWorld">
                <World/>
            </div>
            <div className="sceneContainer">
                <LRScrollSelection>
                <div className={layout}>
                    <Instructions />
                    <TheScene />
                    {app.started && <SpeakerWindow />}
                </div>
                </LRScrollSelection>
            </div>
        </div>
    )
}

export default The3DCanvas