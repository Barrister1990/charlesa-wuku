import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { FaAndroid, FaApple, FaGlobe } from 'react-icons/fa'
import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi'

const projectsData = [
    {
    id: 'project-8',
    title: 'TaskDey App',
    slug: 'taskdey',
    description: 'A mobile app connecting clients with vocational service providers. Full-stack implementation.',
    image: '/Tasdey.png',
    tags: ['React Native', 'Expo', 'Supabase', 'Node.js','Firebase'],
    website: 'https://taskdey.com',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.barrister1990.joymish&pcampaignid=web_share',
    iosUrl: 'https://apps.apple.com/gh/app/taskdey/id6739984570',
    featured: true,
    type: 'mobile',
  },
    {
    id: 'project-7',
    title: 'Richy Electrical Services Website',
    slug: 'richy-electricals',
    description: 'A service showcase website for a UK-based electrical company.', 
    image: '/richyelectricals.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://richyelectricals.co.uk',
    github: 'https://github.com/Barrister1990/richyelectricals',
    featured: true,
    type: 'web',
  },
    {
    id: 'project-10',
    title: 'Pastor Benjamin Online Library',
    slug: 'pbol',
    description: 'A mobile library app for sermon audio and gospel literature.',
    image: '/pbol.jpg',
    tags: ['React Native', 'Supabase', 'Firebase'],
    iosUrl: 'https://play.google.com/store/apps/details?id=com.barrister2010.pbol&pcampaignid=web_share',
    androidUrl: 'https://apps.apple.com/gh/app/pastor-benjamin-online-library/id6739703711',
    featured: true,
    type: 'mobile',
  },
  {
    id: 'project-1',
    title: 'Agrilink',
    slug: 'agrilink',
    description: 'A full stack modern e-commerce platform for agricultural products with order tracking and Paystack payment integration.',
    image: '/agrilink.png',
    tags: ['Next.js', 'Tailwind CSS', 'Supabase', 'Paystack'],
    github: 'https://github.com/Barrister1990/agrilink',
    demo: 'https://agrilink-taupe.vercel.app/',
    featured: true,
    type: 'web',
  },
  {
    id: 'project-2',
    title: 'Farm Eco',
    slug: 'farm-eco',
    description: 'Full-stack agriculture-based platform for selling and renting tools and equipment with order tracking and Paystack.',
    image: '/farm-eco.png',
    tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Zustand'],
    github: 'https://github.com/yourusername/farmeco',
    demo: 'https://farm-eco.vercel.app/',
    featured: true,
    type: 'web',
  },
  {
    id: 'project-3',
    title: 'Apprentice Lab Website',
    slug: 'apprentice-lab-website',
    description: 'A static informational website built with HTML, CSS, and JavaScript for a software company.',
    image: '/apprenticelab.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://apprenticelabgh.com',
    featured: false,
    type: 'web',
  },
  {
    id: 'project-4',
    title: 'Temcot Website',
    slug: 'temcot-website',
    description: 'A clean and professional website for Temcot, built with modern HTML/CSS standards.',
    image: '/temcotschools.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    demo: 'https://temcotschools.com',
    featured: false,
    type: 'web',
  },
  {
    id: 'project-5',
    slug: 'temcot-sms',
    title: 'School Management System – Temcot',
    description: 'A full school system for internal management built with modern web technologies.',
    image: '/Ts.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    demo: 'https://app.temcotschools.com',
    featured:false,
    type: 'web',
  },
  {
    id: 'project-6',
    slug: 'hohoe-sms',
    title: 'School Management System – Hohoe Assembly',
    description: 'Tailored school management system for Hohoe Municipal Assembly.',
    image: '/ho.jpg',
    tags: ['React', 'Node.js','Materail UI', 'Boostrap', 'MongoDB'],
    demo: 'https://hohoeepa.netlify.app',
    featured: false,
    type: 'web',
  },

  {
    id: 'project-9',
    title: 'Ree Services App',
    slug: 'ree-services',
    description: 'Store management and bookkeeping mobile app for small businesses.',
    image: '/ree.jpg',
    tags: ['React Native', 'Supabase', 'Express', 'Node.js'],
    androidUrl: 'https://play.google.com/store/apps/details?id=com.reeservices.Ree&pcampaignid=web_share',
    iosUrl: 'https://apps.apple.com/gh/app/ree-services/id6742057296',
    website: 'https://rewill.com',
    featured: true,
    type: 'mobile',
  },
  {
    id: 'project-10',
    title: 'Pastor Benjamin Online Library',
    slug: 'pbol',
    description: 'A mobile library app for sermon audio and gospel literature.',
    image: '/pbol.jpg',
    tags: ['React Native', 'Supabase', 'Firebase'],
    iosUrl: 'https://play.google.com/store/apps/details?id=com.barrister2010.pbol&pcampaignid=web_share',
    androidUrl: 'https://apps.apple.com/gh/app/pastor-benjamin-online-library/id6739703711',
    featured: true,
    type: 'mobile',
  }
];



const ProjectCard = ({ project, featured = false }) => {
  // Different rendering for mobile vs web projects
  const isMobileApp = project.type === 'mobile';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`group relative overflow-hidden rounded-xl bg-card ${
        featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      <div className="flex flex-col md:flex-row h-full">
        <div className={`relative ${featured ? 'md:w-1/2' : 'h-48'} overflow-hidden`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
        </div>
        
        <div className={`relative p-6 md:p-8 ${featured ? 'md:w-1/2' : ''} flex flex-col`}>
          {project.featured && (
            <span className="absolute top-8 right-8 px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary">
              Featured
            </span>
          )}
          
          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
          </Link>
          
          <p className="text-foreground/70 mb-6 flex-grow">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            {isMobileApp ? (
              // Mobile app links (App Store, Google Play, Website)
              <>
                <a
                  href={project.iosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <FaApple size={18} />
                  <span className="text-sm">iOS</span>
                </a>
                <a
                  href={project.androidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <FaAndroid size={18} />
                  <span className="text-sm">Android</span>
                </a>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <FaGlobe size={18} />
                  <span className="text-sm">Website</span>
                </a>
              </>
            ) : (
              // Web project links (GitHub and Demo)
              <>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <FiGithub size={18} />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <FiExternalLink size={18} />
                  <span className="text-sm">Demo</span>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [filter, setFilter] = useState('featured');
  const [showAll, setShowAll] = useState(false);
  
  const filteredProjects = filter === 'all'
    ? projectsData
    : filter === 'featured'
      ? projectsData.filter(p => p.featured)
      : filter === 'mobile'
        ? projectsData.filter(p => p.type === 'mobile')
        : filter === 'web'
          ? projectsData.filter(p => p.type === 'web')
          : projectsData.filter(p => p.tags.includes(filter));
      
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70">
            Here&apos;s a showcase of my recent work. Each project represents my passion for creating 
            intuitive, efficient, and visually appealing solutions.
          </p>
        </motion.div>

        <div className="overflow-x-auto pb-4 mb-12 relative">
          <div className="flex justify-center flex-wrap gap-3 mb-2 min-w-max mx-auto max-w-fit">
            {['featured', 'all', 'web', 'mobile', 'Next.js', 'React', 'React Native', 'TypeScript', 'Node.js'].map((category) => (
              <button
                key={category}
                onClick={() => {
                  setFilter(category);
                  setShowAll(false);
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className="md:hidden flex justify-center mt-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <span className="animate-pulse">←</span>
              <span>Swipe for more categories</span>
              <span className="animate-pulse">→</span>
            </div>
          </div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              featured={index === 0 && filter === 'featured'} 
            />
          ))}
        </motion.div>
        
        {filteredProjects.length > 3 && !showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <button
              onClick={() => setShowAll(true)}
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              <span>View All Projects</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        )}
        
        {showAll && filteredProjects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <button
              onClick={() => setShowAll(false)}
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-muted text-foreground hover:bg-muted/80 transition-all duration-300"
            >
              <span>Show Less</span>
            </button>
          </motion.div>
        )}
        
       
      </div>
    </section>
  )
}

export default Projects