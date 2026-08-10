import React from 'react'
import { assets } from '../assets/assets'
import { FaArrowRight, FaEnvelope, FaCode, FaBrain } from 'react-icons/fa6'

const Hero = () => {
  return (
    <section
      id='home'
      className='min-h-svh w-full flex flex-col justify-center items-center pt-16 pb-6 sm:pt-20 sm:pb-8 relative overflow-hidden'
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-12 w-full my-auto">
        
        {/* Left Side Content (Text & CTAs) */}
        <div className="w-full md:w-3/5 text-center md:text-left z-10 flex flex-col items-center md:items-start">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-300 border border-purple/40 text-[10px] sm:text-xs font-semibold text-purple-light shadow-sm mb-2 sm:mb-3 md:mb-4">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green animate-pulse"></span>
            <span>Available for Opportunities & Roles</span>
          </div>

          <h1 className="font-black leading-tight mb-1.5 sm:mb-2 md:mb-3 tracking-tight">
            <span className="block text-xl sm:text-3xl md:text-5xl lg:text-6xl text-white">
              Hi, I'm
            </span>
            <span className="mt-0.5 block text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-purple-light via-pink-hot to-cyan-glow bg-clip-text text-transparent">
              Suprabh Sharma
            </span>
          </h1>

          <div className="mb-2 sm:mb-3 md:mb-4 max-w-full overflow-hidden flex justify-center md:justify-start">
            <h2 className='text-base sm:text-xl md:text-3xl lg:text-4xl font-bold typewriter text-cyan-glow'>
              Software Developer & AI Engineer
            </h2>
          </div>

          <p className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed'>
            Building next-generation web applications, intelligent GenAI assistants, and high-performance backend microservices with cutting-edge technologies.
          </p>

          <div className='flex flex-wrap gap-2.5 sm:gap-3.5 items-center justify-center md:justify-start'>
            <a 
              href='#projects' 
              className='inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-purple via-pink to-cyan text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:scale-105 active:scale-95 transition-transform duration-150'
            >
              <span>Explore My Work</span>
              <FaArrowRight className='text-xs' />
            </a>

            <a 
              href='#contact' 
              className='inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-dark-300 border border-purple/40 text-gray-200 text-xs sm:text-sm font-semibold rounded-xl hover:bg-purple/20 hover:border-purple hover:text-white active:scale-95 transition-all duration-150'
            >
              <FaEnvelope className='text-purple-light text-xs' />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Right Side 4D Cyber-Hologram Avatar */}
        <div className="w-full md:w-2/5 flex justify-center items-center py-2 sm:py-4">
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-76 md:h-76 lg:w-88 lg:h-88 flex items-center justify-center pointer-events-none select-none">
            
            {/* 4D Outer Cosmic Halo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple/25 via-pink-hot/20 to-cyan/25 blur-2xl pointer-events-none scale-105" />

            {/* 4D Orbital Ring 1 */}
            <div className="animate-orbit-spin absolute inset-[-6px] sm:inset-[-10px] md:inset-[-12px] rounded-full border border-dashed border-cyan-glow/40 pointer-events-none">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-glow shadow-[0_0_8px_#22D3EE]"></div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-light shadow-[0_0_6px_#8B5CF6]"></div>
            </div>

            {/* 4D Orbital Ring 2 */}
            <div className="animate-orbit-reverse absolute inset-[-2px] sm:inset-[-3px] md:inset-[-4px] rounded-full border border-purple/40 pointer-events-none">
              <div className="absolute top-1/2 -left-1 sm:-left-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-pink shadow-[0_0_8px_#EC4899]"></div>
            </div>

            {/* 4D Floating Avatar Core */}
            <div className="animate-float-4d relative w-36 h-36 sm:w-46 sm:h-46 md:w-60 md:h-60 lg:w-68 lg:h-68 rounded-full p-1 bg-gradient-to-tr from-purple-light via-pink to-cyan-glow shadow-[0_0_25px_rgba(139,92,246,0.35)] group pointer-events-auto">
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

            {/* 4D Floating Spatial Badge 1 */}
            <div className="animate-badge-1 absolute top-0 -left-1 sm:-left-2 z-20 flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-dark-300/95 border border-cyan/40 shadow-sm backdrop-blur-sm pointer-events-auto">
              <div className="p-0.5 rounded bg-cyan/20 text-cyan-glow text-[8px] sm:text-[10px]">
                <FaCode />
              </div>
              <span className="text-[8px] sm:text-[10px] font-bold text-white tracking-wide">Full Stack</span>
            </div>

            {/* 4D Floating Spatial Badge 2 */}
            <div className="animate-badge-2 absolute bottom-0 -right-1 sm:-right-2 z-20 flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-dark-300/95 border border-purple/50 shadow-sm backdrop-blur-sm pointer-events-auto">
              <div className="p-0.5 rounded bg-purple/20 text-purple-light text-[8px] sm:text-[10px]">
                <FaBrain />
              </div>
              <span className="text-[8px] sm:text-[10px] font-bold text-white tracking-wide">GenAI & ML</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
