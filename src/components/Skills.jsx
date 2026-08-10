import React from 'react'
import { skills } from '../assets/assets'

const Skills = () => {
  return (
    <section id='skills' className='py-20 sm:py-28 bg-dark-100 relative overflow-hidden'>
      {/* Subtle Futuristic Section Divider Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-black mb-3 text-white tracking-tight'>
            Technical <span className='bg-gradient-to-r from-purple-light via-pink to-cyan-glow bg-clip-text text-transparent'>Skills</span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto mb-12 sm:mb-16 text-xs sm:text-sm md:text-base'>
            Technologies, frameworks, and modern developer tooling I master to build intelligent systems
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 max-w-6xl mx-auto'>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className='group bg-dark-300 rounded-2xl p-5 sm:p-6 border border-white/5 hover:border-purple/60 transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer'
            >
              <div className='flex items-center mb-3.5'>
                <div className='p-2.5 sm:p-3 bg-dark-200 border border-white/10 rounded-xl mr-3.5 text-cyan-glow group-hover:text-purple-light transition-colors'>
                  <skill.icon className='w-6 h-6 sm:w-7 sm:h-7' />
                </div>
                <h3 className='text-base sm:text-lg font-bold text-white group-hover:text-cyan-glow transition-colors'>{skill.title}</h3>
              </div>
              <p className='text-gray-400 mb-4 text-xs sm:text-sm leading-relaxed'>{skill.description}</p>
              <div className='flex flex-wrap gap-1.5 sm:gap-2'>
                {skill.tags.map((tech, i) => (
                  <span 
                    key={i} 
                    className='text-[11px] sm:text-xs font-semibold bg-dark-200 border border-white/10 text-gray-300 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
