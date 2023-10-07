import { useTexture } from "@react-three/drei";
import { RepeatWrapping, Vector2 } from "three";

const Floor = () => {
    const PATH = "/assets/textures/sand/";

    const propsTexture = useTexture({
        map: PATH + 'aerial_beach_02_diff_1k.jpg',
        displacementMap: PATH + 'aerial_beach_02_disp_1k.png',
    })

    return (
        <mesh position-y={-2.40} rotation-x={-Math.PI / 2} receiveShadow >
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