import { Link, Outlet, useLocation } from "react-router-dom";
import ContactBurgerMenu from "./ContactBurgerMenu";
import { ChevronLeft, ShoppingBag } from "lucide-react";
import Navbar from "./Navbar";

const navbarRoutes = ["/", "/search", "/cart", "/wishlist", "/profile"];

function LayoutMobile() {
  const location = useLocation();
  return (
    <div className="layout layout-mobile">
      <header className="header mobile-header">
        {navbarRoutes.includes(location.pathname) ? (
          <>
            <ContactBurgerMenu />
            <Link to="/">
              <img className="logo" src="/images/manero-logo-mobile.svg" alt="" />
            </Link>
          </>
        ) : (
          <>
            <ChevronLeft />
            <h1>{location.pathname}</h1>
          </>
        )}
        <Link to="/cart">
          <ShoppingBag />
        </Link>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>
        <Navbar />
      </footer>
    </div>
  );
}

export default LayoutMobile;
