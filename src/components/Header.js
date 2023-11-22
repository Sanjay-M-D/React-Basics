import Logo from "../assets/img/RadhaKrishna Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export const TitleComponent = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
);

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <TitleComponent />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Login</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Logout</button>
      )}
    </div>
  );
};

export default HeaderComponent;
