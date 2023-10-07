import { Text3D } from "@react-three/drei";

const CustomText3D = ({text, position, rotation, size}) => <>
    <Text3D
       font="/assets/fonts/Autour_One_Regular.json"
       position={position}   
       rotation={rotation}
       size={size}
    >
       {text}
       <meshLambertMaterial color={"purple"} />
     </Text3D>
    </>

export default CustomText3D;
