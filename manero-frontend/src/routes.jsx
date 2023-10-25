import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Order from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import Products from "./pages/Products";

const routes = [
  { path: "/", element: <Home />, title: null },
  { path: "/search", element: <Search />, title: null },
  { path: "/cart", element: <Cart />, title: null },
  { path: "/products", element: <Products />, title: "Products" },
  { path: "/products/:id", element: <ProductDetails />, title: null },
  { path: "/checkout", element: <Order />, title: "Checkout" },
  { path: "*", element: <h1>Not found</h1>, title: "Not Found" },
];

export default routes;
