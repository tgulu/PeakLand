import styles from "./About.module.css";
import aboutOne from "../../assets/ladderClean.jpg";
import aboutTwo from "../../assets/mop.jpg";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        {/* Left content */}
        <div className={styles.about__content}>
          <span className={styles.about__badge}>About Us</span>

          <h2 className={styles.about__title}>
            Bringing Freshness Comfort and Care to Every Home
          </h2>

          <p className={styles.about__text}>
            At Peakland we go beyond surface cleaning and bring life back to
            your space. Our professional team uses eco friendly products and
            careful attention to detail to deliver consistent results.
          </p>

          <ul className={styles.about__list}>
            <li className={styles.about__list_item}>
              Professional and trusted team
            </li>
            <li className={styles.about__list_item}>
              Eco friendly cleaning products
            </li>
            <li className={styles.about__list_item}>Satisfaction guaranteed</li>
          </ul>

          <button className={styles.about__button}>Learn More</button>
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
