import resume from "../../assets/SimonCardonaFrontEndReact.pdf"
import Button from "../../components/reusable-ui/Button"
import styles from "../../style";

export default function LeftSide() {
  return (
    <div className={`md:col-span-7 sm:col-span-8 flex justify-between flex-col sm:my-0 my-[30px]`}>

        <h1 className= {`${styles.titleSize} gradient__text font-semibold`} >
            Turning problems<br />
            into solutions.<br />
        </h1>

        <p className={`${styles.textSize} text-primary mt-8 sm:w-[70%] w-[100%]`}  >Welcome ! My name is Simon, I'm front end developer located in France. I design and build website from scratch with love and passion.</p>

        <div className={`sm:w-[100%] sm:justify-start w-[100%] justify-center flex  ${styles.boxWidth} mt-[40px]`}>
            
                  <Button label="Resume"
                  paddingX={"px-6"}
                  paddingY={"py-2"}
                  lien={resume}
                  file="resume"
                  />

        </div>

    </div>
  )
}
