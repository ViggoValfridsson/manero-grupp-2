import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./scss/main.scss";
import "@fontsource-variable/mulish";
import useWindowResize from "./hooks/useWindowResize";
import { useState } from "react";
import LayoutMobile from "./components/Layout/LayoutMobile";
import LayoutDesktop from "./components/Layout/LayoutDesktop";
import routes from "./routes";

// Added a global state for mobile/desktop

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useWindowResize(() => {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isMobile ? <LayoutMobile /> : <LayoutDesktop />}>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
