import Navbar from "../../components/Navbar";
import styles from "../../style";
import RadientBg from "../../components/reusable-ui/RadientBg"

export default function Header() {
  return (
    <header className={`${styles.boxWidth} ${styles.fl}`}>
      <RadientBg 
        blur="blur-[120px]"
        top="-top-[5%]"
        left="-left-[5%]"
        />

      <div
        className={`${styles.boxWidth} ${styles.paddingX} py-8 flex sm:justify-center justify-end relative`}
      >
        <Navbar />
      </div>
    </header>
  );
}
