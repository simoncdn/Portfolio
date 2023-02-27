import styles from "../../style";
import Tilt from "react-parallax-tilt"
import ProjectsButton from "./ProjectsButton";

export default function Card({project}) {
  return (
    <div className={`${styles.flexCenter} flex-col md:w-[45%] ss:w-[70%] w-[100%] relative group`}>

      <Tilt className={`${styles.glassBg} p-px glass__bg  rounded-lg opacity-70 hover:opacity-100 transition duration-300 card`}>
        <div
          className="
            group-hover:animate-pulse
            group-hover:opacity-100  
            opacity-0 rgb transition duratin-500  "
        ></div>


          <img
            src={project.picture}
            alt="project picture"
            className="rounded-t-lg grayscale group-hover:grayscale-0 "
          />


        <div
          className="
          bg-background
            relative flex flex-col justify-center items-center px-4 pb-8 pt-6  mt-1 rounded-b-lg"
        >
          <h4 className={`${styles.heading4} mb-4`}>{project.title}</h4>

          <div
            className="
              group-hover:animate-pulse
              group-hover:bg-gradient-to-r from-linearLeft to-linearRight
              group-hover:opacity-100 
              w-[30px] h-[2px] 
              bg-white opacity-30 rounded-full"
          ></div>

          <p className={`${styles.paragraph} py-4 `}>
            {project.description}
          </p>

          <div
            className={`${styles.paragraph} flex justify-center flex-col items-center w-full`}
          >
            <span>Stack</span>

            <div className="flex justify-between px-4 py-4 w-full flex-col items-center xs:flex-row ">
              {project.stack.map((stack, index) => (
                <p key={index}>{stack}</p>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-4 ss:w-[60%] w-[80%]">
            <ProjectsButton label="Code" lien={project.code} />
            <ProjectsButton label="Source" lien={project.source} />
          </div>
        </div>
      </Tilt>
    </div>
  );
}
