import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__brand}>
          <h3 className={styles.footer__logo}>Peakland Cleaning Services</h3>
          <p className={styles.footer__description}>
            High quality, reliable and affordable domestic and commercial
            cleaning tailored to your needs across Sussex.
          </p>

          <div className={styles.footer__hours}>
            <strong>Service Availability</strong>
            <p>
              Monday to Sunday
              <br />
              Flexible booking slots
            </p>
          </div>

          <div className={styles.footer__contact}>
            <strong>Call Us Today</strong>
            <p>07584 134225</p>
            <p>peaklandcleaning@gmail.com</p>
          </div>
        </div>

        <div className={styles.footer__column}>
          <h4 className={styles.footer__heading}>Areas We Cover</h4>
          <a>West Sussex</a>
          <a>Brighton & Hove</a>
          <a>East Sussex</a>
        </div>

        <div className={styles.footer__column}>
          <h4 className={styles.footer__heading}>Company</h4>
          <a href="/about">About Us</a>
          <a href="/services">Our Services</a>
          <a href="/contact">Free Quote</a>
          <a href="#">www.peaklandservices.com</a>
        </div>

        <div className={styles.footer__column}>
          <h4 className={styles.footer__heading}>Services</h4>
          <h5 to="/services#domestic-cleaning">Domestic Cleaning</h5>
          <h5 to="/services#commercial-cleaning">Commercial Cleaning</h5>
          <h5 to="/services#window-cleaning">Window Cleaning</h5>
          <h5 to="/services#after-builders-cleaning">
            After Builders Cleaning
          </h5>
          <h5 to="/services#holiday-let-cleaning">Holiday Let Cleaning</h5>
          <h5 to="/services#move-in-and-move-out-cleaning">
            Move In and Move Out Cleaning
          </h5>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <span>© 2026 Peakland Cleaning Services</span>
      </div>
    </footer>
  );
};

export default Footer;
