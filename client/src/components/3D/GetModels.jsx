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

        // useEffect(() => {
        //     // console.log({actions})
        //     if (characters[name]) return;
        //     let extracted = {};
        //     for (let move of app.load.moves) {
        //         extracted[move] = actions[`Rig.${name}|${move}`];
        //     }
        //     // const testObj = actions[`Rig.${name}|Turntable`];
        //     let newMonster = { rig: data3D, actions: extracted };
        //     // console.log(newMonster);
        //     // setCharacters(prev => {
        //     //     return ({...prev,[name]: newMonster })}
        //     // )
        //     setCharacters(prev => (
        //         {...prev, [name]: newMonster, actions: actions }
        //     ));
        // }, []);

        return null;
        // if (!monster) return null;
        // console.log('monster',monster);
        
        // const moves = app.load.moves;
        // const index = randomNum(0,moves.length-1);
        // const move = moves[index];
        // const action = monster.actions[move];
        // console.log(action);
        // action.play();
          
          // Usage
        // let action1 = actions[`Rig.${name}|Turntable`];
        // let mirror = action1;
        // let action2 = monster.actions.Turntable;
        // let action3 = monster.cheat;
        // let action4 = characters.actions[`Rig.${name}|Turntable`]

        // action1.play();

        // return <primitive object={monster.rig} scale={[.5,.5,.5]} position={[0,-2,0]}/>;
    }

    return (
        <>
            {app.load.characters.map((m,i) => <GetModelData name={m} key={i}/>)}
        </>
    )
}

export default GetModels;