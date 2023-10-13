import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./scss/main.scss";
import "@fontsource-variable/mulish";
import Home from "./pages/Home";

const routes = [
  { path: "/", element: <Home /> },
  { path: "*", element: <h1>Not found</h1> },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
