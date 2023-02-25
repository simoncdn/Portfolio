import { FaReact } from "react-icons/fa";
import { RiDatabase2Line } from "react-icons/ri";
import { FiFigma } from "react-icons/fi";

export const navLinks = [
  {
    id: "technologies",
    title: "Technologies",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const technologies = [
  {
    title: "Front-End",
    icon: <FaReact />,
    technologies: [
      "Javascript",
      "React",
      "Next",
      "TypeScript",
      "Tailwind",
      "Styled-components",
    ],
  },
  {
    title: "Back-End",
    icon: <RiDatabase2Line />,
    technologies: ["Node.js", "MongoDB", "Firebase"],
  },
  {
    title: "UI/UX",
    icon: <FiFigma />,
    technologies: ["Figma"],
  },
];
