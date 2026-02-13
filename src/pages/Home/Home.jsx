import Hero from "../../components/Hero/Hero";
import About from "../About/About";
import styles from "./Home.module.css";
import Service from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <Hero />
      <About />
      <Service />
      <Testimonials />
    </div>
  );
};

export default Home;
