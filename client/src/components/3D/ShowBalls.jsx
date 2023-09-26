import React, { Suspense, useState, useEffect, useRef } from 'react';
import {balls} from '../../portfolioData/markAnthonyBalls';
import { useTexture } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { AppContext } from '../../storeManagement/AppContext';

function ShowBalls() {

    const [placement,setPlacement] = useState({});
    const canvasRef = useRef();

    const setBall = () => {

        // TODO: why does this keep re-rendering console.log('re-running')
        const rect = document.getElementById('titleMarker').getBoundingClientRect();

        setPlacement({
            position: `fixed`,
            top: `${rect.top - 50}px`,
            left: `${rect.left - 150}px`,
        })
    }

    useEffect(() => {
        setBall();
        window.addEventListener('resize', setBall);

        return () => {
            window.removeEventListener('resize', setBall);
        }
    }, []);

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
        <div className='balls3D' style={placement}>
        <Canvas>
            <ambientLight intensity={1.8}/>
            <pointLight intensity={15} position={[-1,2,4]}/>
            <Suspense fallback={null}>
                <>
                    {showBalls}
                </>
            </Suspense>
        </Canvas>
        </div>
    )
}

export default ShowBalls;