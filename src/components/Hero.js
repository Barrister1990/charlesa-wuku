import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { Link as ScrollLink } from 'react-scroll'

const Hero = () => {
  const roles = [
    'Software Developer',
    'Frontend Engineer',
    'Backend Developer',
    'Full Stack Developer',
    'Coding Instructor',
  ]
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [letterCount, setLetterCount] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const typingSpeed = useRef(100) 
  const deletingSpeed = useRef(50) 
  const completePause = useRef(1500) 
  
  // Typing effect
  useEffect(() => {
    let timer
    const currentRole = roles[currentRoleIndex]
    
    if (!isDeleting && letterCount < currentRole.length) {
      timer = setTimeout(() => {
        setLetterCount(letterCount + 1)
      }, typingSpeed.current)
    } else if (!isDeleting && letterCount === currentRole.length) {
      setIsComplete(true)
      timer = setTimeout(() => {
        setIsComplete(false)
        setIsDeleting(true)
      }, completePause.current)
    } else if (isDeleting && letterCount > 0) {
      timer = setTimeout(() => {
        setLetterCount(letterCount - 1)
      }, deletingSpeed.current)
    } else if (isDeleting && letterCount === 0) {
      setIsDeleting(false)
      setCurrentRoleIndex((currentRoleIndex + 1) % roles.length)
    }
    
    return () => clearTimeout(timer)
  }, [currentRoleIndex, letterCount, isDeleting, isComplete, roles])
  
  // Mouse parallax effect for background
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-teal-50 via-blue-50 to-indigo-50">
      {/* Animated background elements with soothing colors */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-teal-100/50 blur-3xl"
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          transition={{ type: "spring", damping: 50 }}
        />
        <motion.div 
          className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl"
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
          }}
          transition={{ type: "spring", damping: 50 }}
        />
        <motion.div 
          className="absolute -bottom-64 left-1/4 w-80 h-80 rounded-full bg-indigo-100/50 blur-3xl"
          animate={{
            x: mousePosition.x * -15,
            y: mousePosition.y * -15,
          }}
          transition={{ type: "spring", damping: 50 }}
        />
      </div>
      
      <div className="container mx-auto px-4 pt-16 md:pt-20 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          {/* Profile picture with softer animated ring */}
          <motion.div 
            className="relative h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden mx-auto mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-300 via-blue-300 to-indigo-300 rounded-full animate-spin-slow" />
            <div className="absolute inset-0.5 bg-white rounded-full" />
            <div className="absolute inset-2 rounded-full overflow-hidden">
              <img
                src="/logo.jpg"
                alt="Charles Awuku"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Name with animated highlight */}
          <div className="overflow-hidden">
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Hi, I'm{" "}
              <motion.span 
                className="relative inline-block text-teal-600"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                Charles Awuku
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </motion.span>
            </motion.h1>
          </div>
          
          {/* Typing effect with soothing colors */}
          <div className="h-8 md:h-10 flex justify-center items-center overflow-hidden mb-6">
            <div className="flex items-center text-lg md:text-xl text-slate-600">
              <span className="mr-2">I'm a</span>
              <div className="relative font-medium text-blue-600">
                {roles[currentRoleIndex].substring(0, letterCount)}
                <span className={`absolute right-[-8px] top-0 h-full w-[2px] bg-blue-500 ${isComplete ? 'opacity-0' : 'animate-blink'}`}></span>
              </div>
            </div>
          </div>
          
          {/* Description with staggered reveal */}
          <div className="overflow-hidden">
            <motion.p 
              className="text-base md:text-lg text-slate-600 max-w-xl mx-auto mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              I build modern, responsive, performant web and mobile applications using the latest technologies.
              Passionate about creating exceptional user experiences and solving complex problems.
            </motion.p>
          </div>
        </motion.div>

        {/* Buttons with hover effects and soothing colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
            <motion.button 
              className="w-full sm:w-auto px-6 py-3 bg-teal-500 text-white rounded-md flex items-center justify-center gap-2 relative overflow-hidden group shadow-md"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.span 
                className="absolute inset-0 bg-white/20 translate-y-full"
                whileHover={{ translateY: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">View My Work</span>
              <motion.span
                initial={{ x: -4, opacity: 0 }}
                whileHover={{ x: 2, opacity: 1 }}
                className="relative z-10"
              >
                →
              </motion.span>
            </motion.button>
          </ScrollLink>
          
          <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
            <motion.button 
              className="w-full sm:w-auto px-6 py-3 bg-white border border-teal-200 text-slate-700 rounded-md flex items-center justify-center gap-2 relative overflow-hidden group shadow-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.span 
                className="absolute inset-0 bg-teal-50 translate-y-full"
                whileHover={{ translateY: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Contact Me</span>
            </motion.button>
          </ScrollLink>
        </motion.div>

        {/* Social icons with staggered animation and soothing colors */}
        <motion.div
          className="flex gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: <FiGithub size={22} />, url: "https://github.com/barrister1990" },
            { icon: <FiLinkedin size={22} />, url: "https://www.linkedin.com/in/charles-awuku-385b93242" },
            { icon: <FiTwitter size={22} />, url: "https://twitter.com/AwukuCharles6" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-12 w-12 rounded-full bg-white shadow-sm border border-blue-100 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors duration-300"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 300,
                delay: 0.8 + index * 0.1
              }}
              whileHover={{ 
                scale: 1.15,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.4 }
              }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll down indicator with soothing colors */}
        <motion.div
          className="hidden md:block absolute bottom-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <ScrollLink to="about" smooth={true} duration={500} offset={-70} className="cursor-pointer">
            <motion.div
              className="flex flex-col items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors duration-300"
              animate={{ y: [0, 8, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              <span className="text-xs uppercase tracking-widest">Scroll Down</span>
              <FiArrowDown size={20} className="text-teal-500" />
            </motion.div>
          </ScrollLink>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero