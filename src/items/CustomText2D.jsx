import {Text} from "@react-three/drei";

const CustomText2D = ({text, color, position, size, rotation}) => <>
    <Text 
        font="/assets/fonts/AutourOne-Regular.ttf"
        color={color}
        position={position}
        fontSize={size}
        rotation={rotation}
    >
    {text}
    </Text>
    </>

export default CustomText2D;