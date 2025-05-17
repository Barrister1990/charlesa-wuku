import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-[#C49B66]"
        >
          <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer flex items-center">
            <span className="text-[#C49B66]">Charles</span>
            <span className="text-foreground ml-1">Awuku</span>
          </ScrollLink>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="relative group text-foreground hover:text-[#C49B66] transition-colors duration-300 cursor-pointer font-medium"
                activeClass="text-[#C49B66] font-medium"
                spy={true}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C49B66] group-hover:w-full transition-all duration-300"></span>
              </ScrollLink>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground hover:text-[#C49B66] transition-colors p-2 rounded-full bg-background/20 hover:bg-background/30"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-sm border-t border-[#C49B66]/20"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-foreground hover:text-[#C49B66] transition-colors py-2 cursor-pointer pl-2 border-l-2 border-transparent hover:border-[#C49B66]"
                activeClass="text-[#C49B66] font-medium border-l-2 border-[#C49B66] pl-2"
                spy={true}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;