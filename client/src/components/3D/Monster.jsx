import React, { useContext, useEffect, useState } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { CharacterContext } from '../../storeManagement/CharacterContext';
import { AppContext } from '../../storeManagement/AppContext';

function Monster() {

    const {app} = useContext(AppContext);
    const {characters} = useContext(CharacterContext);
    let {name,move} = app.monster;
    const [prevMove, setPrevMove] = useState(move);
    const monster = characters[name];
    const {nodes, animations} = useGLTF('/monsters.gltf');
    let re3D = nodes[`Rig${name}`];
    const {actions} = useAnimations(animations,re3D);

    useEffect(() => {
        let prevAction = actions[`Rig.${name}|${prevMove}`];
        prevAction.stop();
        setPrevMove(move);
        let action = actions[`Rig.${name}|${move}`];
        action.play();
    },[move])

    //Notes: I have the monster saved in Characters; but I'm not actually using their rig. Monsters are saved as objects with actions and rig (rig works, but actions doesn't) - to get actions to work I have to re-grab the rig from nodes above. So notice that below you are using both.

    return (
        <>
            <primitive object={monster.rig} scale={[.5,.5,.5]} position={[0,-2,0]}/>
        </>
    )
}

export default Monster