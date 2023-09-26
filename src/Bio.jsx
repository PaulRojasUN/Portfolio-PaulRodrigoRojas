import { Text } from "@react-three/drei"

const Bio = ({position}) => <>
    <Text
        fontSize={0.3}
        color={"blue"}
        position-y={3}
        maxWidth={2}
        textAlign="center"
        position={position}
    >
        Hello there! I am Paul Rojas, I'm 20 years old and I love computation.
    </Text>
</>

export default Bio; 