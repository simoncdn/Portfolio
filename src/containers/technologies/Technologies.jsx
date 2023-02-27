import styles from "../../style";
import { technologies } from "../../constants/constants"
import RadientBg from "../../components/reusable-ui/RadientBg";

export default function Technologies() {
  return (
    <section id="technologies" className={`${styles.boxWidth} ${styles.padding} relative ${styles.marginY} `}>
        
        <RadientBg 
        blur="blur-[280px]"
        top="top-[50%]"
        left="-left-[35%]"
        />

        <div className={`${styles.gradientLine}`}></div>
        
        <h2 className= {` ${styles.heading2} ${styles.marginYTitle}`}>Technologies</h2>
        
        <p className={`${styles.paragraph} sm:w-[50%] w-[] `}>I’ve worked with a range a technologies in the web development world.  From Back-end to Design.</p>
s
        <div className={`${styles.marginYBloc} flex ss:items-start ss:justify-between ss:flex-row flex-col items-center gap-20`}>
            {technologies.map((technologie, index) => (
                <div key={index} className="ss:min-w-[auto]  min-w-[160px] ">
                    <div className="ss:text-xl text-md text-white  flex items-start relative ss:mt-0">{technologie.icon}</div>
                    
                    <h3 className={`${styles.heading3} mb-3`}>{technologie.title}</h3>

                    <ul>
                        {technologie.technologies.map(( item, index) => (
                            <li key={index} className={`${styles.paragraph} relative gap-1`}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </section>
  )
}
