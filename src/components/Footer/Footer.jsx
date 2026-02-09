import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        {/* Brand column */}
        <div className={styles.footer__brand}>
          <h3 className={styles.footer__logo}>Peakland</h3>
          <p className={styles.footer__description}>
            Professional home and office cleaning services delivering reliable
            spotless results you can trust.
          </p>

          <div className={styles.footer__hours}>
            <strong>Operating Hours</strong>
            <p>
              Monday to Saturday
              <br />7 am to 11 pm
            </p>
            <p>
              Sunday
              <br />8 am to 5 pm
            </p>
          </div>

          <div className={styles.footer__contact}>
            <strong>Call Us Today</strong>
            <p>07581 342225</p>
          </div>

          {/* <div className={styles.footer__socials}>
            <span>f</span>
            <span>in</span>
            <span>ig</span>
          </div> */}
        </div>

        {/* Cities */}
        <div className={styles.footer__column}>
          <h4 className={styles.footer__heading}>Cities</h4>
          <a>London</a>
          <a>Manchester</a>
          <a>Birmingham</a>
        </div>

        {/* Company */}
        <div className={styles.footer__column}>
          <h4 className={styles.footer__heading}>Company</h4>
          <a>About Us</a>
          <a>Terms of Service</a>
          <a>Privacy Policy</a>
          <a>FAQ</a>
          <a>Contact</a>
        </div>

        {/* Services */}
        <div className={styles.footer__column}>
          <h4 className={styles.footer__heading}>Services</h4>
          <a>Home Cleaning</a>
          <a>Commercial Cleaning</a>
          <a>Deep Cleaning</a>
          <a>Move In Out Cleaning</a>
          <a>Post Construction Cleaning</a>
          <a>Eco Cleaning Service</a>
          <a>Airbnb and Rental Cleaning</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.footer__bottom}>
        <span>© 2026 Peakland Cleaning Services</span>
      </div>
    </footer>
  );
};

export default Footer;
