const Lights = () => {
    return <>
        <ambientLight intensity={0.5} />
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
        <directionalLight     
            castShadow
            position={[0, 2, -5]} 
            intensity={3} 
            shadow-mapSize={[256, 256]}
            shadow-camera-far={20}
            shadow-camera-left={-15}
            shadow-camera-right={15}
            shadow-camera-top={15}
            shadow-camera-bottom={-15}
                
        />
    </>
    }

export default Lights;