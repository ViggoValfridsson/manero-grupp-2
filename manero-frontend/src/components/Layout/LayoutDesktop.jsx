import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ContactBurgerMenu from "./ContactBurgerMenu";

function LayoutDesktop() {
  return (
    <div className="layout layout-desktop">
      <header className="header desktop-header">
        <Link>
          <img className="logo" src="/images/manero-logo-desktop.svg" alt="" />
        </Link>
        <Navbar />
        <ContactBurgerMenu />
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default LayoutDesktop;
