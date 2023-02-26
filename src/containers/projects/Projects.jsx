import styles from "../../style";
import { projects } from "../../constants/constants"
import RadientSeparation from "../../components/reusable-ui/RadientSeparation";
import RadientBg from "../../components/reusable-ui/RadientBg";
import Button from "../../components/reusable-ui/Button"
import { useState } from "react";
import Tilt from "react-parallax-tilt"
import ProjectsButton from "../../components/reusable-ui/ProjectsButton";
import Card from "../../components/reusable-ui/Card";

export default function Technologies() {

   return (
    <section id="projects" className={`${styles.boxWidth} ${styles.padding} relative `}>
        
        <RadientBg 
        blur="blur-[80px]"
        top="top-[20%]"
        left="left-[25%]"
        />

        <RadientSeparation width="w-[80px]" height="h-[8px]"/>
        
        <h2 className= {` ${styles.subtitleSize} ${styles.marginYTitle} text-white text-bold]`}>Projects</h2>

        <div className={`${styles.marginYBloc} flex md:items-start md:justify-center md:flex-row flex-col items-center gap-8 `}>
            {projects.map((project, index) => (
                <Card project={project} key={index}/>
            ))}
        </div>

    </section>
  )
}
