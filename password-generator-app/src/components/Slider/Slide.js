import React, { useState } from 'react'
import Slider from '@mui/material/Slider';
import "./Slide.css"

export default function Slide() {
  const [mainValue, setMainValue] = useState(10);
  
  return (
    <div className='w-11/12 mt-5 mr-auto ml-auto pt-6 bg-myGrey pb-8'>        
      <div className='flex items-center flex-col'>
        <div className='w-full pl-8 pr-8 flex justify-between items-center'>
          <h1 className='text-myWhite text-lg font-bold'>Character Length</h1>
          <h2 className='text-myGreen text-3xl font-bold'>{mainValue}</h2>
        </div>
      <div className='w-full pl-8 pr-8 mt-2'>
        <Slider
          defaultValue={mainValue}
          min={0}
          max={20}
          step={1}
          aria-label="Small"
          color="secondary"
          valueLabelDisplay="auto"
          onChange={(e) => setMainValue(e.target.value)}
        />
      </div>
      </div>
    </div>
  )
}
