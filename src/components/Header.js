import Logo from "../assets/img/RadhaKrishna Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const TitleComponent = () => (
  <Link to="/">
    <img className="logo" alt="logo" src={Logo} />
  </Link>
);

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <TitleComponent />
      <div className="nav-items">
        <ul>
          <li>OnlineStatus: {onlineStatus ? "✅" : "🔴"}</li>
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
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className="login-btn" onClick={() => setIsLoggedIn(false)}>
          Login
        </button>
      ) : (
        <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
          Logout
        </button>
      )}
    </div>
  );
};

export default HeaderComponent;
