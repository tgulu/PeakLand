import { Link } from "react-router-dom";
import styles from "./About.module.css";
import aboutOne from "../../assets/ladderClean.jpg";
import aboutTwo from "../../assets/smoke hoover.jpg";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        {/* Left content */}
        <div className={styles.about__content}>
          <span className={styles.about__badge}>About Us</span>

          <h2 className={styles.about__title}>
            Trusted Domestic and Commercial Cleaning Across Sussex
          </h2>

          <p className={styles.about__text}>
            Peakland Cleaning Services delivers high quality reliable and
            affordable cleaning solutions tailored to your needs. From routine
            home cleaning to office maintenance and deep cleaning, our trained
            team keeps your spaces spotless and comfortable.
          </p>

          <p className={styles.about__text}>
            Our mission is to take the stress out of cleaning so you can focus
            on what matters most. We work with transparency reliability and a
            customer first approach on every visit.
          </p>

          <ul className={styles.about__list}>
            <li className={styles.about__list_item}>
              High quality and consistent service
            </li>
            <li className={styles.about__list_item}>
              Environmentally friendly cleaning practices
            </li>
            <li className={styles.about__list_item}>Satisfaction guaranteed</li>
            <li className={styles.about__list_item}>
              Dedicated and well trained team
            </li>
          </ul>

          <Link to="/contact" className={styles.about__button}>
            Request a Free Quote
          </Link>
        </div>

        {/* Right images */}
        <div className={styles.about__images}>
          <img
            src={aboutOne}
            alt="Cleaning team"
            className={styles.about__image}
          />

          <img
            src={aboutTwo}
            alt="Professional cleaners"
            className={styles.about__image}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
