import {Text} from "@react-three/drei";

const CustomText2D = ({text, color, position, size}) => <>
    <Text 
        color={color}
        position={position}
        fontSize={size}
    >
    {text}
    </Text>
    </>

export default CustomText2D;