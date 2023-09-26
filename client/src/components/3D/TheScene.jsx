import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Grid, OrbitControls } from '@react-three/drei';
import GetModels from './GetModels';
import SceneActors from './SceneActors';

function TheScene() {


    return (
        <Canvas className='canvas' >
            <ambientLight intensity={1.8}/>
            <pointLight intensity={15} position={[-1,2,4]}/>

            <Suspense fallback={null}>
                {/* <GetModels/> */}
                <SceneActors />
            </Suspense>
            {/* <OrbitControls/> */}
            {/* <Grid /> */}
        </Canvas>
    )
}

export default TheScene