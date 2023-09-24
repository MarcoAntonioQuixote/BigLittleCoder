import React, { useContext, useRef, useState, useEffect } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { AppContext } from '../../storeManagement/AppContext';
import { useFrame, useThree } from '@react-three/fiber';
import dynamicXYZ from '../../utilities/dynamicXYZ';

function Monster({info}) {

    const {app,setApp} = useContext(AppContext);
    const {viewport} = useThree();
    const {width: w,height: h} = viewport;
    const {move} = app.monster;
    const {type,name} = info;
    const {nodes, animations} = useGLTF('/monsters.gltf');
    const model = nodes[`Rig${name}`];
    const {actions} = useAnimations(animations,model);
    const action = actions[`Rig.${name}|${move}`];
    const [placement,setPlacement] = useState(dynamicXYZ(type,w,h).start); //should be either start or end not both, start is where mode is, end signifies when to stop transition (or where to return model after resizing);
    const {scale,position,rotation} = placement; 

    const ref = useRef();
    
    action.play();

    useEffect(() => {
        if (app.status.transitioning) return;
        setPlacement(dynamicXYZ(type,w,h).end);
    }, [viewport]);

    useFrame(() => {
        
        if (type === 'select' || type === 'userBack') return;
        let modelRef = ref.current.position;
        if (app.status.transitioning) {
            // console.log('transitioning');
            let outgoing = app.children[1].name;
            let incoming = app.status.next.speaker;

            // This works because I know that I'm just swapping in from the left (the type===speaker), for more complex animations, you migth need to create an external function
            if (outgoing !== incoming) {
                let off = dynamicXYZ(type,w,h).start;
                modelRef.x -= ( - modelRef.x) * 0.05;
                if (modelRef.x < off.position[0]) {
                    setApp({type: 'transition', payload: {bringNext: true, inProgress: true}})
                }
            } else {
                let on = dynamicXYZ(type,w,h).end; 
                modelRef.x += (on.position[0] - modelRef.x) * 0.05;
                if (ref.x >= on.position[0] - 0.05) {
                    setApp({type: 'transition', payload: {inProgress: false}})
                }
            }
        } 
    });

    //Notes: I have the monster saved in Characters; but I'm not actually using their rig. Monsters are saved as objects with actions and rig (rig works, but actions doesn't) - to get actions to work I have to re-grab the rig from nodes above. So notice that below you are using both.

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

