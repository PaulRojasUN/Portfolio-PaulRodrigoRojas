import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"
import { useRef } from 'react';

import "./styles.css";

const Experience = () => {

    const boxRef = useRef();

    useFrame((state, delta) => {
        boxRef.current.rotation.x += 1*delta;
    });

    const sphereRef = useRef();

    useFrame((state, delta) => {
        sphereRef.current.rotation.x += 1*delta;
    });

    const coneRef = useRef();

    useFrame((state, delta) => {
        coneRef.current.rotation.x += 1*delta;
    });


    return <>
        <OrbitControls makeDefault/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <mesh ref={boxRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="yellow" />
        </mesh>
        <mesh ref={sphereRef} position={[4, 0, 0]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshToonMaterial color="blue" />
        </mesh>
        <mesh ref={coneRef} position={[-4, 0, 0]}>
            <coneGeometry args={[1, 2, 16, 8]} />
            <meshNormalMaterial color="green" />
        </mesh>
</>
}

export default Experience;