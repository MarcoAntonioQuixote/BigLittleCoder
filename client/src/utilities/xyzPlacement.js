function xyzPlacement(type) {

    let placement = {
        scale: [.5,.5,.5],
        position: [0,-1,0],
    }

    switch(type) {
        case 'speaker':
            placement = {
                scale: [.2,.2,.2],
                position: [-10,0,-3], //[-5,0,-3] STARTING POSITIONS!
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