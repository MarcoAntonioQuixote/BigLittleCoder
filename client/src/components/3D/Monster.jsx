import React, { useContext, useEffect, useState } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { CharacterContext } from '../../storeManagement/CharacterContext';
import { AppContext } from '../../storeManagement/AppContext';
import xyzPlacement from '../../utilities/xyzPlacement';

function Monster({info}) {

    const {app} = useContext(AppContext);
    const {move} = app.monster;
    const {type,name} = info;
    
    const {nodes, animations} = useGLTF('/monsters.gltf');
    const model = nodes[`Rig${name}`];

    const placement = xyzPlacement(type);
    const {scale,position,rotation} = placement;

    const {actions} = useAnimations(animations,model);
    const action = actions[`Rig.${name}|${move}`];

    // const [prevMove, setPrevMove] = useState(move);

    // useEffect(() => {

    // },[])

    
    // const {characters} = useContext(CharacterContext);

    // const [prevMove, setPrevMove] = useState(move);


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
            <primitive object={model} 
                scale={scale} 
                position={position} 
                rotation={rotation}
            /> 
        </>
    )
}

export default Monster;

