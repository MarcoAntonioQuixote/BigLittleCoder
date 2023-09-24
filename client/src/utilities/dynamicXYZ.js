import { rotateOnWidth } from "./mathFunctions";


function dynamicXYZ(type,width,height) {

    let placement = {
        start: {
            scale: [.5,.5,.5],
            position: [0,-1,0],
        },
        end: {
            scale: [.5,.5,.5],
            position: [0,-1,0],
        }
    }

    let pi = Math.PI;
    let rValue = rotateOnWidth(width);

    switch(type) {
        case 'speaker':
            // natural end pos (sin trans): [-width/1.5,0,-3]
            placement.start = {
                scale: [.2,.2,.2],
                position: [-10,0,-3], 
                rotation: [pi/2, pi, rValue],
            }
            placement.end = {
                scale: [.2,.2,.2],
                position: [-width/1.5,0,-3],
                rotation: [pi/2, pi, rValue],
            }
            break;
        case 'userBack':
            placement.start = {
                scale: [.2,.2,.2],
                position: [width/6.5,-1.5,3],
                rotation: [pi / 2, pi,.2]
            }
            placement.end = {
                scale: [.2,.2,.2],
                position: [width/6.5,-1.5,3],
                rotation: [pi / 2, pi,.2]
            }
            break;
        default: //user, nothing
    }

    // if (type === 'speaker') {
    //     console.log('width', width, placement.start,placement.end);
    // }

    return placement;
}

export default dynamicXYZ;
