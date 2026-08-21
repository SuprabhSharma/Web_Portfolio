import React from 'react'
import { FaArrowUpRightFromSquare, FaCode } from 'react-icons/fa6'

const ProjectCard = ({ title, description, image, tech, demo }) => {
  return (
    <article className='h-full flex flex-col justify-between bg-dark-300/90 rounded-2xl overflow-hidden border border-white/5 hover:border-purple/70 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg group'>
      {/* Top Image & Content Container */}
      <div className='flex flex-col flex-1'>
        {/* Image */}
        <div className='overflow-hidden relative h-48 w-full shrink-0'>
          <img 
            src={image} 
            alt={`${title} - Project by Suprabh Sharma`} 
            loading="lazy"
            decoding="async"
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent opacity-80 pointer-events-none"></div>
        </div>
        
        {/* Text Content */}
        <div className='p-5 flex flex-col flex-1 justify-between'>
          <div>
            <h3 className='text-lg font-bold mb-2 text-white group-hover:text-cyan-glow transition-colors line-clamp-1'>
              {title}
            </h3>
            <p className='text-gray-400 mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3 min-h-[3.6rem]'>
              {description}
            </p>
          </div>
          
          {/* Tech Badges */}
          <div className='flex flex-wrap gap-1.5 pt-2'>
            {tech && tech.map((item, index) => (
              <span 
                key={index} 
                className='px-2.5 py-0.5 bg-dark-200/90 border border-white/10 text-gray-300 rounded-full text-[11px] font-semibold'
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action Footer - Equal Height Across ALL Cards */}
      <div className='p-5 pt-0 mt-auto'>
        {demo ? (
          <a
            href={demo}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-gradient-to-r from-purple via-pink to-cyan text-white text-xs font-bold rounded-xl shadow-md hover:shadow-lg active:scale-98 transition-all duration-150'
          >
            <span>Live Interactive Demo</span>
            <FaArrowUpRightFromSquare className='text-xs' />
          </a>
        ) : (
          <div className='flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-dark-200/80 border border-white/5 text-gray-400 text-xs font-semibold rounded-xl'>
            <FaCode className='text-xs text-purple-light' />
            <span>Core Engineering System</span>
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
