import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./Nav.module.css";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const navLinks = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
    { label: "Contact", url: "/contact" },
  ];

  // const { theme, toggleTheme } = useContext(ThemeContext);

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <header className={styles.header}>
      {/* =========================
          Header top row
         ========================= */}

      <div className={styles.header_container}>
        <h1 className={styles.header_title}>PeakLand</h1>

        {/* =========================
            Desktop navigation
           ========================= */}

        <nav className={styles.header_nav}>
          {navLinks.map((navLink) => (
            <NavLink
              key={navLink.url}
              to={navLink.url}
              className={({ isActive }) =>
                isActive
                  ? styles.header_link_active
                  : styles.header_link_inactive
              }
            >
              {navLink.label}
            </NavLink>
          ))}
        </nav>

        {/* =========================
            Mobile menu toggle
           ========================= */}

        <button onClick={toggleMenu} className={styles.header_mobileMenu}>
          {isActive ? <X /> : <Menu />}
        </button>
      </div>

      {/* =========================
          Mobile navigation
         ========================= */}

      {isActive && (
        <nav className={styles.header_mobileNav}>
          {navLinks.map((navLink) => (
            <NavLink
              key={navLink.url}
              to={navLink.url}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? styles.header_link_active
                  : styles.header_link_inactive
              }
            >
              {navLink.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Nav;
