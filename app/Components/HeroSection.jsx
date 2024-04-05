"use client";
import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation';


    

const HeroSection = () => {
  return (
    <section> 
        <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"> <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-300'>Hello, I am {" "} </span>
        <br />
        <TypeAnimation
      sequence={[
        'Nausheen',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Programmer',
        1000,
        'Tester',
        1000,
      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
</h1>
        <p className="text-[#ADB7BE] text:base sm:text-lg lg:text-xl">I am not just a coder; I am a well-rounded professional with a passion for problem-solving, leadership, and effective communication.</p>
       <div>
        <button className= "text-white w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-300 hover:bg-slate-300 px-6 py-3 mr-4 rounded-full">Hire Me</button>
        <button className=" px-1 py-1 bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-300 w-full sm:w-fit hover:bg-slate-200  hover:font-bold  mt-3 text-white rounded-full">
          <span className='block rounded-full bg-[#121212] hover:bg-slate-800  hover:text-white px-5 py-2'>Download CV
             </span>
          </button>
       </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:h-[400px] lg:w-[400px] relative">
                <Image 
                src="/images/hero-image.png" 
                width={300} 
                height={300} 
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' 
                alt="Hero Image" />
            </div>
        </div>
        </div>
    </section>
  )
}

export default HeroSection