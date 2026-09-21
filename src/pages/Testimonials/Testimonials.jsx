import styles from "./Testimonials.module.css";

const testimonials = [
  {
    text: "Nobody has ever cleaned my place with such attention to detail. The team was friendly on time and left my home sparkling.",
    name: "Fallah Maulana",
    rating: 5,
  },
  {
    text: "It is the first time my apartment has felt this fresh. Peakland really exceeded my expectations.",
    name: "Hanifa Maulina",
    rating: 5,
  },
  {
    text: "They made my move out cleaning effortless. Everything looked brand new again totally worth it.",
    name: "Hanifa Maulina",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials__container}>
        {/* Header */}
        <div className={styles.testimonials__header}>
          <span className={styles.testimonials__badge}>Testimonial</span>

          <h2 className={styles.testimonials__title}>
            Trusted by Homes and Businesses
          </h2>

          <p className={styles.testimonials__subtitle}>
            Real feedback from clients who trust Peakland Cleaning Services for
            reliable, high quality cleaning.
          </p>

          <div className={styles.testimonials__rating}>
            <span className={styles.testimonials__stars}>★★★★★</span>
            <span className={styles.testimonials__score}>Consistently rated 5 stars</span>
          </div>
        </div>

        {/* Cards */}
        <div className={styles.testimonials__grid}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.testimonials__card}>
              <p className={styles.testimonials__text}>“{item.text}”</p>

              <div className={styles.testimonials__footer}>
                <span className={styles.testimonials__name}>{item.name}</span>

                <span className={styles.testimonials__card_rating}>
                  ★★★★★ {item.rating.toFixed(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
