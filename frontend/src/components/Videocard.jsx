import React from 'react'
import sucker from '../assets/sucker.mp4'
const Videocard = () => {
  return (
    <div className='bg-[#010001] w-full h-auto pt-[100px] pb-[50px]'>
        <div className='bg-[#010001] px-4 md:px-10'>
        <video className='w-full h-[518px]' loop controls autoPlay muted>
            <source src={sucker} type='video/mp4'/>
        </video>
    </div>
    </div>
  )
}

export default Videocard