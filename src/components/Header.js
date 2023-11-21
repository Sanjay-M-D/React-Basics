export const TitleComponent = () => (
  <a href="/">
    <img className="logo" alt="logo" />
  </a>
);

const HeaderComponent = () => {
  return (
    <div className="header">
      <TitleComponent />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
