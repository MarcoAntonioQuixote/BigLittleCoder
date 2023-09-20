import React, { Suspense, useEffect, useContext, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GetModels from './GetModels';
import { CharacterContext } from '../../storeManagement/CharacterContext';
import Monster from './Monster';

function TheScene({children}) {

    const {characters} = useContext(CharacterContext);

    return (
    <div className='theScene'>
        <Canvas>
            <ambientLight/>
            <pointLight intensity={30} position={[-1,2,4]}/>
            <Suspense fallback={null}>
                <GetModels/>
                {children}
                {/* <Monster monster={characters[0]} name={name} /> */}
            </Suspense>
            <OrbitControls/>
        </Canvas>
    </div>
    )
}

export default TheScene