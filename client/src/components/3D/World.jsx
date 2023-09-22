import React, { Suspense } from 'react';
import { OrbitControls, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

function World() {

    function BackgroundWorld() {
        const map = useTexture('textures/Digital_Painting_equirectangular-png_A_view_from_space_181339033.png');

        return (
            <mesh>
                <ambientLight/>
                <sphereGeometry args={[10,32,32]} />
                <meshStandardMaterial map={map} side={THREE.BackSide}/>
            </mesh>
        )
    }

    return (
        <Canvas>
            <ambientLight/>
            <pointLight intensity={30} position={[-1,2,4]}/>
            <Suspense fallback={null}>
                <BackgroundWorld />
            </Suspense>
            <OrbitControls enableZoom={false}/>
        </Canvas>
    )
}

export default World
