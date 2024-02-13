import React, { useState } from 'react'

const Card = ({ title, des, id }) => {
    const [bigCard, setBigCard] = useState(true);
    const changestate = () => {
        setBigCard(bigCard => !bigCard)
    }
    return (
        <div>
            {//onMouseEnter={changestate} onMouseLeave={changestate}
            }
            <div className='w-[371px] h-[548px] shadow-[12px_9px_4px]  shadow-stone-800 flex flex-col items-center rounded-[50px] bg-[#d9d9d9]'>
                <div className="underline font-medium py-[40px] text-4xl">{id}</div>
                <div className='font-semibold text-xl pb-16'>{title}</div>
                <div className='font-base text-lg px-5'>{des}</div>
            </div>
            <div className={bigCard ? 'hidden' : ' absolute h-screen w-full opacity-90 z-10 flex justify-center items-center bg-[#010001]'}>
                <div className=" w-[775px] h-[548px] flex flex-col items-center rounded-[50px] bg-[#d9d9d9]">
                    <div className="underline font-medium py-[40px] text-4xl">{id}</div>
                    <div className='font-semibold text-xl pb-16'>{title}</div>
                    <div className='font-base text-lg px-5'>{des}</div>
                </div>
            </div>
        </div>
    )
}


export default Card