import { createRoot} from "react-dom/client";
import App from './App';
import Info from "./Info";

const root = createRoot(document.getElementById('root'));

root.render(
    <>
        <Info
            name="Paul Rodrigo Rojas Guerrero"
            biography=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue dolor ut massa tincidunt, cursus ullamcorper tortor mollis. Nullam condimentum eget turpis vitae sagittis. Vestibulum nec dapibus augue. Morbi sit amet aliquam metus. Quisque pretium maximus diam, at vehicula justo volutpat non. Phasellus luctus magna fringilla ipsum placerat imperdiet. Aenean nec purus vitae purus congue dictum. Proin sit amet tincidunt nisl. Nunc nec diam blandit, ornare sem non, aliquam neque. Donec hendrerit, felis vel iaculis auctor, justo arcu molestie turpis, eget sagittis nulla nulla in augue. Nullam mollis metus efficitur, sodales erat et, tincidunt mauris. Nullam tempus gravida ante nec consequat."
        />
        <App/>
    </>
);


