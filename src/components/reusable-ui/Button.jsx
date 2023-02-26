import React from 'react'
import styles from '../../style'

export default function Button({label, paddingX, paddingY, fontSize, lien, file}) {
  return (
    <div className={` border
    bg-gradient-to-r from-linearLeft to-linearRight p-px 
    bg-white 
     rounded-3xl`} >

    
      <a href={lien} download={file}>

        <button
        className={` ${fontSize}
        ${paddingX} 
        ${paddingY} 
        text-white 
        bg-background 
        hover:bg-gradient-to-r from-linearLeft to-linearRight
        hover:text-white 
        transition 
        duration-500
        rounded-3xl`}>
          {label}
        </button>

      </a>
    </div>
  )
}
