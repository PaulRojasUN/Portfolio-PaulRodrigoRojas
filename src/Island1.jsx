
import { OrbitControls, useTexture, Float} from "@react-three/drei";
import Environments from "./items/Environments";
import { useFrame } from "@react-three/fiber"
import { useRef, useState} from 'react';
import Insect from "./items/Insect";
import Lights from "./items/Lights";
import Pole from "./items/Pole";
import Floor from "./items/Floor";
import Bio from "./items/Bio";

import "./styles.css";
import CustomText2D from "./items/CustomText2D";
import CustomText3D from "./items/CustomText3D";


const Island1 = () => {
    const [bioOn, setBioOn] = useState(false);

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
        {/* <OrbitControls makeDefault/> */}
        <Lights/>
        <Environments/>

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

        <Insect onClick={()=>setBioOn(!bioOn)}/>
        <Pole position={[0, -2, 1 ]} />
        <Floor />

        <mesh position-y={-2.50} rotation-x={Math.PI / 2}>
            <planeGeometry
                args={[20, 20]}
            />
            <meshStandardMaterial color="orange"/>
        </mesh>
        <Float
            speed={2}
            rotationIntensity={1.5}
            floatIntensity={1.5}
        >

            <CustomText3D text={"Welcome"} position={[2, 2, 0]} rotation={[0, 0, 0]} size={0.8}/>    
            {/* <CustomText2D color={"blue"} text={"Welcome"} />    */}
            <CustomText2D color={"cyan"} text={"Click the bug!"} position={[5, 1, 0]} size={0.5}/> 

           
        </Float>
        {bioOn ? <Bio position={[-4, 2.5, 4]} rotation={[0, Math.PI/4, 0]}/> : <></>}
</>
}

export default Island1;