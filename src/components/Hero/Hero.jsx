import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="Home">
      <div className={styles.hero__container}>
        <div className={styles.hero__background}>
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>
              Peakland Professional Cleaning{" "}
              <span className={styles.hero__span}>Services </span>{" "}
            </h1>

            <p className={styles.hero__subtitle}>
              Enjoy a spotless space with our trusted cleaning professionals.
              Eco friendly flexible and always on time.
            </p>
            <div className={styles.hero__actions}>
              <button className={styles.hero__primary}>Book Now</button>

              <button className={styles.hero__secondary}>
                See Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* Peakland
Cleaning Services

Professional
CLEANING
SERVICES

Sparkling Clean, Every Time!

Our Services Include
• Residential Cleaning
• Commercial Cleaning
• Move In Move Out Cleaning
• Specialized Services

Contact Us Today!

0758134225

www.peaklandservices.com */
}
