"use client"; 
import React, {useState} from 'react'
import NavLink from '../Navlinks'
import {Bars3Icon,XMarkIcon} from '@heroicons/react/20/solid'
import MenuOverlay from '../MenuOverlay';

const navlink = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '#about',
    title: 'About',
  },
  {
    path: '#projects',
    title: 'Projects',
  },
  {
    path: '#skills',
    title: 'Skills',
  },
]
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="top-0 w-full fixed left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
    <div className="flex flex-wrap items-center justify-between mx-auto mt-0 px-4 py-2">
        
            <div className=" text-2xl md:text-5xl text-white font-semibold">Portfolio</div>
            <span>toggle</span>
        <div className='mobile-menu block md:hidden'>
          {
            !navbar? (
              <button
              onClick={() => setNavbar(true)}
               className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'><Bars3Icon className='h-5 w-5'></Bars3Icon></button>
            ):(
              <button
              onClick={() => setNavbar(false)}
              className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white' ><XMarkIcon className='h-5 w-5'></XMarkIcon></button>
            )
          }
        </div>
        <div className="menu hidden md:block md:w-auto" id='navbar'>
        
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                {
                 navlink.map((link, index) => (
                    <li key={index} className="inline-block md:mx-4">
                        <NavLink href={link.path} title={link.title} />
                    </li>
                ))}
               
            </ul>
        </div>
    </div>
    {navbar ? <MenuOverlay links={navlink} /> : null}
</nav>  
  )
}

export default Navbar