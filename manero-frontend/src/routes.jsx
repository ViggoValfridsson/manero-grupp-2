import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Order from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import Products from "./pages/Products";
import OrderConfirmation from "./pages/OrderConfirmation";
import ShippingDetails from "./pages/ShippingDetails";

// If no title is set, the manero logo will show instead
const routes = [
  { path: "/", element: <Home /> },
  { path: "/search", element: <Search /> },
  { path: "/cart", element: <Cart /> },
  { path: "/products", element: <Products />, title: "Products" },
  { path: "/products/:id", element: <ProductDetails /> },
  { path: "/checkout", element: <Order />, title: "Checkout" },
  { path: "/checkout/shipping", element: <ShippingDetails />, title: "Shipping" },
  {
    path: "/checkout/order-confirmation",
    element: <OrderConfirmation />,
    title: "Order Confirmation",
  },
  { path: "*", element: <NotFound />, title: "Not Found" },
];

export default routes;
