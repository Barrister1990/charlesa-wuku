import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { AnimatePresence, motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
export default function Home() {
  const [loading, setLoading] = useState(true)
  
  // Define primary color
  const primaryColor = "#C49B66"
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>

    <NextSeo
        title="Home – Charles Awuku | Senior Full Stack Developer"
        description="Explore the portfolio of Charles Awuku, a senior full stack developer building modern apps with React, Next.js, React Native, Supabase, Firebase, Node.js and more."
        canonical="https://charlesawuku.com"
        openGraph={{
          url: 'https://charlesawuku.com',
          title: 'Home – Charles Awuku',
          description: 'Explore the portfolio of Charles Awuku...',
          images: [
            {
              url: 'https://charlesawuku.com/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Charles Awuku Portfolio',
            },
          ],
        }}
      />
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div 
          className="flex flex-col items-center justify-center h-screen"
          style={{ 
            background: "linear-gradient(135deg, #121212 0%, #2a2a2a 100%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative design elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute"
              style={{ 
                top: '15%', 
                left: '10%', 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                border: `2px solid ${primaryColor}`,
                opacity: 0.2
              }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2] 
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute"
              style={{ 
                bottom: '25%', 
                right: '15%', 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                border: `1px solid ${primaryColor}`,
                opacity: 0.3
              }}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          <motion.div className="relative z-10 flex flex-col items-center">
            {/* Logo/monogram container with glowing effect */}
            <motion.div 
              className="relative mb-8 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              {/* Outer glow circle */}
              <motion.div 
                className="absolute rounded-full"
                style={{ 
                  width: '100px', 
                  height: '100px', 
                  background: `radial-gradient(circle, ${primaryColor}33 0%, transparent 70%)`,
                }}
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Initials */}
              <motion.div 
                className="text-5xl font-bold z-10"
                style={{ color: primaryColor }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                CA
              </motion.div>
            </motion.div>
            
            {/* Loading bar with custom styling */}
            <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full"
                style={{ backgroundColor: primaryColor }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </div>
            
            {/* Percentage counter */}
            <motion.div
              className="mt-2 text-xs text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Loading Portfolio
              </motion.span>
            </motion.div>
            
            {/* Developer title with shine effect */}
            <motion.div
              className="mt-6 text-sm relative"
              style={{ color: primaryColor }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="relative overflow-hidden">
                <span className="font-medium tracking-wider">FULL STACK DEVELOPER</span>
                <motion.div 
                  className="absolute inset-0"
                  style={{ 
                    background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)`,
                  }}
                  animate={{ x: ["100%", "-100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                />
              </div>
            </motion.div>
          </motion.div>
          
          {/* Animated dots with custom color */}
          <div className="flex justify-center mt-12">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 mx-1 rounded-full"
                style={{ backgroundColor: primaryColor }}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div 
          className="min-h-screen bg-background text-foreground w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main>
            <section id="hero">
              <Hero />
            </section>
             <section id="about">
              <About />
            </section>
             <section id="skills">
              <Skills />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </main>
          <Footer />
        
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}