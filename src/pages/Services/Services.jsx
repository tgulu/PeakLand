import styles from "./Services.module.css";
import cleanerBottle from "../../assets/cleanerBottle.jpg";
import cleanWindow from "../../assets/cleanWindow.jpg";
import ladderClean from "../../assets/ladderClean.jpg";
import mop from "../../assets/mop.jpg";
import phoneClean from "../../assets/phoneClean.jpg";
import blueClean from "../../assets/blueClean.jpg";

const serviceCards = [
  {
    title: "Domestic Cleaning",
    description:
      "Routine or one-off home cleaning that keeps every room fresh, tidy, and spotless.",
    image: cleanerBottle,
  },
  {
    title: "Commercial Cleaning",
    description:
      "Reliable cleaning for offices, shops, and shared business spaces with flexible scheduling.",
    image: blueClean,
  },
  {
    title: "Window Cleaning",
    description:
      "Professional interior and exterior window cleaning for a clear, streak-free finish.",
    image: cleanWindow,
  },
  {
    title: "After Builders Cleaning",
    description:
      "Detailed post-renovation cleaning to remove dust and debris and leave your space ready to use.",
    image: ladderClean,
  },
  {
    title: "Holiday Let Cleaning",
    description:
      "Fast turnaround cleans to keep holiday properties guest-ready between stays.",
    image: phoneClean,
  },
  {
    title: "Move In and Move Out Cleaning",
    description:
      "Comprehensive end-of-tenancy and move-in cleans for a smooth handover.",
    image: mop,
  },
];

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const Services = () => {
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
          {serviceCards.map((service) => (
            <article
              id={slugify(service.title)}
              key={service.title}
              className={styles.services__card}
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className={styles.services__overlay}>
                <h3 className={styles.services__title}>{service.title}</h3>
                <p className={styles.services__text}>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
