import { hydrate } from "react-dom";
import App from "./app";
declare global {
    interface Window {
        gists:any;
    }
}

hydrate(<App gists={window.gists}/>, document.getElementById("root"));
