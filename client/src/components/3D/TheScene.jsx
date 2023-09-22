import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Grid, OrbitControls } from '@react-three/drei';
import GetModels from './GetModels';
import Children from './Children';

function TheScene() {
    return (
        <Canvas>
            <ambientLight intensity={1.8}/>
            {/* <pointLight intensity={50} position={[3,0,0]}/> */}
            <pointLight intensity={15} position={[-1,2,4]}/>

            <Suspense fallback={null}>
                <GetModels/>
                <Children />
            </Suspense>
            <OrbitControls/>
            <Grid />
        </Canvas>
    )
}

export default TheScene