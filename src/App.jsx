import Header from "./containers/header/Header";
import Hero from "./containers/hero/Hero";
import Technologies from "./containers/technologies/Technologies";
import styles from "./style";

function App() {
  return (
    <div className={`${styles.flexCenter} flex-col relative`}>
      <Header />
      <Hero />
      <Technologies />
    </div>
  );
}

export default App;
