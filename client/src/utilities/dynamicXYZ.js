import { rotateOnWidth } from "./mathFunctions";


function dynamicXYZ(type,width,height) {
    let placement = {
        scale: [.5,.5,.5],
        position: [0,-1,0],
    }
    switch(type) {
        case 'speaker':
            placement = {
                scale: [.2,.2,.2],
                //natural position (sin transition)
                position: [-width/1.5,0,-3], 
                rotation: [Math.PI / 2,Math.PI,rotateOnWidth(width)],
                target: {
                    x: {onScreen: -width/1.5 , offScreen: -10}
                }
            }
            break;
        case 'userBack':
            placement = {
                scale: [.2,.2,.2],
                position: [1.25,-1.5,3],
                position: [width/6.5,-1.5,3],
                rotation: [Math.PI / 2,Math.PI,.2]
            }
            break;
        default: //user, nothing
    }

    return placement;
}

export default dynamicXYZ;

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