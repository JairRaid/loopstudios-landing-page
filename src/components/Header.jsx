import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  function handleClickMenu() {
    setMenu((prevMenu) => !prevMenu);
  }

  if (menu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <header>
      <nav>
        <h1>
          <img src="images/logo.svg" alt="loopstudio logo" />
        </h1>
        <ul className={menu ? "isActive" : ""}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#careers">Careers</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#support">Support</a>
          </li>
        </ul>
        <div className="menu">
          {menu ? (
            <img
              src="images/icon-close.svg"
              alt="close icon"
              onClick={handleClickMenu}
            />
          ) : (
            <img
              src="images/icon-hamburger.svg"
              alt="hamburger icon"
              onClick={handleClickMenu}
            />
          )}
        </div>
      </nav>
      <div className="group1">
        <section>
          <h2>Immersive Experiences That Deliver</h2>
        </section>
      </div>
    </header>
  );
}
