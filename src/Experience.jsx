import { OrbitControls, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"
import { useRef } from 'react';
import Insect from "./Insect";

import "./styles.css";

const Experience = () => {

    const boxRef = useRef();

    const sphereRef = useRef();

    const coneRef = useRef();

    const torusRef = useRef();

    const propsTexture = useTexture({
        map: './assets/textures/pavement/pavement_02_diff_4k.jpg',
    });

    useFrame((state, delta) => {
        boxRef.current.rotation.x += 1*delta;
        torusRef.current.rotation.y += 1*delta;
        sphereRef.current.position.y = Math.cos(state.clock.getElapsedTime());
        coneRef.current.position.y = Math.sin(state.clock.getElapsedTime());
    });

    return <>
        <OrbitControls makeDefault/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <mesh ref={boxRef} position={[-6,0,-6]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial {...propsTexture}/>
        </mesh>
        <mesh ref={sphereRef} position={[6, 0, 6]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshToonMaterial color="blue" />
        </mesh>
        <mesh ref={coneRef} position={[-6, 0, 6]}>
            <coneGeometry args={[1, 2, 16, 8]} />
            <meshNormalMaterial color="green" />
        </mesh>
        <mesh ref={torusRef} position={[6, 0, -6]}>
            <torusGeometry/>
            <meshPhongMaterial color="purple" />

        </mesh>
        <mesh rotation-x={-Math.PI*0.5} position-y={-2}>
            <planeGeometry args={[20, 20]}/>
            <meshPhongMaterial color="green" />
        </mesh>
        <Insect/>
</>
}

export default Experience;