import { ChevronRightCircle, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ContactBurgerMenu() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleBurgerClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("open"))
    setSidebarOpen();
  };
  return (
    <>
      <button onClick={handleBurgerClick} className="contact-burger-button">
        <Menu />
      </button>
      <div
        onClick={handleBackgroundClick}
        className={`${sidebarOpen ? "open" : "closed"} contact-sidebar`}
      >
        <div className="content">
          <h2>Contact us</h2>
          <div>
            <Link>
              <img src="" alt="" />
              <p>27 Division St, New York NY 10002, USA </p>
            </Link>
          </div>

          <div>
            <Link>
              <img src="" alt="" />
              <p>manerosale@mail.com </p>
              <p>manerosupport@mail.com </p>
            </Link>
          </div>

          <div>
            <Link>
              <img src="" alt="" />
              <p>+17 123456789</p>
              <p>+17 987654321</p>
            </Link>
          </div>

          <div>
            <h6>Track your order</h6>
            <input type="text" placeholder="Enter your order number" />
            <button type="submit">
              <ChevronRightCircle />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactBurgerMenu;
