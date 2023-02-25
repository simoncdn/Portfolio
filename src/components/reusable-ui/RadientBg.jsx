import React from 'react'

export default function RadientBg({width, height, blur, top, left}) {
  return (
    <div className={` absolute rounded-30px
    sm:w-[${width}px] w-[${width / 2}px] 
    sm:h-[${height}px] h-[${height / 2 }px]  
    ${blur} 
    ${top}
    ${left}
    bg-linearBackground `}></div>
  )
}
