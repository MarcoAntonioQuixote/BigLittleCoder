import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useContext } from 'react';
import Monster from './Monster';
import { AppContext } from '../../storeManagement/AppContext';
import { CharacterContext } from '../../storeManagement/CharacterContext';
import TheScene from './TheScene';

// function Scene() {

//     const {app} = useContext(AppContext);
//     const {characters} = useContext(CharacterContext);
//     const name = app.monster.name;
//     const monster = characters[name];

//     if (!monster) return;


//     return (
//         <>
//             <ambientLight/>
//             <pointLight intensity={30} position={[-1,2,4]}/>
//             <Suspense fallback={null}>
//                 <Monster monster={monster} key={name} name={name} />
//             </Suspense>
//             <OrbitControls/>
//         </>
//     )
// }

function TurnTable() {
    return (
        <div className="turntable">
            <TheScene>

            </TheScene>
        </div>
    )
}

export default TurnTable