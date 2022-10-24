import React from 'react'
import copyGreen from "../../assets/copy_green.png"
import copyWhite from "../../assets/copy_white.png"
import { useState } from "react"

export default function Input(props) {
    const [src, setSrc] = useState(copyGreen);
    const [show, setShow] = useState(false);
    
    const delay = ms => new Promise(
      resolve => setTimeout(resolve, ms)
    );

    const handleCopy = async event => {
      setShow(true);
      await delay(3000);
      setShow(false);
    }

  return (
    <div>
        <div className='relative w-11/12 mr-auto ml-auto flex justify-center md:w-[540px]'>
            <input type={'text'} placeholder="P4$5W0rD!" value={props.pass} readOnly className='bg-myGrey w-full text-myWhite h-16 pl-8 text-headingL focus:outline-none'></input>
            <p className={show === true ? 'uppercase text-body text-myGreen absolute right-16 top-5' : "hidden"}>COPIED</p>
            <img src={src}
            onClick={handleCopy} 
            onMouseOver={() => setSrc(copyWhite)} 
            onMouseLeave={() => setSrc(copyGreen)}alt="copyIcon" className='absolute right-7 top-5'/>
        </div>
    </div>
  )
}
