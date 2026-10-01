import styles from "./Testimonials.module.css";

const testimonials = [
  {
    text: "Really happy with the clean, especially the kitchen and bathroom which needed the most work. Turned up on time and got straight to it.",
    name: "Sarah Thompson",
    rating: 5,
  },
  {
    text: "Good job overall, missed a couple of spots on the skirting boards but nothing major. Would book again.",
    name: "James Patterson",
    rating: 4,
  },
  {
    text: "Used them for my move out clean and the landlord didn't have a single complaint, which says it all really.",
    name: "Priya Shah",
    rating: 5,
  },
];

const renderStars = (rating) => "★".repeat(rating) + "☆".repeat(5 - rating);

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
            <span className={styles.testimonials__score}>Rated 4.5+ stars by our clients</span>
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
                  {renderStars(item.rating)} {item.rating.toFixed(1)}
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
