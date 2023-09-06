import { createContext, useState, useEffect } from "react";
import { useGLTF } from '@react-three/drei';

const CharacterContext = createContext(null);

const CharacterProvider = ({children}) => {
    const {nodes, animations} = useGLTF('/monsters.gltf');

    const [characters,setCharacters] = useState({});

    useEffect(() => {

        const all = {
            Bunny: nodes.RigBunny,
            Toad: nodes.RigToad,
            Cardinal: nodes.RigCardinal,
            Fish: nodes.RigFish,
            Tortoise: nodes.RigTortoise,
            Vulpes: nodes.RigVulpes
        }
        setCharacters(all);

    }, [nodes]);

    return (
        <CharacterContext.Provider value={{characters}}>
            {children}
        </CharacterContext.Provider>
    )
}

export {CharacterContext,CharacterProvider};