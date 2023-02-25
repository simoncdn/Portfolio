import Header from "./containers/header/Header";
import Hero from "./containers/hero/Hero";
import styles from "./style";

function App() {
  return (
    <div className={`${styles.flexCenter} flex-col relative`}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
