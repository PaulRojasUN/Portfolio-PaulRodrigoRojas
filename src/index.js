import { createRoot} from "react-dom/client";
import Experience from './Experience';
import { Canvas } from '@react-three/fiber';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
    <>
       <App/>
    </>
);

