import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useContext, useEffect } from 'react';
import { randomNum } from '../../utilities/mathFunctions';
import { CharacterContext } from '../../storeManagement/CharacterContext';
import { AppContext } from '../../storeManagement/AppContext';

function Monster() {
    
    const {app} = useContext(AppContext);
    const {characters} = useContext(CharacterContext);
    let {name,move} = app.monster;
    const moves = app.load.moves;
    const monster = characters[name];

    if (!monster) return

    const {nodes, animations} = useGLTF('/monsters.gltf');
    let re3D = nodes[`Rig${name}`];
    const {actions} = useAnimations(animations,re3D);
    let action = actions[`Rig.${name}|${move}`];
    action.play();

    //Notes: I have the monster saved in Characters; but I'm not actually using their rig. Monsters are saved as objects with actions and rig (rig works, but actions doesn't) - to get actions to work I have to re-grab the rig from nodes above. So notice that below you are using both.

    return (
        <>
            <primitive object={monster.rig} scale={[.5,.5,.5]} position={[0,-2,0]}/>
        </>
    )
}

export default Monster