import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GetModels from './GetModels';
import Children from './Children';

function TheScene() {
    return (
        <Canvas>
            <ambientLight/>
            <pointLight intensity={30} position={[-1,2,4]}/>

            <Suspense fallback={null}>
                <GetModels/>
                <Children />
            </Suspense>
            <OrbitControls/>
        </Canvas>
    )
}

export default TheScene