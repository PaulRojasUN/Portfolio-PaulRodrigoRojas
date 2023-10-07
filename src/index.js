import { createRoot} from "react-dom/client";
import App from './App';
import Info from "./items/Info";

const root = createRoot(document.getElementById('root'));

root.render(
    <>
        <Info
            name="Paul Rodrigo Rojas Guerrero"
            biography="Software engineering student."
        />
        <App/>
    </>
);


