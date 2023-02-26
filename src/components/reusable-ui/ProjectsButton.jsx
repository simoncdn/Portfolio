import React from "react";

export default function ProjectsButton({label, lien}) {
  return (
    <div className={`relative `}>
      <div
        className="bg-white opacity-30
          group-hover:opacity-100
          group-hover:animate-pulse
          group-hover:bg-gradient-to-r from-linearLeft to-linearRight
           w-[82px] h-[42px] 
           -right-[1px] -top-[1px] 
           rounded-3xl absolute"
      ></div>
      <a href={lien} target="_blank">
        <button
          className={`
            w-[80px]
            h-[40px]
             text-primary 
             bg-background 
             hover:bg-gradient-to-r from-linearLeft to-linearRight
             hover:text-white 
            transition 
            duration-500
            relative
            rounded-3xl`}
        >
          {label}
        </button>
      </a>
    </div>
  );
}
