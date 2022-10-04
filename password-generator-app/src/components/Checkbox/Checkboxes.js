import React, { useState } from 'react'


export default function Checkboxes() {
    const [click, setClick] = useState(false);
    const [click1, setClick1] = useState(false);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);
  
    return (
    <div className='w-11/12 bg-myGrey mr-auto ml-auto'>
        {/* SECTION INPUTS */}
        <section className='w-full flex flex-col pl-8 pr-8'>
            <div className='w-full flex flex-row items-center pb-8'> 
                <div onClick={() => setClick(!click)} className={click ? 'w-8 h-8 bg-myGreen bg-check bg-no-repeat bg-center bg-[length:23px_20px]' : "border-2 w-8 h-8"}></div>
                <p className='text-myWhite ml-5 text-base font-bold'>Include Uppercase Letters</p>
            </div>

            <div className='w-full flex flex-row items-center pb-8'> 
                <div onClick={() => setClick1(!click1)} className={click1 ? 'w-8 h-8 bg-myGreen bg-check bg-no-repeat bg-center bg-[length:23px_20px]' : "border-2 w-8 h-8"}></div>
                <p className='text-myWhite ml-5 text-base font-bold'>Include Lowercase Letters</p>
            </div>

            <div className='w-full flex flex-row items-center pb-8'> 
                <div onClick={() => setClick2(!click2)} className={click2 ? 'w-8 h-8 bg-myGreen bg-check bg-no-repeat bg-center bg-[length:23px_20px]' : "border-2 w-8 h-8"}></div>
                <p className='text-myWhite ml-5 text-base font-bold'>Include Numbers</p>
            </div>

            <div className='w-full flex flex-row items-center pb-8'> 
                <div onClick={() => setClick3(!click3)} className={click3 ? 'w-8 h-8 bg-myGreen bg-check bg-no-repeat bg-center bg-[length:23px_20px]' : "border-2 w-8 h-8"}></div>
                <p className='text-myWhite ml-5 text-base font-bold'>Include Symbols</p>
            </div>
        </section>
    </div>
  )
}
