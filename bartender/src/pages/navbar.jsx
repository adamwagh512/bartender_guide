import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import logo from '../../public/Images/logo.jpg'


// Many individual styling comments were left out because I can automatically see them. To ensure that you can see them as well please make sure you are using
// The Tailwind CSS IntelliSense extention in your IDE.

const navbar = () => {
  // useState hook that sets nav to false by default
  const [nav, setNav] = useState(false);
  // declares a function called handleNav that sets nav to the opposite of whatever it was
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    // Controls the size and positioning of the navbar
    <div className="fixed top-0 w-full h-20 shadow-xl z-[100]">
      {/* Handles styling and positioning within navbar */}
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-[#8C1111]">
        {/* Imports image and controls sizing */}
        <Image
        src={logo}
        alt='logo'
        width='150'
        height='70'
        />
          
        <div className="hidden md:flex bg-[#070e26] text-white">
          <input className="text-black" type="text" name='drink_name' placeholder="Search for a Drink" />
          <button className="p-2">Submit</button>
        </div>


        {/* The following div will only be visible when the screen size > med, and we will use it to display our menu on mobile devices */}
        <div onClick={handleNav} className="md:hidden">
          {/* accessing icon from react icons dependency(to install: npm add react-icons) */}
          {/* Increased Icon size */}
          <AiOutlineMenu className="text-[#F2B950]" size={25} />
        </div>
      </div>
      {/* Overlay for when the mobile menu is activated */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Styling for the mobile menu bar */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-{75%} sm:w-[60%] md:[45%] h-screen bg-[#8C1111] p-10 ease-in duration-500"
              : // We set this to -100% fixed left so we can have the nice ease in feature
                "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            {/* Top part of the mobile menu */}
            <div className="flex w-full items-center justify-between">
              {/* Controls mobile logo */}
              <Image
                src={logo}
                width="120"
                height="35"
                alt="logo"
              />
              {/* Controls button to close mobile menu */}
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg border border-[#F2B950] p-3 cursor-pointer text-[#F2B950]"
              >
                <AiOutlineClose />
              </div>
            </div>
            {/* Controls headline*/}
            <div className="border-b border-white my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's find a recipe
              </p>
            </div>
          </div>
          {/* This div controls styling for mobile menu links */}
          <div className="py-4 flex flex-col">
            {/* Menu options for mobile menu */}
            <ul className="uppercase">
              <Link href="">
                <li onClick={()=> setNav(false)} className="py-4 text-sm uppercase">Search by spirit </li>
              </Link>
              <Link href="">
                <li onClick={()=> setNav(false)} className="py-4 text-sm uppercase">Search by glassware</li>
              </Link>
              <Link href="">
                <li onClick={()=> setNav(false)} className="py-4 text-sm uppercase">Search by category</li>
              </Link>
              <Link href="">
                <li onClick={()=> setNav(false)} className="py-4 text-sm uppercase">search by first letter</li>
              </Link>
              <Link href="">
                <li onClick={()=> setNav(false)} className="py-4 text-sm uppercase">Search for Random Drink</li>
              </Link>
              <Link href="">
                <li onClick={()=> setNav(false)} className="py-4 text-sm uppercase">Search by non-alcoholic</li>
              </Link>
              <Link href="/#contact">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Favorites</li>
              </Link>
            </ul>
            {/* This div is responsible for rendereing 'Lets Connect' near the bottom of the mobile menu */}
            <div className="pt-6">
              <p className="uppercase tracking-widest text-[#070e26]">
                Like the app?</p>
                <p className="uppercase tracking-widest text-[#070e26]">You are gonna love the developer</p>
              {/* This div is responsible for rendering social media icons to the bottom of the screen */}
              <div className="flex items-center justify-between my-4 w-[80%] sm:[80%]">
                <div className="rounded-full p-3 cursor-pointer hover:scale-105 ease in duration-100 border border-[#070e26]">
                <a href="https://www.linkedin.com/in/adam-wagh/" target='_blank'>
                  <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full p-3 cursor-pointer hover:scale-105 ease in duration-100 border border-[#070e26]">
                  <a href="https://github.com/adamwagh512">
                  <FaGithub />
                  </a>
                </div>
                <div className="rounded-full p-3 cursor-pointer hover:scale-105 ease in duration-100 border border-[#070e26]">
                  <a href="mailto:adamwagh@gmail.com">
                  <AiOutlineMail />
                  </a>
                </div>
                <div className="rounded-full p-3 cursor-pointer hover:scale-105 ease in duration-100 border border-[#070e26]">
                  <a href='/resume.pdf'
                      target="_blank"
                      className="color-[#070e26]"
                      rel="noreferrer">
                  <BsPersonLinesFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
