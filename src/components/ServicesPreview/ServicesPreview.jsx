import styles from "./ServicesPreview.module.css";
import { serviceCards, slugify } from "../../data/servicesData";

const ServicesPreview = () => {
  return (
    <section className={styles.services}>
      <div className={styles.services__container}>
        <div className={styles.services__header}>
          <span className={styles.services__badge}>Our Services</span>
          <h2 className={styles.services__sectionTitle}>
            Professional Cleaning for Homes and Businesses
          </h2>
          <p className={styles.services__subtitle}>
            Six core Peakland services tailored to your property and schedule.
          </p>
        </div>

        <div className={styles.services__grid}>
          {serviceCards.map((service, index) => (
            <article
              id={slugify(service.title)}
              key={service.title}
              className={styles.services__card}
            >
              <span className={styles.services__index}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div
                className={styles.services__thumb}
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <h3 className={styles.services__title}>{service.title}</h3>
              <p className={styles.services__text}>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
