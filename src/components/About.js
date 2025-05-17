
import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'

const About = () => {
  return (
    <div className="py-20 bg-blue-50/70">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full md:w-1/3"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-300/30 to-blue-300/30 rounded-lg blur-lg"></div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                <img
                  src="/logo.jpg"
                  alt="Charles Awuku"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full md:w-2/3"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Software Developer</h3>
            <p className="text-slate-600 mb-6">
              I&apos;m a passionate software developer with 8+ years of experience in building modern web applications. 
              I specialize in frontend development with React and Next.js, as well as backend development with Node.js.
              My goal is to create intuitive, efficient, and visually appealing applications that solve real-world problems.
            </p>
            <p className="text-slate-600 mb-6">
              When I&apos;m not coding, I enjoy reading and playing games. I believe in continuous learning and staying updated with the latest 
              technologies and best practices in the industry.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 bg-white p-6 rounded-lg shadow-sm border border-teal-100">
              <div>
                <p className="text-slate-700"><strong className="text-teal-600">Name:</strong> Charles Awuku</p>
              </div>
              <div>
                <p className="text-slate-700"><strong className="text-teal-600">Email:</strong>charlesawuku2010@gmail.com</p>
              </div>
              <div>
                <p className="text-slate-700"><strong className="text-teal-600">Location:</strong> Texas,USA </p>
              </div>
              <div>
                <p className="text-slate-700"><strong className="text-teal-600">Availability:</strong> Available for freelance</p>
              </div>
            </div>
            
            <motion.a 
              href="/your-resume.pdf" 
              download 
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-600 transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FiDownload size={18} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About