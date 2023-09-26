import React, { Suspense, useContext, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Grid, OrbitControls } from '@react-three/drei';
import { AppContext } from '../../storeManagement/AppContext';
import ShowBalls from './ShowBalls';
import usePlacement from '../../hooks/usePlacement';
import ShowCohort from './ShowCohort';

function SecondCanvas() {

    const {app} = useContext(AppContext);
    const placement = usePlacement();

    let Component;
    let subStyles;

    switch(app.secondCanvas.tracking) {
        case 'balls': 
            Component = ShowBalls;
            subStyles = 'balls3D';
            break;
        case 'cohort':
            Component = ShowCohort;
            subStyles = 'showCohort'; //TODO fix, it's not being called, which is good,
            break;
        default:
            Component = null;
    }

    return (
    <div className={subStyles} style={placement}>
        <Canvas>
            <ambientLight intensity={1.8}/>
            <pointLight intensity={15} position={[-1,2,4]}/>
            <Suspense fallback={null}>
                {Component && <Component />}
            </Suspense>
            {/* <OrbitControls/> */}
        </Canvas>
    </div>
    )
}

export default SecondCanvas;

//className={subStyles} style={placement}