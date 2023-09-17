import { OrbitControls, useTexture, Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"
import { useRef } from 'react';
import Insect from "./Insect";
import Lights from "./Lights";
import Pole from "./Pole";
import { PointLightHelper } from "three";

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
        <Lights/>

        
            <spotLight 
                castShadow
                position={[0, 4, -2]}
                angle={Math.PI / 12}
                intensity={1000}
                penumbra={1}
                distance={8}
            />  
        <pointLight position={[-4,1,-4]} intensity={50} color={"blue"} />
            <pointLight position={[4,1,-4]} intensity={50} color={"red"} />

            <Environment preset="sunset" background={true}/>

        <mesh castShadow ref={boxRef} position={[-6,0,-6]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial {...propsTexture}/>
        </mesh>
        <mesh castShadow ref={sphereRef} position={[6, 0, 6]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshToonMaterial color="blue" />
        </mesh>
        <mesh castShadow ref={coneRef} position={[-6, 0, 6]}>
            <coneGeometry args={[1, 2, 16, 8]} />
            <meshNormalMaterial color="green" />
        </mesh>
        <mesh castShadow ref={torusRef} position={[6, 0, -6]}>
            <torusGeometry/>
            <meshPhongMaterial color="purple" />

        </mesh>
        <Insect/>
        <Pole/>
        <mesh rotation-x={-Math.PI*0.5} position-y={-2} receiveShadow>
            <planeGeometry args={[20, 20]}/>
            <meshStandardMaterial color="green" />
        </mesh>

        <ambientLight intensity={0.5} />
        <directionalLight 
            castShadow
            position={[7, 7, -7]} 
            intensity={1} 
            shadow-mapSize={[128, 128]}
            shadow-camera-far={12}
            shadow-camera-left={-15}
            shadow-camera-right={15}
            shadow-camera-top={15}
            shadow-camera-bottom={-15}
            target-position={torusRef.position}
                
        />
        <directionalLight     
            castShadow
            position={[-7, 7, -7]} 
            intensity={1} 
            shadow-mapSize={[128, 128]}
            shadow-camera-far={12}
            shadow-camera-left={-15}
            shadow-camera-right={15}
            shadow-camera-top={15}
            shadow-camera-bottom={-15}
            target-position={boxRef.position}
                
        />
        <directionalLight     
            castShadow
            position={[7, 7, 7]} 
            intensity={1} 
            shadow-mapSize={[128, 128]}
            shadow-camera-far={12}
            shadow-camera-left={-15}
            shadow-camera-right={15}
            shadow-camera-top={15}
            shadow-camera-bottom={-15}
            target-position={boxRef.position}
                
        />
        <directionalLight     
            castShadow
            position={[-7, 7, 7]} 
            intensity={1} 
            shadow-mapSize={[128, 128]}
            shadow-camera-far={12}
            shadow-camera-left={-15}
            shadow-camera-right={15}
            shadow-camera-top={15}
            shadow-camera-bottom={-15}
            target-position={boxRef.position}
                
        />
        
</>
}

export default Experience;