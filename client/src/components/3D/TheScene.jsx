import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GetModels from './GetModels';

function TheScene({children}) {

    return (
    <div className='theScene'>
        <Canvas>
            <ambientLight/>
            <pointLight intensity={30} position={[-1,2,4]}/>
            <Suspense fallback={null}>
                <GetModels/>
                {children}
            </Suspense>
            <OrbitControls/>
        </Canvas>
    </div>
    )
}

export default TheScene