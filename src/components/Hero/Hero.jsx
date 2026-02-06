import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero__container}>
      <div className={styles.hero__background}>
        <div className={styles.hero__text}>
          <h1>Peakland</h1>
          <h2>Cleaning Services</h2>
          <h3>
            Professional Cleaning{" "}
            <span className={styles.hero__span}>Services </span>{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
