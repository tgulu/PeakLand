import { useState } from "react";
import { Phone, Mail, MapPin, Send, Globe } from "lucide-react";
import { ImageWithFallback } from "../../components/ui/ImageWithFallback/ImageWithFallback";
import contactImage from "../../assets/cleanerBottle.jpg";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "07584 134225",
      link: "tel:+447584134225",
    },
    {
      icon: Mail,
      title: "Email",
      details: "peaklandcleaning@gmail.com",
      link: "mailto:peaklandcleaning@gmail.com",
    },
    {
      icon: MapPin,
      title: "Areas We Cover",
      details: "West Sussex, Brighton & Hove and East Sussex",
      link: null,
    },
    {
      icon: Globe,
      title: "Website",
      details: "www.peaklandservices.com",
      link: "https://www.peaklandservices.com",
    },
  ];

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Contact Us</h1>
            <p>
              We&apos;d love to hear from you. Contact Peakland Cleaning
              Services to discuss your domestic or commercial cleaning needs and
              request a free quote.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div>
              <h2>Request a Free Quote</h2>
              <p>
                Fill in the form below and our team will get back to you
                shortly with a free consultation.
              </p>

              {submitted ? (
                <div className={styles.successBox}>
                  <div className={styles.successIcon}>
                    <Send size={32} color="white" />
                  </div>
                  <h3>Message Sent!</h3>
                  <p>
                    Thank you for contacting Peakland. We&apos;ll get back to
                    you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <div className={styles.twoCol}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="domestic">Domestic Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="specialized">Specialized Cleaning</option>
                    <option value="quote">Request a Free Quote</option>
                  </select>

                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell us about your property and cleaning requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  <button type="submit">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2>Get In Touch</h2>

              <div className={styles.infoList}>
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;

                  const content = (
                    <div className={styles.infoCard}>
                      <div className={styles.iconBox}>
                        <Icon size={24} color="white" />
                      </div>
                      <div>
                        <h4>{info.title}</h4>
                        <p>{info.details}</p>
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <a key={index} href={info.link}>
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>

              <div className={styles.imageWrap}>
                <ImageWithFallback
                  src={contactImage}
                  alt="Peakland cleaning services team"
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.emergency}>
        <Phone size={48} color="white" />
        <h2>Ready for a Spotless Space?</h2>
        <p>Call Peakland today to book your cleaning service.</p>
        <a href="tel:+447584134225">
          <Phone size={18} />
          Call 07584 134225
        </a>
      </section>
    </div>
  );
};
export default Contact;
