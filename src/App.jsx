import styles from "./App.module.css";
import { useRoutes } from "solid-app-router";
import { Navbar } from "./components/Navbar/Navbar";
import { Suspense } from "solid-js";
import { routes } from "./routes";

function App() {
  const Routes = useRoutes(routes);
  return (
    <div class={styles.App}>
      <Navbar />
      <Suspense>
        <Routes />
      </Suspense>
    </div>
  );
}

export default App;
