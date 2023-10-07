import { Text } from "@react-three/drei"

const Bio = ({position, rotation}) => <>
    <Text
        font="/assets/fonts/AutourOne-Regular.ttf"
        fontSize={0.3}
        color={"white"}
        maxWidth={2}
        textAlign="center"
        position={position}
        rotation={rotation}
    >
        Hello there! I am Paul Rojas, I'm 20 years old and I love computation.
    </Text>
</>

export default Bio; 