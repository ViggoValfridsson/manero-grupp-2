import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Order from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import Products from "./pages/Products";
import OrderConfirmation from "./pages/OrderConfirmation";
import ShippingDetails from "./pages/ShippingDetails";
import AddPaymentCard from "./pages/AddPaymentCard";

// If no title is set, the manero logo will show instead
const routes = [
  { path: "/", element: <Home /> },
  { path: "/search", element: <Search /> },
  { path: "/signin", element: <SignIn />, title: "Sign in" },
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
  { path: "/checkout/add-card", element: <AddPaymentCard />, title: "Add new a card" },
  { path: "*", element: <NotFound />, title: "Not Found" },
];

export default routes;
