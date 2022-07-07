/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { Router } from "solid-app-router";
import { MyContextProvider } from "./context/context";

render(
  () => (
    <MyContextProvider count={0}>
      <Router>
        <App />
      </Router>
    </MyContextProvider>
  ),
  document.getElementById("root")
);
