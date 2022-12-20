import React, { useState } from 'react'

export default function Strength(props) {
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

    const [index, setIndex] = useState(props.sentStrength);
    
  return (
    <div className='w-11/12 bg-myGrey mr-auto ml-auto pt-4 pb-5 md:w-[540px]'>
        {/* SECTION STRENGHT */}
       <div className='flex justify-between items-center bg-myBlack h-14 ml-8 mr-8 pl-4 pr-4'>
            <h1 className='font-bold text-lg text-mySilver'>STRENGTH</h1>

            <div className='flex items-center'>
                <h1 className='text-myWhite pr-4'>{types[index].name}</h1> 
                {props.sentStrength < 0 ? 
                      <div className='flex'>
                      <div className={'border-2 border-myWhite w-[10px] h-[28px] ml-2'}></div>
                      <div className={'border-2 border-myWhite w-[10px] h-[28px] ml-2'}></div>
                      <div className={'border-2 border-myWhite w-[10px] h-[28px] ml-2'}></div>
                      <div className={'border-2 border-myWhite w-[10px] h-[28px] ml-2'}></div>
                  </div>    
                    : ""}  

                    {props.sentStrength === 0 ? 
                      <div className='flex'>
                      <div className={types[props.sentStrength].bgColor + ' w-[10px] h-[28px]'}></div>
                      <div className={'border-2 border-myWhite w-[10px] h-[28px] ml-2'}></div>
                      <div className={'border-2 border-myWhite w-[10px] h-[28px] ml-2'}></div>
                      <div className={'border-2 border-myWhite w-[10px] h-[28px] ml-2'}></div>
                  </div>    
                    : ""}  

                    {props.sentStrength === 1 ? 
                      <div className='flex'>
                      <div className={types[props.sentStrength].bgColor + ' w-[10px] h-[28px]'}></div>
                      <div className={types[props.sentStrength].bgColor + ' w-[10px] h-[28px] ml-2'}></div>
                      <div className={'border-2 border-myWhite w-[10px] h-[28px] ml-2'}></div>
                      <div className={'border-2 border-myWhite w-[10px] h-[28px] ml-2'}></div>
                  </div>    
                    : ""}  

                    {props.sentStrength === 2 ? 
                      <div className='flex'>
                      <div className={types[props.sentStrength].bgColor + ' w-[10px] h-[28px]'}></div>
                      <div className={types[props.sentStrength].bgColor + ' w-[10px] h-[28px] ml-2'}></div>
                      <div className={types[props.sentStrength].bgColor + ' w-[10px] h-[28px] ml-2'}></div>
                      <div className={'border-2 border-myWhite w-[10px] h-[28px] ml-2'}></div>
                  </div>    
                    : ""}   

                    {props.sentStrength === 3 ? 
                      <div className='flex'>
                      <div className={types[props.sentStrength].bgColor + ' w-[10px] h-[28px]'}></div>
                      <div className={types[props.sentStrength].bgColor + ' w-[10px] h-[28px] ml-2'}></div>
                      <div className={types[props.sentStrength].bgColor + ' w-[10px] h-[28px] ml-2'}></div>
                      <div className={types[props.sentStrength].bgColor + ' w-[10px] h-[28px] ml-2'}></div>
                  </div>    
                    : ""}                            
            </div>
        </div> 
    </div>
  )
}
