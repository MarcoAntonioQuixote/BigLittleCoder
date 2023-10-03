import React, { Suspense, useEffect, useRef } from 'react';
import { OrbitControls, useTexture } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function World() {

    return (
        <Canvas>
            <ambientLight/>
            <pointLight intensity={30} position={[-1,2,4]}/>
            <Suspense fallback={null}>
                <BackgroundWorld />
            </Suspense>
            {/* <OrbitControls enableZoom={false}/> */}
        </Canvas>
    )
}

export default World

const BackgroundWorld = React.memo((props) => {
    const ref = useRef();
    const map = useTexture('textures/Digital_Painting_equirectangular-png_A_view_from_space_181339033.png');

    useFrame(({ clock }) => {
        ref.current.rotation.y -= 0.0005;
    })

    return (
        <mesh ref={ref}>
            <ambientLight/>
            <sphereGeometry args={[10,32,32]} />
            <meshStandardMaterial map={map} side={THREE.BackSide}/>
        </mesh>
    )
})
