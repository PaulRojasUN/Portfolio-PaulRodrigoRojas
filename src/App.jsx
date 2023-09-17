
import Experience from './Experience';
import { Canvas } from '@react-three/fiber';

const App = () => {
    return <>
        <Canvas
            camera={{position:[5, 5, 10]}}
            shadows
        >
            <Experience/>
        </Canvas>
    </>
}

export default App;