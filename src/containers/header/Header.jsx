import Navbar from "../../components/Navbar";
import styles from "../../style";


export default function Header() {
  return (
    <header className={`${styles.boxWidth} ${styles.fl}`}>
      <div className="gradient__bg sm:w-[300px] sm:h-[300px] w-[150px] h-[150px]  blur-[120px] -top-[5%] -left-[5%]"></div>

      <div
        className={`${styles.boxWidth} ${styles.paddingX} py-8 flex sm:justify-center justify-end relative`}
      >
        <Navbar />
      </div>
    </header>
  );
}
