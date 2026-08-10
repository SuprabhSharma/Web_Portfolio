import React from 'react'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaGithub } from 'react-icons/fa6';

const Projects = () => {
  return (
    <section id='projects' className='py-20 sm:py-28 bg-dark-200/50 relative overflow-hidden'>
      {/* Subtle Futuristic Section Divider Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-pink/40 to-transparent" />

      <div className='max-w-7xl mx-auto px-5 sm:px-6 lg:px-8'>
        <div className="text-center">
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-black mb-3 text-white tracking-tight'>
            Featured <span className='bg-gradient-to-r from-purple-light via-pink to-cyan-glow bg-clip-text text-transparent'>Projects</span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto mb-12 sm:mb-16 text-xs sm:text-sm md:text-base'>
            Real-world applications in Artificial Intelligence, Computer Vision, Data Science, and Full Stack Web
          </p>
        </div>

        {/* 100% Equal Height Responsive Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch'>
          {projects.map((project, index) => (
            <div key={index} className="h-full">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className='text-center mt-12 sm:mt-14'>
          <a 
            href="https://github.com/SuprabhSharma" 
            target="_blank" 
            rel="noreferrer"
            className='inline-flex items-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 bg-dark-300 border border-purple/40 rounded-xl text-sm sm:text-base font-bold text-white hover:border-cyan-glow hover:text-cyan-glow active:scale-98 transition-all duration-150'
          >
            <FaGithub className='text-base sm:text-lg' />
            <span>Explore More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
