import React from 'react';
import {balls} from '../../portfolioData/markAnthonyBalls';
import { useTexture } from '@react-three/drei';
import { randomNum } from '../../utilities/mathFunctions';

function ShowBalls() {

    function Ball({ball}) {
        const map = useTexture(ball.image);

        // let position = [];

        // for(let x = 0; x < 2; x++) {
        //     position.push(randomNum(-2,2));
        // }
        // position.push(0);
      
        return (
            <mesh scale={[.5,.5,.5]} rotation={ball.rotation} position={ball.position} >
                <sphereGeometry args={[1,32,32]} />
                <meshStandardMaterial map={map} />
            </mesh>
        )
    }

    const showBalls = balls.map((b,i) => <Ball key={i} ball={b} />)

    return (
        <>
            {showBalls}
        </>
    )
}

export default ShowBalls