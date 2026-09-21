import Hero from "../../components/Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </div>
  );
};

export default Home;
