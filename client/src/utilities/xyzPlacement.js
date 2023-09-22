function xyzPlacement(type) {

    let placement = {
        scale: [.5,.5,.5],
        position: [0,-1,0],
    }

    console.log(type);

    switch(type) {
        case 'speaker':
            placement = {
                scale: [.2,.2,.2],
                position: [-5,0,-3],
                rotation: [Math.PI / 2,Math.PI,4]
            }
            break;
        case 'userBack':
            placement = {
                scale: [.2,.2,.2],
                position: [1.25,-1.5,3],
                rotation: [Math.PI / 2,Math.PI,.2]
            }
            break;
        default: //user, nothing
    }

    return placement;
}

export default xyzPlacement;

/*
    Saving character positionings

    <primitive BACK TO US
        object={monster.rig} 
        scale={[.2,.2,.2]} 
        position={[1.25,-1.5,3]}
        rotation={[Math.PI / 2,Math.PI,.2]}
    /> WITH:
    <primitive LOOKING AT US
        object={vulpes} 
        scale={[.2,.2,.2]} 
        position={[-5,0,-3]}
        rotation={[Math.PI / 2,Math.PI,4]}
    />

    <primitive FOR IDLE SELECTION
        object={monster.rig} 
        scale={[.5,.5,.5]} 
        position={[0,-1,0]}
    /> 

*/