import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero__container}>
      <div className={styles.hero__background}>
        <div className={styles.hero__text}>
          <h1>Cleaning Services</h1>
          <h2>
            Professional Cleaning{" "}
            <span className={styles.hero__span}>Services </span>{" "}
          </h2>
          <button className={styles.navbar_cta}>Contact Us</button>
          {/* Peakland
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

www.peaklandservices.com */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
