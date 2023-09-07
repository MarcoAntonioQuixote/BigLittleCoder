import { createContext, useState, useEffect, useContext } from "react";
import { useGLTF } from '@react-three/drei';
import { AppContext } from "./AppContext";

const CharacterContext = createContext(null);

const CharacterProvider = ({children}) => {

    const {dispatch} = useContext(AppContext);

    const {nodes, animations} = useGLTF('/monsters.gltf');

    const [characters,setCharacters] = useState({});

    useEffect(() => {
        let all = {
            Bunny: nodes[`RigBunny`],
            Toad: nodes[`RigToad`],
            Vulpes: nodes[`RigVulpes`],
            Fish: nodes[`RigFish`],
            Tortoise: nodes[`RigTortoise`],
            Cardinal: nodes[`RigCardinal`],
        };
        setCharacters(all);

    }, [nodes]);


    return (
    <>
        <CharacterContext.Provider value={{characters,animations}}>
            {children} 
        </CharacterContext.Provider>
    </>
    )
}

export {CharacterContext,CharacterProvider};

/*  for cleaning up your character objects
    function GetMonsterData ({monster}) {

    let dataFor3D = nodes[`Rig${monster}`];
    let movements = ['Idle', 'Jump', 'Run', 'Run_Wild', 'Trot', 'Turn', 'Turntable'];
    let {actions} = useAnimations(animations,dataFor3D);
    let extracted = {};
    for (let move of movements) {
        extracted[move] = actions[`Rig.${monster}|${move}`];
    }
    let newMonster = { rig: dataFor3D, actions: extracted };
    return null;
    }
*/