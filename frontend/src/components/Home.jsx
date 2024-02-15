import React from 'react'

const Home = () => {
    return (
        <div name = "home" className='bg-[#010001] max-w  h-screen '>
            <div className='  flex items-center justify-center flex-col pt-[300px] max-w'>
                <div className='text-6xl sm:text-7xl md:text-8xl  xl:text-9xl  tracking-wide sm:tracking-wide md:tracking-wider xl:tracking-widest text-white font-montserrat font-bold'>
                    THE VISION
                </div>

            </div>
            <div className=' text-[#777676]   xl:text-2xl md:text-xl  flex justify-center items-center flex-col '>
                <div className='py-[120px]'>Showcase what you leverage inside your idle mind</div>

                {//scroll
                }
                <div className='sm:pt-[7rem] md:pt-[6rem] xl:pt-[4rem] pt-[5rem] pb-7'>
                    <svg width="60" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_69_53)">
                        <path d="M30.895 29.127C30.4073 28.6393 29.6195 28.6393 29.1318 29.127L0.357991 57.8883C-0.117154 58.3885 -0.104728 59.1763 0.382962 59.6514C0.870652 60.1142 1.63349 60.1142 2.12118 59.6514L30.0071 31.7781L57.8804 59.6514C58.3806 60.1266 59.1684 60.1142 59.6436 59.6265C60.1063 59.1388 60.1063 58.3759 59.6436 57.8883L30.895 29.127Z" fill="#717171" />
                        <path d="M2.13372 30.8901L30.0071 3.01676L57.8804 30.8901C58.3806 31.3652 59.1684 31.3528 59.6436 30.8651C60.1063 30.3774 60.1063 29.6146 59.6436 29.1269L30.895 0.365767C30.4073 -0.121922 29.6195 -0.121922 29.1318 0.365767L0.357991 29.1269C-0.117154 29.6271 -0.104728 30.4149 0.382962 30.8901C0.883196 31.3654 1.64603 31.3654 2.13372 30.8901Z" fill="#717171" />
                    </g>
                        <defs>
                            <clipPath id="clip0_69_53">
                                <rect width="60" height="60" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className=''>scroll up</div>
            </div>
        </div>
    )
}

export default Home
