import { createRoot } from "react-dom/client"
import App from "./App"
import '@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/index.css';

import "./index.css"

const root = createRoot(document.getElementById("root"))
root.render(<App />)
