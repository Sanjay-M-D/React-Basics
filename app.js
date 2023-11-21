import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => (
  <h1 id="title" key="h1">
    Namaste Everyone...!
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      <TitleComponent />
      <h2>Namaste React Header Component</h2>
      <h2>h2 tags </h2>
    </div>
  );
};

const container = React.createElement("div", { id: "container" });

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
