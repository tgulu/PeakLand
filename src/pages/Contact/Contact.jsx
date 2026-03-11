import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { ImageWithFallback } from "../../components/ui/ImageWithFallback/ImageWithFallback";
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
      details: "(123) 456-7890",
      link: "tel:+1234567890",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@cleanstartaftercare.com",
      link: "mailto:info@cleanstartaftercare.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Healthcare Way, Medical District, City, State 12345",
      link: null,
    },
    {
      icon: Clock,
      title: "Hours",
      details: "24/7 Support Available",
      link: null,
    },
  ];

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Contact Us</h1>
            <p>
              We&apos;re here to answer your questions and provide the support
              you need for a safe recovery journey
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div>
              <h2>Send Us a Message</h2>
              <p>
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              {submitted ? (
                <div className={styles.successBox}>
                  <div className={styles.successIcon}>
                    <Send size={32} color="white" />
                  </div>
                  <h3>Message Sent!</h3>
                  <p>
                    Thank you for contacting us. We&apos;ll respond shortly.
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
                    <option value="services">Services Information</option>
                    <option value="consultation">Request Consultation</option>
                  </select>

                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell us about your needs..."
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
                  src="https://images.unsplash.com/photo-1766325693423-69e9fe20605b"
                  alt="Medical care support"
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.emergency}>
        <Phone size={48} color="white" />
        <h2>Need Immediate Assistance?</h2>
        <p>Our support team is available 24/7 for urgent consultations</p>
        <a href="tel:+1234567890">
          <Phone size={18} />
          Call (123) 456-7890
        </a>
      </section>
    </div>
  );
};
export default Contact;
