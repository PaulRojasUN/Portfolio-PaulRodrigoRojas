import Floor from "./items/Floor"
import House from "./items/House";
import {Physics, RigidBody} from "@react-three/rapier";
import { useRef, useState, useEffect } from "react";
import CustomText2D from "./items/CustomText2D";

const Island2 = () => {
    const ballBodyRef = useRef();

    const [play, setPlay] = useState(false)
    const [hitSound] = useState(()=>new Audio("assets/sounds/hit.wav"))
    


    const onHandleSphere = () => {
        ballBodyRef.current.applyImpulse({
            x:0,
            y:3,
            z:0
        }, true)

        // ballBodyRef.current.addForce({
        //     x: 0,
        //     y: 0,
        //     z: 0
        // }, true)
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

export default Island2;