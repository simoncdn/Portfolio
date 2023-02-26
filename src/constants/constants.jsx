import { FaReact } from "react-icons/fa";
import { RiDatabase2Line } from "react-icons/ri";
import { FiFigma } from "react-icons/fi";
import kasa from "../assets/Kasa.png";
import crazeeBurger from "../assets/Crazee-burger.png"

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

export const projects = [
  {
    title: "Kasa",
    picture: kasa,
    description: "Kasa is a web application of an accomodation rental platform C2C. Kasa has been developed from scratch. ",
    stack:["React", "Firebase", "Styled-components"],
    code: "https://github.com/simoncdn/kasa",
    source: "https://kasa-eta.vercel.app/"
  },
  {
    title: "Crazee-burger",
    picture: crazeeBurger,
    description: "Crazee-burger is a web application of a fastfood delivery platform. Crazee-burger has ben developed from scratch.",
    stack:["React", "Context", "Styled-components"],
    code: "https://github.com/simoncdn/crazee-burger",
    source: "https://crazee-burger-brown.vercel.app/"
  }
]