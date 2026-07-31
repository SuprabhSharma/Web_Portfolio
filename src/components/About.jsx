import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-dark-200'
        >
            <div className='max-w-7xl  mx-auto px-6'>
                {/*Heading*/}
                <h2 className='text-3xl font-bold text-center mb-4'>About
                    <span className='text-purple '>Me</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to Know about my background and passion</p>
                {/*Image and MyJourney*/}
                <div className='flex flex-col md:flex-row items-center gap-12'>
                    {/*Image*/}
                    <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount:0.2 }}
                            className='max-w-full h-auto rounded-2xl'
                            src={assets.Suprabh}
                            alt='Suprabh'
                        />

                    </div>
                    {/*Text content*/}
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    viewport={{ once: false, amount:0.2 }}
                    className='md:w-1/2'>
                        <div className='rounded-2xl p-8'>
                            <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                            <p className='text-gray-300 mb-6'>I'm a passionate Software Developer and Computer Science student
                             with a strong interest in building modern, user-friendly web applications.
                             I enjoy turning ideas into real-world solutions using technologies like React,
                             Python, FastAPI, SQL, and JavaScript while continuously learning and improving my skills.</p>
                            <p className='text-gray-300 mb-12'>I believe in writing clean, maintainable code and creating applications that are both functional
                                 and visually appealing. I'm always eager to explore new technologies,
                                 solve challenging problems, and contribute to projects that make a meaningful impact.</p>
                            {/*Cards */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {   aboutInfo.map((data, index) => (
                                        <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:translate-y-2 cursor-pointer'>
                                            <div className='text-purple text-4xl mb-4'>
                                                <data.icon/>
                                            </div>
                                            <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                            <p className='text-gray-400'>{data.description}</p>   

                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default About
