import { useTexture } from "@react-three/drei";

const Floor = ({position}) => {
    const PATH = "/assets/textures/sand/";

    const propsTexture = useTexture({
        map: PATH + 'aerial_beach_02_diff_1k.jpg',
        displacementMap: PATH + 'aerial_beach_02_disp_1k.png',
    })

    return (
        <mesh position={position} rotation-x={-Math.PI / 2} receiveShadow >
            <planeGeometry
                args={[20, 20, 10,10]}
            />
            <meshStandardMaterial
                {...propsTexture}
            />
        </mesh>
    );
}
export default Floor;