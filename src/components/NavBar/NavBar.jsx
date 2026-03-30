import { useState, useRef, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const linkRefs = useRef([]);
  const bubbleRef = useRef(null);

  const getActiveIndex = () => {
    const index = navLinks.findIndex((link) => {
      if (link.path === "/") {
        return location.pathname === "/";
      }

      return location.pathname.startsWith(link.path);
    });

    return index === -1 ? 0 : index;
  };

  const activeIndex = getActiveIndex();

  useLayoutEffect(() => {
    const activeLink = linkRefs.current[activeIndex];
    const bubble = bubbleRef.current;

    if (!activeLink || !bubble) return;

    bubble.style.transform = `translateX(${activeLink.offsetLeft}px)`;
    bubble.style.width = `${activeLink.offsetWidth}px`;
  }, [activeIndex, location.pathname]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Link to="/" className={styles.brand} onClick={closeMobileMenu}>
            <div className={styles.brandIcon}>
              <span>PL</span>
            </div>

            <div className={styles.brandText}>
              <div className={styles.brandTitle}>Peakland</div>
              <div className={styles.brandSubtitle}>Cleaning Services</div>
            </div>
          </Link>

          <nav className={styles.desktopNav}>
            <div ref={bubbleRef} className={styles.bubble} />

            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                ref={(el) => {
                  linkRefs.current[index] = el;
                }}
                className={
                  index === activeIndex ? styles.navLinkActive : styles.navLink
                }
              >
                {link.label}
              </Link>
            ))}

            <a href="tel:+447584134225" className={styles.cta}>
              <Phone size={16} />
              <span>07584 134225</span>
            </a>
          </nav>

          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            type="button"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className={styles.mobileNav}>
            {navLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={
                    isActive ? styles.mobileNavLinkActive : styles.mobileNavLink
                  }
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href="tel:+447584134225"
              className={styles.mobileCta}
              onClick={closeMobileMenu}
            >
              <Phone size={16} />
              <span>07584 134225</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
