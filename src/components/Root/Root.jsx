import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainContent from "../mainContent/MainContent";
import styles from "./Root.module.css";

function Root() {
  return (
    <div className={styles.layout}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Root;
