import { navLinks } from "../constants/constants";
import { HiMenuAlt3 } from "react-icons/hi"
import { useState } from "react";
import { RxCross2 } from "react-icons/rx"
import styles from "../style";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <ul className="hidden sm:flex gap-14">
        {navLinks.map((navLink, index) => (
          <li
            key={navLink.id}
            className={`${styles.textSize} text-white hover:text-primary`}
          >
            <a href={`#${navLink.id}`}>{navLink.title}</a>
          </li>
        ))}

      </ul>


      <div className="sm:hidden flex flex-1 justify-end items-center relative">
        <button onClick={() => setIsOpen(prev => !prev)}>
          {isOpen ? <RxCross2 className="text-white w-7 h-7"/> : 
          <HiMenuAlt3 className="text-white w-7 h-7" />
          }
          
        </button>
        
        
        <div className={`${isOpen ? "flex" : "hidden"} p-1 absolute top-10 right-0 mx-4 my-2 min-w-[140px] rounded-xl animate-sidebar gradient__border z-20`}>


            <ul className="sm:hidden flex flex-col justify-end items-start flex-1 gap-4 p-5 rounded-xl bg-background">
            {navLinks.map((navLink) => (
              <li
              key={navLink.id}
              className="text-white text-mediumTxt hover:text-primary "
              >
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
            </ul>


        </div>
      </div>
    </nav>
  );
}
