import Logo from "../assets/img/RadhaKrishna Logo.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const TitleComponent = () => (
  <Link to="/">
    <img className="w-44" alt="logo" src={Logo} />
  </Link>
);

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between shadow-lg px-2 ">
      <TitleComponent />
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          {isLoggedIn ? (
            <button className="login-btn" onClick={() => setIsLoggedIn(false)}>
              Login
            </button>
          ) : (
            <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
              Logout
            </button>
          )}
          <li className="px-4">OnlineStatus: {onlineStatus ? "✅" : "🔴"}</li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
