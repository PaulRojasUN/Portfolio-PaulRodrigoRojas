import {useTexture, Float} from "@react-three/drei";
import Environments from "./items/Environments";
import { useFrame } from "@react-three/fiber"
import { useRef, useState, useEffect} from 'react';
import Insect from "./items/Insect";
import Lights from "./items/Lights";
import Pole from "./items/Pole";
import Floor from "./items/Floor";

import "./styles.css";
import CustomText2D from "./items/CustomText2D";
import CustomText3D from "./items/CustomText3D";
import UVLogo from "./items/UVLogo";

import { MathUtils } from "three";

import House from "./items/House";
import {Physics, RigidBody} from "@react-three/rapier";

const Experience = () => {
    const [island2Focus, setIsland2Focus] = useState(false);

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

    useFrame((state) => {
        state.camera.position.x = MathUtils.lerp(state.camera.position.x, island2Focus ? 40: 5, 0.1)
        state.camera.position.y = MathUtils.lerp(state.camera.position.y, island2Focus ? 8 : 5, 0.1)
        state.camera.position.z = MathUtils.lerp(state.camera.position.z, island2Focus ? 44 : 10, 0.1)  

    });



    const ballBodyRef = useRef();

    const [play, setPlay] = useState(false)
    const [hitSound] = useState(()=>new Audio("assets/sounds/hit.wav"))


    const onHandleSphere = () => {
        ballBodyRef.current.applyImpulse({
            x:0,
            y:3,
            z:0
        }, true)

    }

    useEffect(()=>{
        ballBodyRef.current.sleep()
    }, [])


    useEffect(()=>{
        if(play){
            hitSound.currentTime = 0;
            hitSound.volume = Math.random();
            hitSound.play();
        }
    }, [play])

    return <>

    <Lights/>
        <Environments/>

        <mesh position={[0,-11.5,10]}>
            <planeGeometry
                args={[20, 20]}
            />
            <meshStandardMaterial color="orange"/>
        </mesh>
        <mesh position={[10,-11.5,1]} rotation-y={Math.PI/2}>
            <planeGeometry
                args={[20, 20]}
            />
            <meshStandardMaterial color="orange"/>
        </mesh>

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

        <UVLogo position={[26, 3, 34]} rotation={[0,3*Math.PI/4, 0]} onClick={()=>{setIsland2Focus(!island2Focus)}}/>
        <Insect onClick={()=>{setIsland2Focus(!island2Focus)}}/>
        <Pole position={[0, -2, 1 ]} />
        <Floor position={[0, -2.40,0]}/>

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
            <CustomText2D color={"cyan"} text={"Click the bug!"} position={[5, 1, 0]} size={0.5}/> 
        </Float>

        

        <mesh position={[30, -9.5 , 40]} >
            <planeGeometry
                args={[20, 20]}
            />
            <meshStandardMaterial color="orange"/>
        </mesh>
        <mesh position={[40, -9.5 , 30]} rotation-y={Math.PI/2  }>
            <planeGeometry
                args={[20, 20]}
            />
            <meshStandardMaterial color="orange"/>
        </mesh>
        <CustomText2D color={"black"} text={"About Me"} position={[35, 9.5 , 32]} size={0.8} rotation={[0, Math.PI/4, 0]}/> 
        <CustomText2D color={"black"} text={"I am Paul Rojas, I'm 20 years old and I love computation."} position={[35, 8.5, 32]} size={0.4} rotation={[0, Math.PI/4, 0]} /> 
        <CustomText2D color={"white"} text={" <-- Click the ball!"} position={[35, 7, 32]} size={0.4} rotation={[0, Math.PI/4, 0]} /> 
        <CustomText2D color={"white"} text={"Click the UV logo! --> "} position={[27, 5, 40]} size={0.4} rotation={[0, Math.PI/4, 0]} /> 
        <Physics>
            <RigidBody
                type={"fixed"}
                colliders={"trimesh"} 
                friction={0.7}
                restitution={1}
            >
                <House position={[32, 1, 32 ]} rotation-y={-Math.PI/2}/>
            </RigidBody>

            <RigidBody>
                <Floor position={[30,0, 30]}/>
            </RigidBody>
            <RigidBody 
                ref={ballBodyRef}
                colliders={"ball"} 
                position={[10, 4, -5]} 
                friction={0} 
                restitution={0}
                onCollisionEnter={()=>setPlay(true)}
                onCollisionExit={()=>setPlay(false)}
                >
                <mesh scale={0.5} position={[22, 3 , 37 ]} onClick={onHandleSphere} >
                    <sphereGeometry />
                    <meshStandardMaterial color="cyan" />
                </mesh>
            </RigidBody>
        </Physics>
    </>
}

export default Experience;
