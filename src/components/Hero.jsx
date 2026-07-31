import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { assets } from '../assets/assets'

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  const rotateX = useSpring(
    useTransform(mouseY, [-150, 150], [8, -8]),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-150, 150], [-8, 8]),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const handleMouseMove = (e) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      animate={{ opacity: 1, y: 0 }}
      id='home'
      className='min-h-svh flex items-center pt-20 pb-16 bg-linear-to-r from-[#1a1a1a] via-dark-300 to-[#1a1a1a]'
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/*left side div*/}
        <div className="md:w-3/5 lg:w-[58%] text-left">
          <h1 className="font-extrabold leading-tight mb-6">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Hi, I'm
            </span>

            <span
              className="
      mt-2 block
      text-4xl sm:text-5xl md:text-6xl lg:text-7xl
      whitespace-normal sm:whitespace-nowrap
      max-w-full
      bg-linear-to-r
      from-purple
      via-pink-500
      to-cyan-400
      bg-clip-text
      text-transparent
    "
            >
              Suprabh Sharma
            </span>
          </h1>
          <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>
            Software Developer
          </h2>
          <p className='text-lg text-gray-300 mb-8'>
            I create Stunning Web Experience with Modern Technologies and innovative Design.
          </p>
          <div className='flex flex-wrap gap-4'>
            <a href='#projects' className='px-6 py-3 bg-purple rounded-lg font-medium transition duration-300 hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple'>View Work</a>
            <a href='#contact' className='px-6 py-3 border border-purple rounded-lg font-medium transition duration-300 hover:bg-purple/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple'>Contact Me</a>
          </div>

        </div>
        {/*right side image*/}
        {/* Right */}
        <div className="w-full md:w-[42%] lg:w-[40%] flex justify-center">
          <motion.div
  className="relative w-64 h-64 md:w-80 md:h-80"
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
  style={{
    rotateX,
    rotateY,
    transformPerspective: 1200,
    transformStyle: "preserve-3d",
    willChange: "transform",
  }}
>
  {/* Glow */}
  <div
    className="
      absolute inset-0
      rounded-full
      bg-linear-to-r
      from-purple
      via-pink-500
      to-cyan-400
      blur-2xl
      opacity-40
      scale-110
    "
  />

  {/* Gradient Ring */}
  <div
    className="
      absolute inset-0
      rounded-full
      bg-linear-to-r
      from-purple
      to-pink-500
      p-1
    "
  >
    <div className="w-full h-full rounded-full bg-dark-300" />
  </div>

  {/* Image */}
  <motion.img
    src={assets.profileImg}
    alt="Portrait of Suprabh Sharma"
    animate={shouldReduceMotion ? { y: 0 } : { y: [0, -15, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute inset-1
      rounded-full
      object-cover
      w-[calc(100%-8px)]
      h-[calc(100%-8px)]
      shadow-[0_20px_60px_rgba(168,85,247,0.35)]
      select-none
    "
    draggable={false}
  />
</motion.div>

        </div>

      </div>

    </motion.div>
  )
}

export default Hero
