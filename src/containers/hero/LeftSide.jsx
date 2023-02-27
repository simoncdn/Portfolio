import resume from "../../assets/SimonCardonaFrontEndReact.pdf"
import styles from "../../style";

export default function LeftSide() {
  return (
    <div className={`md:col-span-7 sm:col-span-8 flex justify-between flex-col sm:my-0 my-[30px]`}>

        <h1 className= {`${styles.heading1}`} >
            Turning problems<br />
            into solutions.
        </h1>

        <p className={`${styles.paragraph} text-primary mt-8 sm:w-[70%] w-[100%] text-textSize`}  >Welcome ! My name is Simon, I'm front end developer located in France. I design and build website from scratch with love and passion.</p>

        <div className={`relative flex justify-center my-[50px] ss:justify-start`}>

            <div className="w-fit relative">

            <div className={`${styles.gradientBtnBg} animate-pulse bg-gradient-to-r from-linearLeft to-linearRight`}></div>  
            <a href={resume} download={`resume`}>
              <button
              className={`${styles.gradientBtn}`}>
                Resume
              </button>
            </a>
            </div>
        </div>
    </div>
  )
}
