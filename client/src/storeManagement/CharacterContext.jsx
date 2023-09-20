import { createContext, useState, useEffect, useContext } from "react";
import { useGLTF } from '@react-three/drei';
import { AppContext } from "./AppContext";

const CharacterContext = createContext(null);

const CharacterProvider = ({children}) => {
    const [characters,setCharacters] = useState({});
    return (
    <>
        <CharacterContext.Provider value={{characters,setCharacters}}>
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