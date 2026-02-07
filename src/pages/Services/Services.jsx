import styles from "./Services.module.css";
import homeCleaning from "../../assets/b&wClean.jpg";
import cleanWindow from "../../assets/cleanWindow.jpg";
import deepCleaning from "../../assets/smoke hoover.jpg";

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.services__container}>
        <div className={styles.services__grid}>
          {/* Card 1 */}
          <div
            className={styles.services__card}
            style={{ backgroundImage: `url(${cleanWindow})` }}
          >
            <div className={styles.services__overlay}>
              <h3 className={styles.services__title}>Home Cleaning</h3>
              <p className={styles.services__text}>
                Keep your living space fresh and organised with regular or one
                time cleaning tailored to your schedule.
              </p>
              <button className={styles.services__button}>Book Now</button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={styles.services__card}
            style={{ backgroundImage: `url(${homeCleaning})` }}
          >
            <div className={styles.services__overlay}>
              <h3 className={styles.services__title}>Office Cleaning</h3>
              <p className={styles.services__text}>
                Maintain a clean productive workspace that boosts focus and
                leaves a lasting impression.
              </p>
              <button className={styles.services__button}>Book Now</button>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={styles.services__card}
            style={{ backgroundImage: `url(${deepCleaning})` }}
          >
            <div className={styles.services__overlay}>
              <h3 className={styles.services__title}>Deep Cleaning</h3>
              <p className={styles.services__text}>
                A detailed top to bottom clean that reaches every corner of your
                space with careful attention to detail.
              </p>
              <button className={styles.services__button}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
