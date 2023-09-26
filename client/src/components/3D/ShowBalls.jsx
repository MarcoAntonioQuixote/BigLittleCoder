import React, { useRef } from 'react';
import {balls} from '../../portfolioData/markAnthonyBalls';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function ShowBalls() {

    function Ball({ball}) {
        const ref = useRef();
        const map = useTexture(ball.image);
        useFrame(({ clock }) => {
            ref.current.rotation.x += 0.01;
            ref.current.rotation.y += 0.01;
        })
      
        return (
            <mesh ref={ref} scale={[2.8,2.8,2.8]} rotation={ball.rotation} position={ball.position} >
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

export default ShowBalls;