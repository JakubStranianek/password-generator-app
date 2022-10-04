import React, { useState } from 'react'

export default function Strength() {
    const types = [
        {
          name: "TOO WEAK!",
          bgColor: "bg-myRed",
        },
        {
          name: "WEAK",
          bgColor: "bg-myOrange",
        },
        {
          name: "MEDIUM",
          bgColor: "bg-myYellow",
        },
        {
          name: "STRONG",
          bgColor: "bg-myGreen",
        }
      ];

    const [index, setIndex] = useState(3);

  return (
    <div className='w-11/12 bg-myGrey mr-auto ml-auto pt-4 pb-5'>
        {/* SECTION STRENGHT */}
       <div className='flex justify-between items-center bg-myBlack h-14 ml-8 mr-8 pl-4 pr-4'>
            <h1 className='font-bold text-lg text-mySilver'>STRENGTH</h1>

            <div className='flex items-center'>
                <h1 className='text-myWhite pr-4'>{types[index].name}</h1>      
                    {index === 0 ? 
                      <div className='flex'>
                      <div className={types[index].bgColor + ' w-[10px] h-[28px]'}></div>
                      <div className={'border-2 border-myWhite w-[10px] h-[28px] ml-2'}></div>
                      <div className={'border-2 border-myWhite w-[10px] h-[28px] ml-2'}></div>
                      <div className={'border-2 border-myWhite w-[10px] h-[28px] ml-2'}></div>
                  </div>    
                    : ""}  

                    {index === 1 ? 
                      <div className='flex'>
                      <div className={types[index].bgColor + ' w-[10px] h-[28px]'}></div>
                      <div className={types[index].bgColor + ' w-[10px] h-[28px] ml-2'}></div>
                      <div className={'border-2 border-myWhite w-[10px] h-[28px] ml-2'}></div>
                      <div className={'border-2 border-myWhite w-[10px] h-[28px] ml-2'}></div>
                  </div>    
                    : ""}  

                    {index === 2 ? 
                      <div className='flex'>
                      <div className={types[index].bgColor + ' w-[10px] h-[28px]'}></div>
                      <div className={types[index].bgColor + ' w-[10px] h-[28px] ml-2'}></div>
                      <div className={types[index].bgColor + ' w-[10px] h-[28px] ml-2'}></div>
                      <div className={'border-2 border-myWhite w-[10px] h-[28px] ml-2'}></div>
                  </div>    
                    : ""}   

                    {index === 3 ? 
                      <div className='flex'>
                      <div className={types[index].bgColor + ' w-[10px] h-[28px]'}></div>
                      <div className={types[index].bgColor + ' w-[10px] h-[28px] ml-2'}></div>
                      <div className={types[index].bgColor + ' w-[10px] h-[28px] ml-2'}></div>
                      <div className={types[index].bgColor + ' w-[10px] h-[28px] ml-2'}></div>
                  </div>    
                    : ""}                            
            </div>
        </div> 
    </div>
  )
}
