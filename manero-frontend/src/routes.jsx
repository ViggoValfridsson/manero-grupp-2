import Home from "./pages/Home";

const routes = [
  { path: "/", element: <Home /> },
  { path: "*", element: <h1>Not found</h1> },
];

export default routes;
