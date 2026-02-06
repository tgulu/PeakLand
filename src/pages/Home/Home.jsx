import Hero from "../../components/Hero/Hero";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <Hero />
    </div>
  );
};

export default Home;
