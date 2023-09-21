import React, { useContext } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { AppContext } from '../../storeManagement/AppContext';
import { CharacterContext } from '../../storeManagement/CharacterContext';

function GetModels() {

    const {app} = useContext(AppContext);
    const {characters,setCharacters} = useContext(CharacterContext);

    function GetModelData({name}){
        
        const {nodes, animations} = useGLTF('/monsters.gltf');
        let data3D = nodes[`Rig${name}`];
        let {actions} = useAnimations(animations,data3D);
        
        if (characters[name]) return;

        let extracted = {};
        for (let move of app.load.moves) {
            extracted[move] = actions[`Rig.${name}|${move}`];
        }

        let newMonster = { rig: data3D, actions: extracted };

        setCharacters(prev => (
            {...prev, [name]: newMonster }
        ));
        return null;
    }

    return (
        <>
            {app.load.characters.map((m,i) => <GetModelData name={m} key={i}/>)}
        </>
    )
}

export default GetModels;