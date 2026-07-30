import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaLocationDot, FaPhone } from 'react-icons/fa6'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='contact'
      className='py-20 bg-dark-200'
    >
      <div className='max-w-7xl mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>Get In <span className='text-purple'>Touch</span></h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-12'>Have a Project in mind or want to collaborate? Let's Talk!</p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto'>
          <form className='space-y-6'>
            <div>
              <label htmlFor='name' className='block text-gray-300 mb-2'>Your Name</label>
              <input id='name' type='text' className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
            </div>
            <div>
              <label htmlFor='email' className='block text-gray-300 mb-2'>Email Address</label>
              <input id='email' type='email' className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
            </div>
            <div>
              <label htmlFor='message' className='block text-gray-300 mb-2'>Your Message</label>
              <textarea id='message' className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
            </div>
            <button type='submit' className='contact-submit w-full px-6 py-3 bg-purple rounded-lg font-medium text-white transition duration-300 cursor-pointer'>
              Send Message
            </button>
          </form>

          <div className='rounded-2xl border border-dark-400 bg-dark-300 p-6 sm:p-8'>
            <h3 className='text-2xl font-semibold mb-6'>Contact Details</h3>
            <div className='space-y-5 text-gray-300'>
              <a href='https://www.google.com/maps/search/?api=1&query=Greater+Noida+Gaur+City+Uttar+Pradesh' target='_blank' rel='noreferrer' className='flex items-start gap-4 hover:text-purple transition duration-300'>
                <FaLocationDot className='mt-1 shrink-0 text-xl text-purple' />
                <span>Greater Noida, Gaur City, Uttar Pradesh</span>
              </a>
              <a href='tel:+919756455554' className='flex items-center gap-4 hover:text-purple transition duration-300'>
                <FaPhone className='shrink-0 text-lg text-purple' />
                <span>+91 97564 55554</span>
              </a>
              <a href='mailto:sharmasuprabh2608@gmail.com' className='flex items-center gap-4 break-all hover:text-purple transition duration-300'>
                <FaEnvelope className='shrink-0 text-xl text-purple' />
                <span>sharmasuprabh2608@gmail.com</span>
              </a>
            </div>

            <div className='mt-8 border-t border-dark-400 pt-6'>
              <p className='mb-4 text-sm text-gray-400'>Find me online</p>
              <div className='flex flex-wrap gap-4'>
                <a href='https://www.linkedin.com/in/suprabh-sharma-13321b2a5?utm_source=share_via&utm_content=profile&utm_medium=member_android' target='_blank' rel='noreferrer' aria-label='LinkedIn' className='rounded-full border border-dark-400 p-3 text-xl text-gray-300 hover:border-purple hover:text-purple transition duration-300'><FaLinkedin /></a>
                <a href='https://www.instagram.com/sharma__ba52?igsh=cnowM3RoOWFpNnp6' target='_blank' rel='noreferrer' aria-label='Instagram' className='rounded-full border border-dark-400 p-3 text-xl text-gray-300 hover:border-purple hover:text-purple transition duration-300'><FaInstagram /></a>
                <a href='https://github.com/SuprabhSharma' target='_blank' rel='noreferrer' aria-label='GitHub' className='rounded-full border border-dark-400 p-3 text-xl text-gray-300 hover:border-purple hover:text-purple transition duration-300'><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>

        <p className='mt-12 text-center text-sm text-gray-400'>© {new Date().getFullYear()} Suprabh Sharma. All rights reserved.</p>
      </div>
    </motion.div>
  )
}

export default Contact
