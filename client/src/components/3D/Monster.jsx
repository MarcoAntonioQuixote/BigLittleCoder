import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useEffect } from 'react';

function Monster({monster, name}) {

    const {animations} = useGLTF('/monsters.gltf');
    const {actions} = useAnimations(animations,monster);
    
    let movements = ['Idle', 'Jump', 'Run', 'Run_Wild', 'Trot', 'Turn', 'Turntable'];
    let index = randomNum(0, movements.length-1);

    let action = actions[`Rig.${name}|${movements[index]}`];
    action.play();

    return (
        <>
            <primitive object={monster} scale={[1,1,1]} position={[0,-3,0]}/>
        </>
    )
}

export default Monster

function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}