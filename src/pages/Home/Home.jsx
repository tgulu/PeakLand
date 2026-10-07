import Hero from "../../components/Hero/Hero";
import About from "../About/About";
import ServicesPreview from "../../components/ServicesPreview/ServicesPreview";
import Testimonials from "../Testimonials/Testimonials";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <Hero />
      <About />
      <ServicesPreview />
      <Testimonials />
    </div>
  );
};

export default Home;
