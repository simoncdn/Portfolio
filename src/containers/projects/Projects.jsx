import styles from "../../style";
import { projects } from "../../constants/constants"
import RadientBg from "../../components/reusable-ui/RadientBg";
import Card from "../../components/reusable-ui/Card";

export default function Technologies() {

   return (
    <section id="projects" className={`${styles.boxWidth} ${styles.padding} relative `}>
        
        <RadientBg 
        blur="blur-[80px]"
        top="top-[20%]"
        left="left-[25%]"
        />

        <div className={`${styles.gradientLine}`}></div>
        
        <h2 className= {` ${styles.heading2} ${styles.marginYTitle}`}>Projects</h2>

        <div className={`${styles.marginYBloc} flex md:items-start md:justify-center md:flex-row flex-col items-center gap-8 `}>
            {projects.map((project, index) => (
                <Card project={project} key={index}/>
            ))}
        </div>

    </section>
  )
}
