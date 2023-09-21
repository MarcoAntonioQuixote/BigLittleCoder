import React from 'react'
import World from './World'
import TheScene from './TheScene'

function The3DCanvas() {
    return (
        <div className='theCanvas'>
            <div className="theWorld">
                <World/>
            </div>
            <div className="sceneContainer">
                <div className="theScene glass">
                    <TheScene />
                </div>
            </div>
        </div>
    )
}

export default The3DCanvas