import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, useTexture } from '@react-three/drei';
import GetModels from './GetModels';

function TheScene({children}) {

    const cameraRef = useRef(null);
    const worldRef = useRef(null);

    function World() {
        const map = useTexture('textures/Digital_Painting_equirectangular-png_A_view_from_space_181339033.png');

        useFrame(({camera}) => {
            if (worldRef.current && cameraRef.current) {
                worldRef.current.position.copy(camera.position);
                worldRef.current.rotation.x = -camera.rotation.x;
                worldRef.current.rotation.y = -camera.rotation.y;
                worldRef.current.rotation.z = -camera.rotation.z;
            }
        })

        return (
            <mesh ref={worldRef}>
                <ambientLight/>
                <sphereGeometry args={[10,32,32]} />
                <meshStandardMaterial map={map} side={THREE.BackSide}/>
            </mesh>
        )
    }

    return (

    <Canvas camera={{ref: cameraRef}}>
        <ambientLight/>
        <pointLight intensity={30} position={[-1,2,4]}/>

        <Suspense fallback={null}>
            <GetModels/>
            {children}
            <World/>
        </Suspense>
        <OrbitControls/>
    </Canvas>
    )
}

export default TheScene