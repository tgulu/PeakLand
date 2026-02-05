import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainContent from "../maincontent/MainContent";

function Root() {
  return (
    // <div className="min-h-screen flex flex-col">
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Root;
