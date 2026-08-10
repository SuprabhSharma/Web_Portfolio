import React from 'react'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
    return (
        <section id='about' className='py-20 sm:py-28 bg-dark-200/50 relative overflow-hidden'>
            {/* Subtle Futuristic Section Divider Beam */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-purple/40 to-transparent" />

            <div className='max-w-7xl mx-auto px-5 sm:px-6 lg:px-8'>
                {/* Heading */}
                <div className="text-center">
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-black mb-3 text-white tracking-tight'>
                        About <span className='bg-gradient-to-r from-purple-light via-pink to-cyan-glow bg-clip-text text-transparent'>Me</span>
                    </h2>
                    <p className='text-gray-400 max-w-2xl mx-auto mb-12 sm:mb-16 text-xs sm:text-sm md:text-base'>
                        Transforming ideas into high-impact software, scalable architectures, and intelligent systems
                    </p>
                </div>
                
                {/* Balanced Grid: Photo & Content perfectly aligned */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center'>
                    {/* Image Column (5 Columns on Desktop) - Face 100% visible with object-top */}
                    <div className='lg:col-span-5 flex justify-center'>
                        <div className='w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden border border-purple/30 hover:border-cyan-glow/60 transition-all duration-300 shadow-xl group bg-dark-300 relative'>
                            <img
                                loading="lazy"
                                decoding="async"
                                className='w-full h-[420px] sm:h-[480px] lg:h-[520px] object-cover object-top transition-transform duration-500 group-hover:scale-102'
                                src={assets.Suprabh}
                                alt='Suprabh Sharma'
                            />
                            {/* Subtle Bottom Ambient Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-300/80 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                    
                    {/* Text & Cards Column (7 Columns on Desktop) */}
                    <div className='lg:col-span-7 flex flex-col justify-between'>
                        <div>
                            <h3 className='text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-4 sm:mb-5 flex items-center gap-3'>
                                <span>My Engineering Journey</span>
                                <span className="w-10 h-[2px] bg-gradient-to-r from-purple to-cyan"></span>
                            </h3>
                            
                            <p className='text-gray-300 mb-4 text-xs sm:text-sm md:text-base leading-relaxed'>
                                I'm a passionate Software Developer and Computer Science engineer with a strong focus on building modern, high-performance web applications, backend APIs, and intelligent AI models. I love architecting real-world solutions using technologies like React, Python, FastAPI, Django, and SQL.
                            </p>
                            
                            <p className='text-gray-300 mb-8 text-xs sm:text-sm md:text-base leading-relaxed'>
                                I believe in writing clean, scalable code and delivering seamless user experiences. Always curious and driven to explore emerging AI technologies, solve complex algorithmic challenges, and build products with meaningful impact.
                            </p>
                        </div>
                        
                        {/* 3 Highlight Cards */}
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4'>
                            {aboutInfo.map((data, index) => (
                                <div 
                                    key={index} 
                                    className='bg-dark-300 rounded-2xl p-4 sm:p-5 border border-white/5 hover:border-purple/60 transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer group flex flex-col justify-between'
                                >
                                    <div>
                                        <div className='text-cyan-glow group-hover:text-pink text-2xl sm:text-3xl mb-2.5 transition-colors'>
                                            <data.icon/>
                                        </div>
                                        <h4 className='text-sm sm:text-base font-bold text-white mb-1'>{data.title}</h4>
                                    </div>
                                    <p className='text-gray-400 text-xs leading-relaxed'>{data.description}</p>   
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
