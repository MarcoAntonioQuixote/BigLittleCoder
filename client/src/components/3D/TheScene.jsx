import React, { Suspense, useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import { Grid, OrbitControls } from '@react-three/drei';
import GetModels from './GetModels';
import SceneActors from './SceneActors';
import { AppContext } from '../../storeManagement/AppContext';
import ShowBalls from './ShowBalls';

function TheScene() {

    const {app} = useContext(AppContext);

    return (
        <Canvas className='canvas'>
            <ambientLight intensity={1.8}/>
            <pointLight intensity={15} position={[-1,2,4]}/>

            <Suspense fallback={null}>
                {/* <GetModels/> */}
                <SceneActors />
                {app.showBalls && <ShowBalls />}
            </Suspense>
            <OrbitControls/>
            {/* <Grid /> */}
        </Canvas>
    )
}

export default TheScene