import Home from "./pages/Home";
import Search from "./pages/products/Search";
import SignIn from "./pages/profile/SignIn";
import SignUp from "./pages/profile/SignUp";
import Profile from "./pages/profile/Profile";
import ForgotPassword from "./pages/profile/ForgotPassword";
import ResetPassword from "./pages/profile/ResetPassword";
import PasswordConfirmation from "./pages/profile/PasswordConfirmation";
import AccountCreated from "./pages/profile/AccountCreated";
import Cart from "./pages/order/Cart";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/products/ProductDetails";
import ShippingDetails from "./pages/order/ShippingDetails";
import WishList from "./pages/products/WishList";
import OrderConfirmation from "./pages/order/OrderConfirmation";
import AddPaymentCard from "./pages/order/AddPaymentCard";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/order/Checkout";

// If no title is set, the manero logo will show instead
const routes = [
  { path: "*", element: <NotFound />, title: "Not Found" },
  { path: "/", element: <Home /> },
  { path: "/search", element: <Search /> },
  { path: "/cart", element: <Cart /> },
  { path: "/wishlist", element: <WishList /> },
  { path: "/signin", element: <SignIn />, title: "Sign in" },
  { path: "/signup", element: <SignUp />, title: "Sign up" },
  { path: "/profile", element: <Profile />, title: "Profile" },
  { path: "/forgot-password", element: <ForgotPassword />, title: "Forgot Password" },
  { path: "/reset-password", element: <ResetPassword />, title: "Reset Password" },
  { path: "/password-confirmation", element: <PasswordConfirmation /> },
  { path: "/account-confirmation", element: <AccountCreated /> },
  { path: "/products", element: <Products />, title: "Products" },
  { path: "/products/:id", element: <ProductDetails /> },
  { path: "/checkout", element: <Checkout />, title: "Checkout" },
  { path: "/checkout/shipping", element: <ShippingDetails />, title: "Shipping" },
  {
    path: "/checkout/order-confirmation",
    element: <OrderConfirmation />,
    title: "Order Confirmation",
  },
  { path: "/checkout/add-card", element: <AddPaymentCard />, title: "Add new a card" },
];

export default routes;
