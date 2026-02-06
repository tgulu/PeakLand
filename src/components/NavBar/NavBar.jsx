import { useState, useRef, useLayoutEffect } from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const links = ["Home", "About", "Service", "Testimonial", "Contact"];
  const [activeIndex, setActiveIndex] = useState(0);

  const linkRefs = useRef([]);
  const bubbleRef = useRef(null);

  useLayoutEffect(() => {
    const activeLink = linkRefs.current[activeIndex];
    const bubble = bubbleRef.current;

    if (!activeLink || !bubble) return;

    bubble.style.transform = `translateX(${activeLink.offsetLeft}px)`;
    bubble.style.width = `${activeLink.offsetWidth}px`;
  }, [activeIndex]);

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar_inner}>
        <div className={styles.navbar_brand}>Peakland</div>

        <nav className={styles.navbar_nav}>
          <div ref={bubbleRef} className={styles.navbar_bubble_active} />

          {links.map((label, index) => (
            <button
              key={label}
              ref={(el) => (linkRefs.current[index] = el)}
              className={
                index === activeIndex
                  ? styles.navbar_link_active
                  : styles.navbar_link
              }
              onClick={() => setActiveIndex(index)}
            >
              {label}
            </button>
          ))}
        </nav>

        <button className={styles.navbar_cta}>Contact Us</button>
      </div>
    </header>
  );
};

export default NavBar;
