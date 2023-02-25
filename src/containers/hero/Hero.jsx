import styles from "../../style";
import LeftSide from './LeftSide';
import RightSide from './RightSide';

export default function Hero() {
  return (
    <section className={`sm:grid-cols-12 sm:grid sm:my-0 my-6 relative ${styles.boxWidth} ${styles.padding} ${styles.flexCenter} flex flex-col-reverse`}>
        <LeftSide />
        <RightSide />
    </section>
  )
}
