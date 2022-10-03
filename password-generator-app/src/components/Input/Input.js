import React from 'react'
import copyGreen from "../../assets/copy_green.png"
import copyWhite from "../../assets/copy_white.png"
import { useState } from "react"

export default function Input() {
    const [src, setSrc] = useState(copyGreen);

  return (
    <div>
        <div className='relative w-11/12 mr-auto ml-auto flex justify-center'>
            <input type={'text'} placeholder="P4$5W0rD!" readOnly className='bg-myGrey w-full text-myWhite h-16 pl-8 text-headingL focus:outline-none'></input>
            <p className='uppercase text-body text-myGreen absolute right-16 top-5 hidden'>COPIED</p>
            <img src={src} 
            onMouseOver={() => setSrc(copyWhite)} 
            onMouseLeave={() => setSrc(copyGreen)}alt="copyIcon" className='absolute right-7 top-5'/>
        </div>
    </div>
  )
}
