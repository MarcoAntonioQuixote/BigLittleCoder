import React, { useContext, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { AppContext } from '../../storeManagement/AppContext';
import xyzPlacement from '../../utilities/xyzPlacement';
import { useFrame } from '@react-three/fiber';

function Monster({info}) {

    const {app,setApp} = useContext(AppContext);
    const {move} = app.monster;
    const {type,name} = info;
    const {nodes, animations} = useGLTF('/monsters.gltf');
    const model = nodes[`Rig${name}`];
    const placement = xyzPlacement(type);
    const {scale,position,rotation} = placement;
    const {actions} = useAnimations(animations,model);
    const action = actions[`Rig.${name}|${move}`];
    action.play();

    const ref = useRef();
    let targetX = -5; //DEFINE THIS SOMEWHERE ELSE
    let offStage = -10; //Define Somewhere else too! xyz placement ??

    useFrame(() => {
        if (type === 'select' || type === 'userBack') return;
        if (app.status.transitioning) {
            let position = ref.current.position;
            let outgoing = app.children[1].name;
            let incoming = app.status.next.speaker;  
            if (outgoing !== incoming) {
                position.x -= (targetX - position.x) * 0.05;
                if (position.x < offStage) {
                    setApp({type: 'transition', payload: {bringNext: true, inProgress: true}})
                }
            } else {
                position.x += (targetX - position.x) * 0.05;
                if (position.x >= targetX - 0.05) { //on trans in
                    setApp({type: 'transition', payload: {inProgress: false}})
                }
            }
        }
    });

    //Notes: I have the monster saved in Characters; but I'm not actually using their rig. Monsters are saved as objects with actions and rig (rig works, but actions doesn't) - to get actions to work I have to re-grab the rig from nodes above. So notice that below you are using both.                 position={[0,-1,0]}

    return (
        <>
            <primitive ref={ref} object={model} 
                scale={scale} 
                position={position} 
                rotation={rotation}
            /> 
        </>
    )
}

export default Monster;

