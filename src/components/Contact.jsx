import React from 'react'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaLocationDot, FaPhone, FaPaperPlane } from 'react-icons/fa6'

const Contact = () => {
  return (
    <section id='contact' className='py-20 sm:py-28 bg-dark-200/50 relative overflow-hidden'>
      {/* Subtle Futuristic Section Divider Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />

      <div className='max-w-7xl mx-auto px-5 sm:px-6 lg:px-8'>
        <div className="text-center">
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-black mb-3 text-white tracking-tight'>
            Get In <span className='bg-gradient-to-r from-purple-light via-pink to-cyan-glow bg-clip-text text-transparent'>Touch</span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto mb-12 sm:mb-16 text-xs sm:text-sm md:text-base'>
            Have a project in mind, open roles, or want to collaborate? Let's build something extraordinary together!
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 max-w-5xl mx-auto'>
          {/* Form Card */}
          <form className='space-y-4 sm:space-y-5 bg-dark-300 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/5 hover:border-purple/60 transition-all duration-200'>
            <div>
              <label htmlFor='name' className='block text-gray-200 mb-1.5 text-xs sm:text-sm font-semibold'>Your Name</label>
              <input 
                id='name' 
                type='text' 
                placeholder='John Doe'
                className='w-full bg-dark-200 border border-white/10 rounded-xl px-3.5 py-3 text-white text-xs sm:text-sm outline-none focus:border-cyan-glow transition-all' 
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-gray-200 mb-1.5 text-xs sm:text-sm font-semibold'>Email Address</label>
              <input 
                id='email' 
                type='email' 
                placeholder='john@example.com'
                className='w-full bg-dark-200 border border-white/10 rounded-xl px-3.5 py-3 text-white text-xs sm:text-sm outline-none focus:border-cyan-glow transition-all' 
              />
            </div>
            <div>
              <label htmlFor='message' className='block text-gray-200 mb-1.5 text-xs sm:text-sm font-semibold'>Your Message</label>
              <textarea 
                id='message' 
                placeholder='Tell me about your project or opportunity...'
                className='w-full h-32 sm:h-36 bg-dark-200 border border-white/10 rounded-xl px-3.5 py-3 text-white text-xs sm:text-sm outline-none focus:border-cyan-glow transition-all resize-none' 
              />
            </div>
            <button 
              type='submit' 
              className='inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 bg-gradient-to-r from-purple via-pink to-cyan text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:shadow-lg active:scale-98 transition-all duration-150 cursor-pointer'
            >
              <span>Send Message</span>
              <FaPaperPlane className='text-xs' />
            </button>
          </form>

          {/* Details Card */}
          <div className='rounded-2xl sm:rounded-3xl border border-white/5 bg-dark-300 p-5 sm:p-8 hover:border-cyan-glow/60 transition-all duration-200 flex flex-col justify-between'>
            <div>
              <h3 className='text-xl sm:text-2xl font-black text-white mb-6'>Direct Contact Info</h3>
              <div className='space-y-5 text-gray-300 text-xs sm:text-sm md:text-base'>
                <a 
                  href='https://www.google.com/maps/search/?api=1&query=Greater+Noida+Gaur+City+Uttar+Pradesh' 
                  target='_blank' 
                  rel='noreferrer' 
                  className='flex items-start gap-3.5 hover:text-cyan-glow transition duration-200 group'
                >
                  <div className='p-2.5 sm:p-3 rounded-xl bg-dark-200 border border-white/10 text-cyan-glow shrink-0'>
                    <FaLocationDot className='text-base sm:text-lg' />
                  </div>
                  <span className='pt-1.5 font-medium'>Greater Noida, Gaur City, Uttar Pradesh, India</span>
                </a>

                <a 
                  href='tel:+919756455554' 
                  className='flex items-center gap-3.5 hover:text-cyan-glow transition duration-200 group'
                >
                  <div className='p-2.5 sm:p-3 rounded-xl bg-dark-200 border border-white/10 text-purple-light shrink-0'>
                    <FaPhone className='text-base sm:text-lg' />
                  </div>
                  <span className='font-medium'>+91 97564 55554</span>
                </a>

                <a 
                  href='mailto:sharmasuprabh2608@gmail.com' 
                  className='flex items-center gap-3.5 break-all hover:text-cyan-glow transition duration-200 group'
                >
                  <div className='p-2.5 sm:p-3 rounded-xl bg-dark-200 border border-white/10 text-pink shrink-0'>
                    <FaEnvelope className='text-base sm:text-lg' />
                  </div>
                  <span className='font-medium'>sharmasuprabh2608@gmail.com</span>
                </a>
              </div>
            </div>

            <div className='mt-8 border-t border-white/10 pt-6'>
              <p className='mb-3 text-xs font-bold uppercase tracking-wider text-cyan-glow'>Connect Online</p>
              <div className='flex flex-wrap gap-3.5'>
                <a 
                  href='https://www.linkedin.com/in/suprabh-sharma-13321b2a5' 
                  target='_blank' 
                  rel='noreferrer' 
                  aria-label='LinkedIn' 
                  className='rounded-xl border border-white/10 bg-dark-200 p-3 text-base sm:text-lg text-gray-300 hover:border-cyan-glow hover:text-cyan-glow hover:scale-105 transition-all duration-200'
                >
                  <FaLinkedin />
                </a>
                <a 
                  href='https://github.com/SuprabhSharma' 
                  target='_blank' 
                  rel='noreferrer' 
                  aria-label='GitHub' 
                  className='rounded-xl border border-white/10 bg-dark-200 p-3 text-base sm:text-lg text-gray-300 hover:border-purple hover:text-purple-light hover:scale-105 transition-all duration-200'
                >
                  <FaGithub />
                </a>
                <a 
                  href='https://www.instagram.com/sharma__ba52' 
                  target='_blank' 
                  rel='noreferrer' 
                  aria-label='Instagram' 
                  className='rounded-xl border border-white/10 bg-dark-200 p-3 text-base sm:text-lg text-gray-300 hover:border-pink hover:text-pink hover:scale-105 transition-all duration-200'
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className='mt-14 text-center text-xs text-gray-500 font-medium'>
          © {new Date().getFullYear()} Suprabh Sharma. Designed & Built with Precision.
        </p>
      </div>
    </section>
  )
}

export default Contact
