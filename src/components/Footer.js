import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: <FiGithub size={20} />, url: 'https://github.com/barrister1990' },
    { name: 'LinkedIn', icon: <FiLinkedin size={20} />, url: 'https://www.linkedin.com/in/charles-awuku-385b93242' },
    { name: 'Twitter', icon: <FiTwitter size={20} />, url: 'https://twitter.com/AwukuCharles6' },
  ];

  const footerLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

const copyEmail = () => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText('charlesawuku2010@gmail.com')
      .then(() => {
        setIsEmailCopied(true);
        setTimeout(() => setIsEmailCopied(false), 2000);
      })
      .catch(err => {
        console.error('Clipboard write failed:', err);
        fallbackCopyEmail();
      });
  } else {
    fallbackCopyEmail();
  }
};

const fallbackCopyEmail = () => {
  const textarea = document.createElement('textarea');
  textarea.value = 'charlesawuku2010@gmail.com';
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    setIsEmailCopied(true);
    setTimeout(() => setIsEmailCopied(false), 2000);
  } catch (err) {
    console.error('Fallback: Copy failed', err);
  }
  document.body.removeChild(textarea);
};


  // Fade in animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="relative bg-background pt-20 pb-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C49B66] to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-8 h-8 rounded-full bg-[#C49B66]/10"></div>
      <div className="absolute top-12 right-1/3 w-12 h-12 rounded-full bg-[#C49B66]/5"></div>
      <div className="absolute bottom-20 left-1/5 w-16 h-16 rounded-full bg-[#C49B66]/5"></div>
      
      <div className="container mx-auto px-4">


        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* About Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground/90 relative inline-block">
              About Me
              <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-[#C49B66]"></span>
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Full Stack Developer specializing in creating modern, accessible, and responsive web applications 
              with a focus on exceptional user experiences and performance optimization.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-foreground/5 hover:bg-[#C49B66]/10 text-foreground/70 hover:text-[#C49B66] transition-all duration-300"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground/90 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-[#C49B66]"></span>
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-foreground/70 hover:text-[#C49B66] transition-colors duration-300 cursor-pointer inline-flex items-center group"
                  >
                    <span className="h-1 w-0 bg-[#C49B66] mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground/90 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-[#C49B66]"></span>
            </h3>
            <p className="text-foreground/80">
              Have a project in mind or interested in working together? Let&apos;s make something amazing!
            </p>
            <button
              onClick={copyEmail}
              className="flex items-center px-3 py-2 rounded-lg bg-foreground/5 hover:bg-[#C49B66]/10 text-foreground/80 hover:text-[#C49B66] transition-all duration-300"
            >
              <FiMail size={18} className="mr-2" />
              <span>charlesawuku2010@gmail.com</span>
              {isEmailCopied && (
                <span className="text-xs text-[#C49B66] ml-2 bg-[#C49B66]/10 px-2 py-0.5 rounded">Copied!</span>
              )}
            </button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-foreground/10">
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            &copy; {currentYear} Charles Awuku. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-foreground/60">Made with passion</span>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-[#C49B66]"
            >
              ❤
            </motion.div>
            <ScrollLink
              to="hero"
              smooth={true}
              duration={700}
              className="ml-6 flex items-center space-x-1 text-sm text-foreground/60 hover:text-[#C49B66] transition-colors duration-300"
            >
              <span>Top</span>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FiArrowUp size={14} />
              </motion.div>
            </ScrollLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;