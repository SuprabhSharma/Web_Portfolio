import React from 'react'
import { workData } from '../assets/assets'

const Work = () => {
  return (
    <section id='experience' className='py-20 sm:py-28 bg-dark-100 relative overflow-hidden'>
      {/* Subtle Futuristic Section Divider Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-purple/40 to-transparent" />

      <div className='max-w-7xl mx-auto px-5 sm:px-6 lg:px-8'>
        <div className="text-center">
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-black mb-3 text-white tracking-tight'>
            Work <span className='bg-gradient-to-r from-purple-light via-pink to-cyan-glow bg-clip-text text-transparent'>Experience</span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto mb-12 sm:mb-16 text-xs sm:text-sm md:text-base'>
            Professional journey, technical leadership, and engineering achievements
          </p>
        </div>

        <div className='max-w-3xl mx-auto'>
          <div className='space-y-8 sm:space-y-10'>
            {workData.map((data, index) => (
              <div 
                key={index} 
                className="relative pl-6 sm:pl-9 before:content-[''] before:absolute before:left-0 before:top-2 before:w-[2px] before:h-full before:bg-gradient-to-b before:from-cyan-glow before:via-purple before:to-transparent"
              >
                {/* Milestone Dot */}
                <div className='absolute -left-[5px] top-1.5 w-3 h-3 rounded-full bg-cyan-glow shadow-[0_0_8px_#22D3EE]'></div>

                {/* Card */}
                <div className='bg-dark-300 rounded-2xl p-5 sm:p-7 border border-white/5 hover:border-purple/70 transition-all duration-200 hover:-translate-y-1'>
                  <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5 mb-2'>
                    <h3 className='text-base sm:text-lg md:text-xl font-bold text-white'>{data.role}</h3>
                    <span className='w-fit px-3 py-0.5 bg-gradient-to-r from-purple/20 to-cyan/20 text-cyan-glow border border-cyan/30 rounded-full text-[11px] sm:text-xs font-bold tracking-wide'>
                      {data.duration}
                    </span>
                  </div>

                  <p className='text-purple-light font-semibold text-xs sm:text-sm mb-3 sm:mb-4'>{data.company}</p>

                  {data.highlights ? (
                    <ul className='space-y-2 text-gray-300 text-xs sm:text-sm leading-relaxed'>
                      {data.highlights.map((point, i) => (
                        <li key={i} className='flex items-start gap-2.5'>
                          <span className='w-1.5 h-1.5 rounded-full bg-cyan-glow mt-1.5 shrink-0'></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className='text-gray-300 text-xs sm:text-sm leading-relaxed'>{data.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work