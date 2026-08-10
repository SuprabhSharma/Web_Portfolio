import React from 'react'
import { assets } from '../assets/assets'
import { FaArrowRight, FaEnvelope, FaCode, FaBrain } from 'react-icons/fa6'

const Hero = () => {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center pt-24 pb-14 sm:pt-28 sm:pb-20 relative overflow-hidden'
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
        {/* Left Side Content */}
        <div className="w-full md:w-3/5 text-left z-10">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-dark-300/90 border border-purple/40 text-[11px] sm:text-xs font-semibold text-purple-light shadow-sm mb-3 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse"></span>
            <span>Available for Opportunities & Roles</span>
          </div>

          <h1 className="font-black leading-tight mb-3 sm:mb-4 tracking-tight">
            <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Hi, I'm
            </span>
            <span className="mt-1 sm:mt-2 block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-purple-light via-pink-hot to-cyan-glow bg-clip-text text-transparent">
              Suprabh Sharma
            </span>
          </h1>

          <div className="mb-4 sm:mb-5 max-w-full overflow-hidden">
            <h2 className='text-lg sm:text-2xl md:text-4xl font-bold typewriter text-cyan-glow'>
              Software Developer & AI Engineer
            </h2>
          </div>

          <p className='text-xs sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-xl leading-relaxed'>
            Building next-generation web applications, intelligent GenAI assistants, and high-performance backend microservices with cutting-edge technologies.
          </p>

          <div className='flex flex-wrap gap-3 sm:gap-4 items-center'>
            <a 
              href='#projects' 
              className='inline-flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 bg-gradient-to-r from-purple via-pink to-cyan text-white text-xs sm:text-base font-bold rounded-xl shadow-md hover:scale-105 active:scale-95 transition-transform duration-150'
            >
              <span>Explore My Work</span>
              <FaArrowRight className='text-xs sm:text-sm' />
            </a>

            <a 
              href='#contact' 
              className='inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 bg-dark-300 border border-purple/40 text-gray-200 text-xs sm:text-base font-semibold rounded-xl hover:bg-purple/20 hover:border-purple hover:text-white active:scale-95 transition-all duration-150'
            >
              <FaEnvelope className='text-purple-light text-xs sm:text-sm' />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Right Side 4D Cyber-Hologram Avatar */}
        <div className="w-full md:w-2/5 flex justify-center items-center py-4 sm:py-6">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-92 lg:h-92 flex items-center justify-center pointer-events-none select-none">
            
            {/* 4D Outer Cosmic Halo (GPU Blurred) */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple/25 via-pink-hot/20 to-cyan/25 blur-2xl pointer-events-none scale-105" />

            {/* 4D Orbital Ring 1 (Clockwise Neon Cyan-Violet Beam) */}
            <div className="animate-orbit-spin absolute inset-[-10px] sm:inset-[-14px] rounded-full border border-dashed border-cyan-glow/40 pointer-events-none">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-glow shadow-[0_0_10px_#22D3EE]"></div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-light shadow-[0_0_8px_#8B5CF6]"></div>
            </div>

            {/* 4D Orbital Ring 2 (Counter-Clockwise Neon Purple-Pink Beam) */}
            <div className="animate-orbit-reverse absolute inset-[-3px] sm:inset-[-5px] rounded-full border border-purple/40 pointer-events-none">
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-pink shadow-[0_0_10px_#EC4899]"></div>
            </div>

            {/* 4D Floating Avatar Core */}
            <div className="animate-float-4d relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full p-1 bg-gradient-to-tr from-purple-light via-pink to-cyan-glow shadow-[0_0_35px_rgba(139,92,246,0.35)] group pointer-events-auto">
              <div className="w-full h-full rounded-full overflow-hidden bg-dark-100 relative">
                <img
                  src={assets.profileImg}
                  alt="Portrait of Suprabh Sharma"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                  draggable={false}
                />
                {/* Holographic Specular Glint */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan/15 via-transparent to-purple/20 pointer-events-none"></div>
              </div>
            </div>

            {/* 4D Floating Spatial Badge 1 (Top-Left Satellite) */}
            <div className="animate-badge-1 absolute top-0 -left-1 sm:-left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-dark-300/95 border border-cyan/40 shadow-[0_0_12px_rgba(6,182,212,0.25)] backdrop-blur-sm pointer-events-auto">
              <div className="p-1 rounded-lg bg-cyan/20 text-cyan-glow text-[10px] sm:text-xs">
                <FaCode />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-white tracking-wide">Full Stack</span>
            </div>

            {/* 4D Floating Spatial Badge 2 (Bottom-Right Satellite) */}
            <div className="animate-badge-2 absolute bottom-0 -right-1 sm:-right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-dark-300/95 border border-purple/50 shadow-[0_0_12px_rgba(139,92,246,0.3)] backdrop-blur-sm pointer-events-auto">
              <div className="p-1 rounded-lg bg-purple/20 text-purple-light text-[10px] sm:text-xs">
                <FaBrain />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-white tracking-wide">GenAI & ML</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
