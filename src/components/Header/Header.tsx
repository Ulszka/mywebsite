import { useState } from "react";
import { BrowserRouter as Route, NavLink } from "react-router-dom";
import CloseMenu from "../../assets/x.svg?react";
import MenuIcon from "../../assets/menu.svg?react";
import RouterConfig from "../../RouterConfig";
import logo from "../../assets/logo/favicon.png"
import "./Header.scss";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Work experience" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar-wrapper">
      <div className="header">
        <div className="desktop">
          <div className="logo-container">
            <NavLink to="/" id="logo">
              <img src={logo} alt="logo" className="logo"/>
            </NavLink>
          </div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            {navLinks.map(({ to, label }) => (
              <li className="option" onClick={closeMobileMenu} key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    isActive ? "active-link" : undefined
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
