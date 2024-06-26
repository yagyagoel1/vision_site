import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
const Navbar = () => {
  const [nav, setNav] = useState(true);

  const toggleNav = () => {
    setNav((prevNav) => !prevNav);
    const body = document.body;
    body.style.overflow = nav ? 'hidden' : 'auto';
  };

  return (
    <div className='fixed text-white bg-[#010001] px-4 py-5 w-full max-h-screen flex z-20 justify-between'>
      <div>
        {/* Your actual logo or brand */}
        <svg width="300" height="24" viewBox="0 0 300 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.1399 19.2L10.9937 21.0667L0 13.4095L10.9937 5.40952L13.1399 7.27619L4.37996 13.4095L13.1399 19.2ZM32.3912 0L20.3025 24H17.0613L29.2814 0H32.3912ZM53.6151 18.6667C53.6151 19.4032 53.3085 20.0381 52.6953 20.5714C52.1114 21.0794 51.3961 21.3333 50.5491 21.3333H38.2852C37.4385 21.3333 36.7085 21.0794 36.0953 20.5714C35.5114 20.0381 35.2193 19.4032 35.2193 18.6667V5.33333C35.2193 4.59683 35.5114 3.9746 36.0953 3.46667C36.7085 2.93333 37.4385 2.66667 38.2852 2.66667H50.5491C51.3961 2.66667 52.1114 2.93333 52.6953 3.46667C53.3085 3.9746 53.6151 4.59683 53.6151 5.33333V8H50.1111V5.33333H38.7232V18.6667H50.1111V16H53.6151V18.6667ZM77.7238 13.3333C77.7238 14.0698 77.4172 14.7048 76.804 15.2381C76.2201 15.746 75.5045 16 74.6578 16H70.2779V21.3333H66.7739V16H62.3939C61.5472 16 60.8171 15.746 60.2039 15.2381C59.62 14.7048 59.3279 14.0698 59.3279 13.3333V2.66667H62.8319V13.3333H74.2198V2.66667H77.7238V13.3333ZM103.109 13.3333C103.109 14.0445 102.802 14.6667 102.189 15.2C101.576 15.7333 100.86 16 100.043 16H88.2168V21.3333H84.7128V8L87.7788 5.33333H84.7128V2.66667H100.043C100.86 2.66667 101.576 2.93333 102.189 3.46667C102.802 4 103.109 4.62221 103.109 5.33333V13.3333ZM99.6047 13.3333V5.33333H88.2168V15.619L90.8448 13.3333H99.6047ZM128.73 21.3333H125.226V13.3333H113.838V21.3333H110.334V2.66667H113.838V12.9524L116.466 10.6667H125.226V2.66667H128.73V21.3333ZM151.927 21.3333H136.597V8L139.663 5.33333H136.597V2.66667H151.927V5.33333H140.101V12.9524L142.729 10.6667H151.927V13.3333H140.101V18.6667H151.927V21.3333ZM177.33 21.3333H172.863L163.753 13.3333H173.388V5.33333H162.001V21.3333H158.497V7.96191L161.563 5.33333H158.497V2.66667H173.826C174.644 2.66667 175.359 2.93333 175.973 3.46667C176.586 4 176.892 4.62221 176.892 5.33333V12.5714C176.892 14.6032 175.87 15.619 173.826 15.619H171.198V16.0381L177.33 21.3333ZM210.635 18.6667C210.635 19.4032 210.328 20.0381 209.715 20.5714C209.131 21.0794 208.416 21.3333 207.569 21.3333H195.305C194.459 21.3333 193.728 21.0794 193.115 20.5714C192.531 20.0381 192.239 19.4032 192.239 18.6667V5.33333C192.239 4.59683 192.531 3.9746 193.115 3.46667C193.728 2.93333 194.459 2.66667 195.305 2.66667H207.569C208.416 2.66667 209.131 2.93333 209.715 3.46667C210.328 3.9746 210.635 4.59683 210.635 5.33333V8H207.131V5.33333H195.743V18.6667H207.131V16H210.635V18.6667ZM232.554 21.3333H217.224V2.66667H220.728V18.6667H229.05V16H232.554V21.3333ZM255.338 21.3333H251.834V19.0476L249.206 21.3333H240.008C239.161 21.3333 238.431 21.0794 237.818 20.5714C237.234 20.0381 236.942 19.4032 236.942 18.6667V2.66667H240.446V18.6667H251.834V2.66667H255.338V21.3333ZM281.601 18.6667C281.601 19.4032 281.295 20.0381 280.682 20.5714C280.096 21.0794 279.381 21.3333 278.535 21.3333H263.205V8L266.271 5.33333H263.205V2.66667H275.469C276.315 2.66667 277.03 2.93333 277.616 3.46667C278.229 3.9746 278.535 4.59683 278.535 5.33333V10.6667H278.623C279.469 10.6667 280.17 10.9333 280.725 11.4667C281.309 11.9746 281.601 12.5968 281.601 13.3333V18.6667ZM275.031 10.6667V5.33333H266.709V12.9524L269.337 10.6667H275.031ZM278.097 18.6667V13.3333H266.709V18.6667H278.097ZM295.62 13.4095L286.86 7.27619L289.006 5.40952L300 13.4095L289.006 21.0667L286.86 19.2L295.62 13.4095Z" fill="white" />
        </svg>
      </div>
      <div className='hidden md:block pb-0.5'>
        <ul className='flex justify-around'>
          <li className='px-2 text-lg font-medium cursor-pointer'> <Link
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
          
          >Home
          </Link></li>
          <li className='px-2 text-lg font-medium cursor-pointer'> <Link
            activeClass="active"
            to="event"
            offset={-50}
            smooth={true}
            duration={500}
           
          >Events
          </Link></li>
          <li className='px-2 text-lg font-medium cursor-pointer'>Team</li>
          <li className='px-2 text-lg font-medium cursor-pointer'>Timeline</li>
          <li className='px-2 text-lg font-medium cursor-pointer'>Contact Us</li>
        </ul>
      </div>
      <div className='md:hidden font-medium text-xl z-10 pt-0.5'>
        <button onClick={toggleNav}>{nav ? <FaBars /> : <FaTimes />}</button>
      </div>
      <ul className={nav ? 'hidden' : 'font-medium opacity-90 absolute top-0 left-0 w-full h-screen bg-[#010001] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl cursor-pointer'><Link
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
          
          >Home
          </Link></li>
        <li className='py-6 text-4xl cursor-pointer'><Link
            activeClass="active"
            to="event"
            offset={-50}
            smooth={true}
            duration={500}
           
          >Events
          </Link></li>
        <li className='py-6 text-4xl cursor-pointer'>Team</li>
        <li className='py-6 text-4xl cursor-pointer'>Timeline</li>
        <li className='py-6 text-4xl cursor-pointer'>Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
