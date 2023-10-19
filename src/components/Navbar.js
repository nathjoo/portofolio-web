// import logo from '../assets/Tasty Good.png';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const textStyleNavbar =
    'p-4 hover:bg-slate-400 hover:text-white rounded-lg text-[20px] font-normal';

  return (
    <div className="flex justify-between items-center shadow-lg h-[64px] medium:h-[64px] xl:h-24 mx-auto px-[16px] medium:px-[96px] bg-blue w-full fixed bg-white mt-0 z-10">
      <div className="flex items-center w-[120px] h-[40px] pt-1 medium:w-[164px] medium:h-[32px]">
        {/* <img src={logo} /> */}
      </div>
      <ul className="hidden xl:flex">
        <li className="p-4 hover:bg-slate-400 rounded-lg hover:text-white">
          Signature Dishes
        </li>
        <li className="p-4 hover:bg-slate-400 rounded-lg hover:text-white">
          Promo
        </li>
        <li className="p-4 hover:bg-slate-400 rounded-lg hover:text-white">
          Book a Table
        </li>
        <li className="p-4 hover:bg-slate-400 rounded-lg hover:text-white">
          Membership
        </li>
        <li className="p-4 hover:bg-slate-400 rounded-lg hover:text-white">
          Location
        </li>
        <li className="p-4 hover:bg-slate-400 rounded-lg hover:text-white">
          Career
        </li>
      </ul>
      <div onClick={handleNav} className="block xl:hidden">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[80%] medium:w-[45%] h-full shadow-2xl bg-white ease-in-out duration-500 xl:left-[-100%]'
            : 'fixed left-[-100%]'
        }
      >
        <div className="w-[210px] xl:h-[40px] pt-1 mb-4 medium:w-[164px] medium:h-[32px]">
          {/* <img src={logo} className="pt-[24px] pl-[16px]" /> */}
        </div>
        <ul className="p-4 pt-8">
          <li className={textStyleNavbar}>Signature Dishes</li>
          <li className={textStyleNavbar}>Promo</li>
          <li className={textStyleNavbar}>Book a Table</li>
          <li className={textStyleNavbar}>Membership</li>
          <li className={textStyleNavbar}>Location</li>
          <li className={textStyleNavbar}>Career</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
