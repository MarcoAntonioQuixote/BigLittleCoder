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

    useFrame(() => {
        if (type === 'select' || type === 'userBack') return;
        if (app.status.transitioning) {            
            ref.current.position.x += (targetX - ref.current.position.x) * 0.05;
            if (ref.current.position.x >= targetX - 0.05) {
                console.log('transition done!')
                setApp({type: 'transition', payload: false})
            }
        }

        // if (ref.current) {
        // }
    });
    

    // useEffect(() => {
    //     let prevAction = actions[`Rig.${name}|${prevMove}`];
    //     prevAction.stop();
    //     setPrevMove(move);
    //     let action = actions[`Rig.${name}|${move}`];
    //     action.play();

    //     let vAction = vActions[`Rig.Vulpes|Idle`];
    //     vAction.play();
    // },[move]);

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

