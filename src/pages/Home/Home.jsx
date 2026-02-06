import Hero from "../../components/Hero/Hero";
import About from "../About/About";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <Hero />
      <About />
    </div>
  );
};

export default Home;
