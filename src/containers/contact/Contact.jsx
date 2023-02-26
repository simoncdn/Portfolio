import styles from "../../style";
import { technologies } from "../../constants/constants"
import RadientSeparation from "../../components/reusable-ui/RadientSeparation";
import RadientBg from "../../components/reusable-ui/RadientBg";

export default function Contact() {
  return (
    <section id="technologies" className={`${styles.boxWidth} ${styles.padding} relative ${styles.marginY} `}>
        
        <RadientBg 
        blur="blur-[200px]"
        top="top-[100%]"
        left="-left-[25%]"
        />
        <RadientSeparation />
        
        <h2 className= {` ${styles.subtitleSize} ${styles.marginYTitle} text-white text-bold]`}>Contact</h2>
        
        <p className={`${styles.textSize} text-primary sm:w-[50%] w-[] `}>Feel free to contact me by email or through my social networks.</p>
s
        <div className={`${styles.marginYBloc} flex ss:items-start ss:justify-between ss:flex-row flex-col items-center gap-20 bg-red-100`}>

        </div>
    </section>
  )
}
