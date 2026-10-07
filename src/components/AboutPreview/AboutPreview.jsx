import { Link } from "react-router-dom";
import styles from "./AboutPreview.module.css";

const features = [
  "High quality and consistent service",
  "Environmentally friendly cleaning practices",
  "Satisfaction guaranteed",
  "Dedicated and well trained team",
];

const AboutPreview = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__media}>
          <div className={styles.about__imageMain} />
          <div className={styles.about__imageAccent} />
          <span className={styles.about__badge}>Trusted across Sussex</span>
        </div>

        <div className={styles.about__content}>
          <span className={styles.about__eyebrow}>About Peakland</span>

          <h2 className={styles.about__title}>
            Trusted Domestic and Commercial Cleaning Across Sussex
          </h2>

          <p className={styles.about__text}>
            Peakland Cleaning Services delivers high quality reliable and
            affordable cleaning solutions tailored to your needs. From
            routine home cleaning to office maintenance and deep cleaning,
            our trained team keeps your spaces spotless and comfortable.
          </p>

          <ul className={styles.about__features}>
            {features.map((feature) => (
              <li key={feature} className={styles.about__feature}>
                <span className={styles.about__featureIcon}>✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <Link to="/contact" className={styles.about__button}>
            Request a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
