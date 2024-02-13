import React, { useState } from 'react'
import Card from './Card'

const Buildit = () => {
    
    const cards = [{
        id:"#1",
        title : "SOS FOR SAFETY AND SECURITY",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id:"#2",
        title : "SOS FOR SAFETY AND SECURITY",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id:"#3",
        title : "SOS FOR SAFETY AND SECURITY",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id:"#4",
        title : "SOS FOR SAFETY AND SECURITY",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id:"#5",
        title : "SOS FOR SAFETY AND SECURITY",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },]
    
  return (
    <div className='bg-[#010001] w-full h-auto flex flex-col items-center justify-center'>
        <div className='font-bold text-white xl:text-7xl text-6xl '>B U I L D - I T</div>
        <div className='xl:text-6xl md:text-5xl text-xl text-[#777676] italic'>"Be the one to become the messiah"</div>
        <div className=' py-10 grid xl:grid-cols-3 md:grid-cols-2 grid-col-1 gap-10 flex justify-items-center'>
        {cards.map(card=><Card id={card.id} title={card.title} des={card.des} ></Card>)}
    </div>
    </div>
  )
}

export default Buildit