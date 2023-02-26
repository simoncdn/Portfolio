import React from 'react'

export default function RadientBg({blur, top, left}) {
  return (
    <div className={` absolute rounded-full
    sm:w-[600px] w-[250px] 
    sm:h-[600px] h-[250px]  
    ${blur} 
    ${top}
    ${left}
    bg-linearBackground `}></div>
  )
}
