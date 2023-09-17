/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf 
Author: Arkikon (https://sketchfab.com/ragnar)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/light-pole-4d3388e65a324342b6a13b1bff16b3ed
Title: Light Pole
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Pole(props) {
  const { nodes, materials } = useGLTF('/assets/models/pole/scene.gltf')
  return (
    <group {...props} dispose={null} scale={0.02} position={[-2, -2 , 0]}  rotation-y={Math.PI/2} castShadow>
      <mesh geometry={nodes.LightPole_LightPoleMAT_0.geometry} material={materials.LightPoleMAT} />
      <mesh geometry={nodes.LightPole_Flame_0.geometry} material={materials.Flame} />
    </group>
  )
}

export default Pole;
useGLTF.preload('/assets/models/pole/scene.gltf')