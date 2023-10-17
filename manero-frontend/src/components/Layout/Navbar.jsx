import { Home, Search, ShoppingBag, Heart, User } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <Home />
        <span className="nav-link-text">Home</span>
      </NavLink>
      <NavLink to="/search">
        <Search />
        <span className="nav-link-text">Search</span>
      </NavLink>
      <NavLink>
        <ShoppingBag />
        <span className="nav-link-text">Cart</span>
      </NavLink>
      <NavLink>
        <Heart />
        <span className="nav-link-text">Wishlist</span>
      </NavLink>
      <NavLink>
        <User />
        <span className="nav-link-text">Profile</span>
      </NavLink>
    </nav>
  );
}

export default Navbar;
