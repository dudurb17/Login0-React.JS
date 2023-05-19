import { createRoot } from "react-dom/client";
import App from "./app";

const root = createRoot(document.querySelector("#root")); //pegando o id no index
root.render(<App />);
