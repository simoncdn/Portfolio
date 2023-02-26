import Header from "./containers/header/Header";
import Hero from "./containers/hero/Hero";
import Technologies from "./containers/technologies/Technologies";
import Projects from "./containers/projects/Projects"
import styles from "./style";
import Contact from "./containers/contact/Contact";
import Footer from "./containers/footer/Footer";

function App() {
  return (
    <div className={`${styles.flexCenter} flex-col relative`}>
      <Header />
      <Hero />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
