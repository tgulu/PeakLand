import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const titleTranslate = Math.min(scrollY * 0.25, 60);
  const bgTranslate = Math.min(scrollY * 0.4, 80);

  return (
    <section id="Home">
      <div className={styles.hero__container}>
        <div
          className={styles.hero__background}
          style={{ transform: `translateY(${bgTranslate}px)` }}
        >
          <div
            className={styles.hero__content}
            style={{ transform: `translateY(${titleTranslate}px)` }}
          >
            <h1 className={styles.hero__title}>
              Peakland <span className={styles.hero__span}>Cleaning</span>{" "}
              Services
            </h1>

            <p className={styles.hero__subtitle}>
              Sparkling clean, every time. Trusted domestic and commercial
              cleaning across West Sussex, Brighton & Hove, and East Sussex.
            </p>
            <div className={styles.hero__actions}>
              <Link to="/contact" className={styles.hero__primary}>
                Book Now
              </Link>

              <Link to="/services" className={styles.hero__secondary}>
                See Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
