import { useState } from "react";
import React from 'react'
import arrowGreen from "../../assets/arrow-green.png"
import arrowBlack from "../../assets/arrow-black.png"

export default function Button() {
    const [src, setSrc] = useState(arrowBlack);


    return (
    <div className='w-11/12 bg-myGrey mr-auto ml-auto flex justify-center pb-4'>
        <button className='w-full mr-8 ml-8 pt-4 pb-4 bg-myGreen flex items-center justify-center text-base font-bold hover:bg-transparent hover:border-2 hover:border-myGreen hover:text-myGreen'
             onMouseOver={() => setSrc(arrowGreen)} 
             onMouseLeave={() => setSrc(arrowBlack)}
        >
            GENERATE
            <img src={src} alt="arrow" className="ml-4" />
        </button>
    </div>
  )
}
