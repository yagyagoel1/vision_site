import { Container } from 'postcss'
import React from 'react'
import bhailoadhojaImage from '../assets/bhailoadhoja.jpeg';
const Event = () => {
  return (
    <div className='bg-[#010001] max-w  h-auto'>
      {//Container
      }

      <div className='text-white '>
        <div className="font-bold text-5xl px-7 py-10 ">CATEGORIES</div>
        <div className=' lg:px-15 xl:px-20 md:px-10 px-5 flex flex-col justify-start items-center sm:grid grid-cols-3 gap-2 '>
          <img className="col-span-2 " src={bhailoadhojaImage} alt="dsfds" />
          <div className=' col-span-1 px-5'>
            <div className='font-bold text-5xl xl:text-6xl  lg:text-5xl md:text-4xl sm:text-3xl'>BUILD-IT</div>
            <div className=' italic text-[#777676] px-5 lg:px-5 xl:px-9 sm:px-3 sm:text-xl lg:text-3xl text-2xl md:text-2xl'>"Hackathon"</div>
            <div className='xl:pt-[100px] pt-[20px] md:pt-[60px] sm:pt-[40px] xl:px-11 lg:px-8 md:px-7 px-7  '>
              <button className='bg-white text-black rounded-3xl py-2 md:py-3 sm:py-2 font-bold lg:text-xl text-xl px-7 sm:px-5 md:px-7 lg:px-10 xl:px-12'>Explore</button>
            </div>
          </div>
        </div>



        <div className=' py-8 lg:px-15 xl:px-20 md:px-10 px-5 flex sm:flex-row-reverse flex-col-reverse justify-end items-center sm:grid grid-cols-3 gap-2 '>
          <div className=' col-span-1 px-5'>
            <div className='font-bold text-5xl xl:text-6xl  lg:text-5xl md:text-4xl sm:text-3xl'>BUILD-IT</div>
            <div className=' italic text-[#777676] px-5 lg:px-5 xl:px-9 sm:px-3 sm:text-xl lg:text-3xl text-2xl md:text-2xl'>"Hackathon"</div>
            <div className='xl:pt-[100px] pt-[20px] md:pt-[60px] sm:pt-[40px] xl:px-11 lg:px-8 md:px-7 px-7  '>
              <button className='bg-white text-black rounded-3xl py-2 md:py-3 sm:py-2 font-bold lg:text-xl text-xl px-7 sm:px-5 md:px-7 lg:px-10 xl:px-12'>Explore</button>
            </div>
          </div>
          <img className="col-span-2 " src={bhailoadhojaImage} alt="dsfds" />
        </div>


        <div className='lg:px-15 xl:px-20 md:px-10 px-5 flex flex-col justify-start items-center sm:grid grid-cols-3 gap-2 '>
          <img className="col-span-2 " src={bhailoadhojaImage} alt="dsfds" />
          <div className=' col-span-1 px-5'>
            <div className='font-bold text-5xl xl:text-6xl  lg:text-5xl md:text-4xl sm:text-3xl'>BUILD-IT</div>
            <div className=' italic text-[#777676] px-5 lg:px-5 xl:px-9 sm:px-3 sm:text-xl lg:text-3xl text-2xl md:text-2xl'>"Hackathon"</div>
            <div className='xl:pt-[100px] pt-[20px] md:pt-[60px] sm:pt-[40px] xl:px-11 lg:px-8 md:px-7 px-7  '>
              <button className='bg-white text-black rounded-3xl py-2 md:py-3 sm:py-2 font-bold lg:text-xl text-xl px-7 sm:px-5 md:px-7 lg:px-10 xl:px-12'>Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event